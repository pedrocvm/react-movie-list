import { Meta, Story } from '@storybook/react/types-6-0';
import BackToTopButton from '.';

export default {
  title: 'Structure/BackToTopButton',
  component: BackToTopButton,
  args: {},
  argTypes: {}
} as Meta;

export const Basic: Story = (args) => <BackToTopButton {...args} />;
