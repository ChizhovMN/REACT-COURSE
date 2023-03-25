import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import MainPage from './pages/Main';
import AboutPage from './pages/About';
import Page404 from './pages/404';
import FormPage from './pages/FormPage';
import Footer from './components/Footer';
import { AppStateProps, ProductsType } from 'types';
import ErrorBoundary from './components/ErrorBoundary';

class App extends React.Component<ProductsType, AppStateProps> {
  constructor(props: ProductsType) {
    super(props);
    this.state = {
      search: '',
      cards: props,
    };
  }
  saveToLS = (value: string) => {
    localStorage.setItem('search-field', value);
  };
  componentDidMount(): void {
    const search = localStorage.getItem('search-field') ?? '';
    this.setState(() => ({
      search,
    }));
  }

  render(): React.ReactNode {
    const {
      cards: { products },
      search,
    } = this.state;
    const searchKey = search.toLowerCase();
    const cards =
      search.length > 0
        ? products.filter(
            // THAT SEARCH VALUE TRY TO FIND COMMON IN BRAND ,CATEGORY OR TITLE, NOT START FROM BEGIN
            (item) =>
              item.title.toLowerCase().includes(searchKey) ||
              item.brand.toLowerCase().includes(searchKey) ||
              item.category.toLowerCase().includes(searchKey)
          )
        : products;
    return (
      <>
        <Header />
        <main className="main">
          <ErrorBoundary>
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage products={cards} onChangeSearch={this.onChangeSearch} search={search} />
                }
              />
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
  }
  onChangeSearch = (search: string) => {
    this.setState(() => {
      this.saveToLS(search);
      return { search };
    });
  };
}

export default App;
