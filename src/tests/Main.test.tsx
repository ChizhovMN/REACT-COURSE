import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main';

describe('Main section', async () => {
  it('Should render Main section correctly with items', () => {
    const exampleProducts = {
      products: [
        {
          id: 1,
          title: 'title',
          description: 'description',
          price: 1,
          discountPercentage: 1,
          rating: 1,
          stock: 1,
          brand: 'brand',
          category: 'category',
          thumbnail: '../public/placeholder.png',
          images: ['../public/placeholder.png'],
        },
      ],
    };
    const exampleSearch = '';
    const onChange = (value: string) => console.log(value);
    render(
      <MainPage
        products={exampleProducts.products}
        search={exampleSearch}
        onChangeSearch={() => onChange(exampleSearch)}
      />,
      {
        wrapper: BrowserRouter,
      }
    );
  });
  it('Should render Main section correctly without items', () => {
    const exampleSearch = '';
    const onChange = (value: string) => console.log(value);
    render(
      <MainPage
        products={[]}
        search={exampleSearch}
        onChangeSearch={() => onChange(exampleSearch)}
      />,
      {
        wrapper: BrowserRouter,
      }
    );
  });
});
