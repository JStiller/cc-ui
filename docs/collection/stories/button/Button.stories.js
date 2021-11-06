import { createButton } from './Button';
export default {
  title: 'Button',
  argTypes: {
    href: { control: 'text' },
    primary: { control: 'boolean' },
    innerHTML: { control: 'text' },
  },
};
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton(args);
};
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
export const Secondary = Template.bind({});
Secondary.args = {};
