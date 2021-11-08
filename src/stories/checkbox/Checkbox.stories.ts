import { Story, Meta } from '@storybook/html';
import { createCheckbox } from './Checkbox';

export default {
  title: 'Interactions/Checkbox',
  argTypes: {
    value: { control: 'text' },
    checked: { control: 'boolean' },
    innerHTML: { control: 'text' },
  },
} as Meta;

const Template: Story<HTMLCcCheckboxElement> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createCheckbox(args);
};

export const Standard = Template.bind({}) as Story<HTMLCcCheckboxElement>;
Standard.args = {};
