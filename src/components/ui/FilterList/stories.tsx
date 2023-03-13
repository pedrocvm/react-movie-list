import { Meta, Story } from '@storybook/react/types-6-0';
import FilterList, { FilterListProps } from '.';
import genresMock from './mock';

export default {
  title: 'Ui/FilterList',
  component: FilterList,
  args: {
    genres: genresMock,
    selectedGenre: { id: 0, name: 'All' }
  },
  argTypes: {}
} as Meta;

export const Basic: Story<FilterListProps> = (args) => <FilterList {...args} />;
