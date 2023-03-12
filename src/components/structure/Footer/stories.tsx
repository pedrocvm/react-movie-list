import { Meta, Story } from '@storybook/react/types-6-0';
import Footer from '.';

export default {
  title: 'Structure/Footer',
  component: Footer,
  args: {},
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'Light'
    }
  }
} as Meta;

export const Basic: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <Footer {...args} />;
  </div>
);

Basic.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
};
