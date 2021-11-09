import { createCheckbox } from './Checkbox';
export default {
  title: 'Interactions/Checkbox',
  argTypes: {
    value: { control: 'text' },
    checked: { control: 'boolean' },
    innerHTML: { control: 'text' },
  },
};
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCheckbox(args);
};
export const Standard = Template.bind({});
Standard.args = {};
