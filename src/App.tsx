import React, { FunctionComponent } from 'react';
import Header from './components/Header';
import './App.css';
import Footer from './components/Footer';
import Router from './components/Routes';

const App: FunctionComponent = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Router />
      </main>
      <Footer />
    </>
  );
};

export default App;
