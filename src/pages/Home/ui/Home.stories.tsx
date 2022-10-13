/* eslint-disable */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import Home from './Home';

export default {
  title: 'pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
