import { Meta, Story } from '@storybook/react/types-6-0';
import Pagination, { PaginationProps } from '.';

export default {
  title: 'Ui/Pagination',
  component: Pagination,
  args: {
    currentPage: 1,
    totalItems: 100
  },
  argTypes: {
    onPaginate: {
      action: 'paginate'
    }
  }
} as Meta;

export const Basic: Story<PaginationProps> = (args) => (
  <div style={{ maxWidth: '138rem', margin: '0 auto' }}>
    <Pagination {...args} />
  </div>
);
