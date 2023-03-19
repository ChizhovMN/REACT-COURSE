import React from 'react';
import { describe, it } from 'vitest';
import Page404 from '../pages/404';
import { render } from '@testing-library/react';

describe('404 page', async () => {
  it('Should render 404 page correctly', () => {
    render(<Page404 />);
  });
});
