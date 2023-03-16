import React from 'react';
import { BrowserRouter, Navigate, Route, Router, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import MainPage from './pages/Main';
import AboutPage from './pages/About';
import Page404 from './pages/404';
import Footer from './components/Footer';
import { AppStateProps, ProductsType } from 'types';

class App extends React.Component<ProductsType, AppStateProps> {
  constructor(props: ProductsType) {
    super(props);
    this.state = {
      location: '',
      search: '',
      cards: props,
    };
    // this.updateLocation.bind(this);
  }
  componentDidMount(): void {
    const search = localStorage.getItem('search-field') || '';
    this.setState(
      () => ({
        location: window.location.pathname,
        search: search,
      }),
      () => console.log('first render')
    );
  }
  componentWillUnmount(): void {
    window.addEventListener('beforeunload', () =>
      localStorage.setItem('search-field', this.state.search)
    );
  }
  render(): React.ReactNode {
    console.log('data', this.props.products);
    return (
      <>
        <Header location={this.state.location} handle={() => this.updateLocation()} />
        <main className="main">
          <Routes>
            <Route path="/" element={<MainPage {...this.state.cards} />} />
            <Route path="/about_us" element={<AboutPage />} />
            <Route path="/404" element={<Page404 />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
        <Footer />
      </>
    );
  }
  updateLocation() {
    this.setState({
      location: window.location.pathname,
    });
  }
}

export default App;
