import { Story, Meta } from '@storybook/html';
import { createPage } from './Page';
import * as HeaderStories from '../header/Header.stories';
import { HeaderProps } from '../header/Header';

export default {
  title: 'Example/Page',
  argTypes: {
    onLogin: { action: 'onLogin' },
    onLogout: { action: 'onLogout' },
    onCreateAccount: { action: 'onCreateAccount' },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => createPage(args);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
