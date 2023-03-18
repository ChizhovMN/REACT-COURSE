import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import './App.css';
import MainPage from './pages/Main';
import AboutPage from './pages/About';
import Page404 from './pages/404';
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
  componentDidMount(): void {
    const search = localStorage.getItem('search-field') ?? '';
    this.setState(
      () => ({
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
    const cards =
      this.state.search.length > 0
        ? this.state.cards.products.filter(
            //THAT SEARCH VALUE TRY TO FIND COMMON IN BRAND ,CATEGORY OR TITLE, NOT START FROM BEGIN
            (item) =>
              item.title.toLowerCase().includes(this.state.search.toLowerCase()) ||
              item.brand.toLowerCase().includes(this.state.search.toLowerCase()) ||
              item.category.toLowerCase().includes(this.state.search.toLowerCase())
          )
        : this.state.cards.products;
    console.log('cards', cards);
    return (
      <>
        <Header />
        <main className="main">
          <ErrorBoundary>
            <Routes>
              <Route
                path="/"
                element={
                  <MainPage
                    products={cards}
                    onChangeSearch={this.onChangeSearch}
                    search={this.state.search}
                  />
                }
              />
              <Route path="/about_us" element={<AboutPage />} />
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
    this.setState({ search: search });
  };
}

export default App;
