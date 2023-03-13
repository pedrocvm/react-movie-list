import { Meta, Story } from '@storybook/react/types-6-0';
import Loading from '.';

export default {
  title: 'Ui/Loading',
  component: Loading,
  args: {},
  argTypes: {}
} as Meta;

export const Basic: Story = (args) => <Loading {...args} />;
