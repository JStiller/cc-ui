import { createTag } from './Tag';
export default {
  title: 'Structure/Tag',
  argTypes: {
    innerHTML: { control: 'text' },
  },
};
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createTag(args);
};
export const Standard = Template.bind({});
Standard.args = {};
