import React from 'react';
import { ComponentMeta } from '@storybook/react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<any>;

const Template: any = (args: any) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
