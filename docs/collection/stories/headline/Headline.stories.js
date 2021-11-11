import { createHeadline } from './Headline';
export default {
  title: 'Structure/Headline',
  argTypes: {
    rank: {
      name: 'Rank',
      control: 'inline-radio',
      options: [1, 2, 3, 4, 5, 6],
      defaultValue: 1
    },
    innerHTML: {
      name: 'Headline',
      control: 'text',
      defaultValue: 'Headline'
    },
  },
};
const Template = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHeadline(args);
};
export const Headline = Template.bind({});
Headline.args = {
  rank: 1,
};
