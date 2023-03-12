import { Meta, Story } from '@storybook/react/types-6-0';
import Card, { CardProps } from '.';

export default {
  title: 'Generics/Card',
  component: Card,
  args: {
    isFlippable: true
  },
  argTypes: {}
} as Meta;

export const Flippable: Story<CardProps> = (args) => (
  <Card {...args}>
    <div>Front content</div>
    <div>Back content</div>
  </Card>
);

export const NotFlippable: Story<CardProps> = () => (
  <Card>
    <div>Front content</div>
    <div>Back content</div>
  </Card>
);
