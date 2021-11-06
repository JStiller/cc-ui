import { createLink } from './Link';
export default {
  title: 'Link',
  argTypes: {
    href: { control: 'text' },
    external: { control: 'boolean' },
    innerHTML: { control: 'text' },
  },
};
const Template = (args) => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createLink(args);
};
export const Link = Template.bind({});
Link.args = {};
export const ExternalLink = Template.bind({});
ExternalLink.args = {
  external: true
};
