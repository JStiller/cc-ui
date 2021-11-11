import { createIcon } from './Icon';
export default {
  title: 'Tokens/Icon',
  argTypes: {
    icon: {
      name: 'Icon name',
      control: 'select',
      options: ['Arrow Right', 'Share External'],
      mapping: {
        'Arrow Right': 'arrow-right',
        'Share External': 'share-external'
      },
      defaultValue: 'Arrow Right'
    },
  },
};
const Template = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createIcon(args);
};
export const Icon = Template.bind({});
Icon.args = {
  icon: 'arrow-right',
};
