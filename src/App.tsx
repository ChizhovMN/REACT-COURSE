import React, { FunctionComponent } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import MainPage from './pages/Main';
import AboutPage from './pages/About';
import Page404 from './pages/404';
import FormPage from './pages/FormPage';
import Footer from './components/Footer';
import { ProductsType } from 'types';
import ErrorBoundary from './components/ErrorBoundary';

const App: FunctionComponent<ProductsType> = ({ products }) => {
  return (
    <>
      <Header />
      <main className="main">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<MainPage products={products} />} />
            <Route path="/about_us" element={<AboutPage />} />
            <Route path="/form" element={<FormPage />}></Route>
            <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
};

export default App;
