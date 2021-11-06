import { createIcon } from './Icon';
export default {
  title: 'Icon',
  argTypes: {
    icon: { control: 'text' },
  },
};
const Template = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createIcon(args);
};
export const ArrowRight = Template.bind({});
ArrowRight.args = {
  icon: 'arrow-right',
};
export const ShareExternal = Template.bind({});
ShareExternal.args = {
  icon: 'share-external',
};
