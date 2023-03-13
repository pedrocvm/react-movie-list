import { Meta, Story } from '@storybook/react/types-6-0';
import { Add } from '@styled-icons/material-outlined';
import Button, { ButtonProps } from '.';

export default {
  title: 'Generics/Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string',
      control: 'text'
    },
    size: {
      type: 'string',
      defaultValue: 'medium',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large']
      }
    },
    fullWidth: {
      type: 'boolean',
      defaultValue: false,
      control: 'boolean'
    },
    rounded: {
      type: 'boolean',
      defaultValue: false,
      control: 'boolean'
    },
    minimal: {
      type: 'boolean',
      defaultValue: false,
      control: 'boolean'
    },
    icon: {
      type: 'string',
      control: 'object'
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
      control: 'boolean'
    },
    onClick: {
      action: 'clicked',
      table: {
        disable: true
      }
    }
  }
} as Meta;

export const Basic: Story<ButtonProps> = (args) => <Button {...args} />;
Basic.args = {
  children: 'Click'
};

export const WithIcon: Story<ButtonProps> = (args) => <Button {...args} />;

WithIcon.args = {
  size: 'small',
  children: 'Click',
  icon: <Add />
};

export const AsLink: Story<ButtonProps> = (args) => <Button {...args} />;

AsLink.args = {
  size: 'large',
  children: 'Click',
  as: 'a',
  href: '/link'
};
