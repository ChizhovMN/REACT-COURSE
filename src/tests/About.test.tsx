import React from 'react';
import { describe, it } from 'vitest';
import About from '../pages/About';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe('About', async () => {
  it('Should render About correctly', () => {
    render(<About />, { wrapper: BrowserRouter });
  });
});
