import { Story, Meta } from '@storybook/html';
import { createContent } from './Content';

export default {
  title: 'Structure/Content',
  argTypes: {
    portfolio: { control: 'text' },
    columns: { control: 'number' },
    innerHTML: { control: 'text' },
  },
} as Meta;

const Template: Story<HTMLCcContentElement> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createContent(args);
};

export const Standard = Template.bind({}) as Story<HTMLCcContentElement>;
Standard.args = {
  innerHTML: '<div>Text1</div>',
};

export const Empower = Template.bind({}) as Story<HTMLCcContentElement>;
Empower.args = {
  portfolio: 'empower',
  columns: 2,
  innerHTML: '<div>Text1</div><div>Text2</div>',
};

export const Technology = Template.bind({}) as Story<HTMLCcContentElement>;
Technology.args = {
  portfolio: 'technology',
  columns: 3,
  innerHTML: '<div>Text1</div><div>Text2</div><div>Text3</div>',
};

export const Create = Template.bind({}) as Story<HTMLCcContentElement>;
Create.args = {
  portfolio: 'create',
  columns: 4,
  innerHTML: '<div>Text1</div><div>Text2</div><div>Text3</div><div>Text4</div>',
};
