import { render, screen } from '@testing-library/react';
import Sizebar from '.';

const tagNameTest = 'renders Sizebar :'

test(`${tagNameTest} validate title`, () => {
  render(<Sizebar />);
  const linkElement = screen.getByText(/StoreApi/i);
  expect(linkElement).toBeInTheDocument();
});
