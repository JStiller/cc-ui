import { createHeadline } from './Headline';
export default {
  title: 'Structure/Headline',
  argTypes: {
    rank: { control: 'number' },
    innerHTML: { control: 'text' },
  },
};
const Template = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHeadline(args);
};
export const H1 = Template.bind({});
H1.args = {
  rank: 1,
};
export const H2 = Template.bind({});
H2.args = {
  rank: 2,
};
export const H3 = Template.bind({});
H3.args = {
  rank: 3,
};
export const H4 = Template.bind({});
H4.args = {
  rank: 4,
};
export const H5 = Template.bind({});
H5.args = {
  rank: 5,
};
export const H6 = Template.bind({});
H6.args = {
  rank: 6,
};
