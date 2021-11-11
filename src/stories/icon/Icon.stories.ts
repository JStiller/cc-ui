import { Story, Meta } from '@storybook/html';
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
} as Meta;

const Template: Story<HTMLCcIconElement> = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createIcon(args);
};

export const Icon = Template.bind({}) as Story<HTMLCcIconElement>;
Icon.args = {
  icon: 'arrow-right',
};
