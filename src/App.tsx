import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import MainPage from './pages/main';
import AboutPage from './pages/About';
import Page404 from './pages/404';

class App extends React.Component {
  render(): React.ReactNode {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about_us" element={<AboutPage />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </>
    );
  }
}

export default App;
