import { RenderToPipeableStreamOptions, renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import './index.css';

export function renderApp(url: string, opts?: RenderToPipeableStreamOptions) {
  const stream = renderToPipeableStream(
    <StaticRouter location={url}>
      <React.StrictMode>
        <Provider store={store}>
          <App />
        </Provider>
      </React.StrictMode>
    </StaticRouter>,
    opts
  );
  return stream;
}
