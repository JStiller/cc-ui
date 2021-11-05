import { Story, Meta } from '@storybook/html';
import { createHeadline } from './Headline';

export default {
  title: 'Headline',
  argTypes: {
    rank: { control: 'number' },
    innerHTML: { control: 'text' },
  },
} as Meta;

const Template: Story<HTMLCcHeadlineElement> = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createHeadline(args);
};

export const H1 = Template.bind({}) as Story<HTMLCcHeadlineElement>;
H1.args = {
  rank: 1,
};

export const H2 = Template.bind({}) as Story<HTMLCcHeadlineElement>;
H2.args = {
  rank: 2,
};

export const H3 = Template.bind({}) as Story<HTMLCcHeadlineElement>;
H3.args = {
  rank: 3,
};

export const H4 = Template.bind({}) as Story<HTMLCcHeadlineElement>;
H4.args = {
  rank: 4,
};

export const H5 = Template.bind({}) as Story<HTMLCcHeadlineElement>;
H5.args = {
  rank: 5,
};

export const H6 = Template.bind({}) as Story<HTMLCcHeadlineElement>;
H6.args = {
  rank: 6,
};
