import { createLink } from './Link';
export default {
  title: 'Interactions/Link',
  argTypes: {
    href: {
      name: 'URL',
      control: 'text',
      defaultValue: '#',
    },
    external: {
      name: 'External Link?',
      control: 'boolean',
      defaultValue: false,
    },
    innerHTML: {
      name: 'Label',
      control: 'text',
      defaultValue: 'Link',
    },
  },
};
const Template = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createLink(args);
};
export const Link = Template.bind({});
Link.args = {};
