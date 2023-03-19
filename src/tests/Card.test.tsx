import React from 'react';
import { describe, it, expect, test } from 'vitest';
import Card from '../components/Card';
import { render, screen } from '@testing-library/react';

describe('Card', async () => {
  it('Should render the card correctly', () => {
    const cardExample = {
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
    };
    render(<Card {...cardExample} />);
  });
});
