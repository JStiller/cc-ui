import { createCheckbox } from './Checkbox';
export default {
  title: 'Interactions/Checkbox',
  argTypes: {
    value: {
      name: 'Value',
      control: 'text',
      defaultValue: false,
    },
    checked: {
      name: 'Checked',
      control: 'boolean',
      defaultValue: false,
    },
    innerHTML: {
      name: 'Label',
      control: 'text',
      defaultValue: 'Checkbox',
    },
  },
};
const Template = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCheckbox(args);
};
export const Checkbox = Template.bind({});
Checkbox.args = {};
