import React from 'react';
import { describe, expect, it } from 'vitest';
import ErrorMessage from '../components/form/ErrorMessage';
import { render, screen } from '@testing-library/react';

describe('Error message in form', () => {
  it('Should render the error correctrly with text', () => {
    const fakeError = 'fake error';
    render(<ErrorMessage errorText={fakeError} />);
    expect(screen.getByText(fakeError));
  });
});
