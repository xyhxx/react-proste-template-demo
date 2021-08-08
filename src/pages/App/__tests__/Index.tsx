import {fireEvent, render, screen as sc} from '@testing-library/react';
import App from '../Index';

test(`
  1. click increment btn, innterHTML is count is 1
  2. click reduce btn, innertTHML is count is 0
`, () => {
  render(<App />);

  const incrementBtn = sc.getByTestId('increment');
  const reduceBtn = sc.getByTestId('reduce');
  const html = sc.getByTestId('title');

  fireEvent.click(incrementBtn);

  expect(html).toHaveTextContent('count is 1');

  fireEvent.click(reduceBtn);

  expect(html).toHaveTextContent('count is 0');
});