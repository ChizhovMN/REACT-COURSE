import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import Page404 from '../pages/404';
import AboutPage from '../pages/About';
import FormPage from '../pages/FormPage';
import MainPage from '../pages/Main';

const Router = () => (
  <ErrorBoundary>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about_us" element={<AboutPage />} />
      <Route path="/form" element={<FormPage />}></Route>
      <Route path="/404" element={<Page404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </ErrorBoundary>
);

export default Router;
