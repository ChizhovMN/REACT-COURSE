import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
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
          <Route path="/404" element={<Page404 />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </>
    );
  }
}

export default App;
