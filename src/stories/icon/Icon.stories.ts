import { Story, Meta } from '@storybook/html';
import { createIcon } from './Icon';

export default {
  title: 'Icon',
  argTypes: {
    icon: { control: 'text' },
  },
} as Meta;

const Template: Story<HTMLCcIconElement> = args => {
  // You can either use a function to create DOM elements or use a plain html string!
  // return `<div>${label}</div>`;
  return createIcon(args);
};

export const ArrowRight = Template.bind({}) as Story<HTMLCcIconElement>;
ArrowRight.args = {
  icon: 'arrow-right',
};

export const ShareExternal = Template.bind({}) as Story<HTMLCcIconElement>;
ShareExternal.args = {
  icon: 'share-external',
};
