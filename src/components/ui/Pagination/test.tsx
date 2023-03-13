import { fireEvent } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import Pagination from '.';

const mockedProps = {
  currentPage: 1,
  totalPages: 10,
  maxPageSelectors: 10,
  onPaginate: jest.fn()
};

describe('Pagination component', () => {
  it('should render a disabled previous button when on the first page', () => {
    const { getByLabelText } = renderWithTheme(<Pagination {...mockedProps} />);
    const prevButton = getByLabelText('Previous Page');
    expect(prevButton.parentElement).toBeDisabled();
  });

  it('should render a disabled next button when on the last page', () => {
    const props = { ...mockedProps, currentPage: 10 };
    const { getByLabelText } = renderWithTheme(<Pagination {...props} />);
    const nextButton = getByLabelText('Next Page');
    expect(nextButton.parentElement).toBeDisabled();
  });

  it('should call onPaginate when a page button is clicked', () => {
    const { getByText } = renderWithTheme(<Pagination {...mockedProps} />);
    const pageButton = getByText('2');
    fireEvent.click(pageButton);
    expect(mockedProps.onPaginate).toHaveBeenCalledWith(2);
  });

  it('should render the maxPageSelectors number of page selectors', () => {
    const { getAllByRole } = renderWithTheme(<Pagination {...mockedProps} />);
    const pageSelectors = getAllByRole('button');
    expect(pageSelectors.length).toEqual(13);
  });
});
