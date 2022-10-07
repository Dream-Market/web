import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { EntryLayout } from './EntryLayout';

describe('<EntryLayout />', () => {
  test('it should mount', () => {
    render(<EntryLayout />);

    const entryLayout = screen.getByTestId('EntryLayout');
    expect(entryLayout).toBeInTheDocument();
  });
});
