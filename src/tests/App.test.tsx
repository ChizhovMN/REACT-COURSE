import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('App', async () => {
  it('Should render all app correctly with items', () => {
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
    render(<App products={exampleProducts.products} />, { wrapper: BrowserRouter });
  });
  it('Should render al app without items'),
    () => {
      render(<App products={[]} />, { wrapper: BrowserRouter });
    };
});
