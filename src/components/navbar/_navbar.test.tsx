import { render, screen } from '@testing-library/react';
import Navbar from '.';

const tagNameTest = 'renders navbar :'

test(`${tagNameTest} validate title`, () => {
  render(<Navbar />);
  const linkElement = screen.getByText(/StoreApi/i);
  expect(linkElement).toBeInTheDocument();
});
