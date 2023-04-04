import React from 'react';
import { describe, it } from 'vitest';
import Footer from '../components/Footer';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('Footer', async () => {
  it('Should render footer correctly', () => {
    render(<Footer />, { wrapper: BrowserRouter });
  });
});
