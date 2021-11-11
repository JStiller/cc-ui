import { createButton } from './Button';
export default {
  title: 'Interactions/Button',
  argTypes: {
    href: {
      name: 'URL',
      description: 'false | string',
      control: 'text',
    },
    primary: {
      name: "Type",
      description: 'boolean',
      options: ['Primary', 'Secondary'],
      mapping: {
        Primary: true,
        Secondary: false,
      },
      defaultValue: 'Secondary',
      control: 'inline-radio',
    },
    innerHTML: {
      name: 'Label',
      description: 'string',
      control: 'text',
      defaultValue: 'Button',
    },
  },
};
const Template = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createButton(args);
};
export const Button = Template.bind({});
Button.args = {};
