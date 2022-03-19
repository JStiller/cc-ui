import { Story, Meta } from '@storybook/html';
import { createTag } from './Tag';

export default {
  title: 'Structure/Tag',
  argTypes: {
    innerHTML: {
      name: 'Content',
      control: 'text',
      defaultValue: 'Tag'
    },
  },
} as Meta;

const Template: Story<HTMLCcTagElement> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createTag(args);
};

export const Tag = Template.bind({}) as Story<HTMLCcTagElement>;
Tag.args = {};
