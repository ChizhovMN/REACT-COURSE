import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { Request, Response } from 'express';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PORT = process.env.PORT || 3001;
const app = express();
const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom',
});
const isProd = process.env.NODE_ENV === 'production';
const entryServerPath = isProd ? './server/server-entry.js' : '/src/server-entry.tsx';
const { renderApp } = isProd
  ? await import(entryServerPath)
  : await vite.ssrLoadModule(entryServerPath);
const html = fs.readFileSync(path.resolve(__dirname, './index.html')).toString();
const parts = html.split('ssr-react');
app.use(vite.middlewares);

app.use('*', async (req: Request, res: Response) => {
  res.write(parts[0]);
  const stream = renderApp(req.originalUrl, {
    bootstrapModules: ['./src/client-entry'],
    onShellReady() {
      stream.pipe(res);
    },
    onAllReady() {
      res.write(parts[1]);
      res.end();
    },
    onError(err: string) {
      console.log(err);
    },
  });
});
console.log(`listening on http://localhost:${PORT}`);
app.listen(PORT);
