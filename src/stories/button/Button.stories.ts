import { Story, Meta } from '@storybook/html';
import { createButton } from './Button';

export default {
  title: 'Interactions/Button',
  argTypes: {
    href: { control: 'text' },
    primary: { control: 'boolean' },
    innerHTML: { control: 'text' },
  },
} as Meta;

const Template: Story<HTMLCcButtonElement> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton(args);
};

export const Primary = Template.bind({}) as Story<HTMLCcButtonElement>;
Primary.args = {
  primary: true,
};

export const Secondary = Template.bind({}) as Story<HTMLCcButtonElement>;
Secondary.args = {};
