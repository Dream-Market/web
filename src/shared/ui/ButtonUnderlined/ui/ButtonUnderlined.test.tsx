import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ButtonUnderlined } from './ButtonUnderlined';

describe('<ButtonUnderlined />', () => {
  test('it should mount', () => {
    render(<ButtonUnderlined />);

    const buttonUnderlined = screen.getByTestId('ButtonUnderlined');
    expect(buttonUnderlined).toBeInTheDocument();
  });
});
