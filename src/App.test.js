import { render } from '@testing-library/react';
import App from './App';

test('renders the address book', () => {
  const view = render(<App />);
  expect(view).toMatchSnapshot();
});
