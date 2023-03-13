import React from 'react';
import { fireEvent } from '@testing-library/react';
import FilterList, { FilterListProps } from '.';
import { renderWithTheme } from 'utils/tests/helpers';

const mockedProps: FilterListProps = {
  genres: [
    { id: 1, name: 'Action' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Drama' }
  ],
  selectedGenre: { id: 2, name: 'Comedy' },
  onSelect: jest.fn()
};

describe('FilterList component', () => {
  it('should render correctly', () => {
    const { getByText } = renderWithTheme(<FilterList {...mockedProps} />);
    expect(getByText('All')).toBeInTheDocument();
    expect(getByText('Action')).toBeInTheDocument();
    expect(getByText('Comedy')).toBeInTheDocument();
    expect(getByText('Drama')).toBeInTheDocument();
  });

  it('should call onSelect when clicking on a genre', () => {
    const { getByText } = renderWithTheme(<FilterList {...mockedProps} />);
    fireEvent.click(getByText('Action'));
    expect(mockedProps.onSelect).toHaveBeenCalledWith({
      id: 1,
      name: 'Action'
    });
  });

  it('should call onSelect with genre "All" when clicking on "All"', () => {
    const { getByText } = renderWithTheme(<FilterList {...mockedProps} />);
    fireEvent.click(getByText('All'));
    expect(mockedProps.onSelect).toHaveBeenCalledWith({ id: 0, name: 'All' });
  });
});
