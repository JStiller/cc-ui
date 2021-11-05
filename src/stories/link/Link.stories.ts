import { Story, Meta } from '@storybook/html';
import { createLink } from './Link';

export default {
  title: 'Link',
  argTypes: {
    href: { control: 'text' },
    external: { control: 'boolean' },
    innerHTML: { control: 'text' },
  },
} as Meta;

const Template: Story<HTMLCcLinkElement> = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createLink(args);
};

export const Link = Template.bind({}) as Story<HTMLCcLinkElement>;
Link.args = {};

export const ExternalLink = Template.bind({}) as Story<HTMLCcLinkElement>;
ExternalLink.args = {
  external: true
};
