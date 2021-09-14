import { Story, Meta } from '@storybook/html';
import { createMyComponent, MyComponentProps } from './mycomponent';

export default {
  title: 'Example/Button',
  argTypes: {
    label: { control: 'text' },
    primary: { control: 'boolean' },
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select', options: ['small', 'medium', 'large'] },
    },
    onClick: { action: 'onClick' },
  },
} as Meta;

const Template: Story<MyComponentProps> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createMyComponent(args);
};

export const ExampleA = Template.bind({});
ExampleA.args = {
  first: 'Test!',
  middle: 'Button',
  last: ':P'
};

export const ExampleB = Template.bind({});
ExampleB.args = {};

