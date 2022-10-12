/* eslint-disable */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Header } from './Header';

export default {
  title: 'shared/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  childrenLeft: 'Lorem ipsum',
  childrenRight: 'Dolor sit amet',
};
Default.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  childrenLeft: 'Lorem ipsum',
  childrenRight: 'Dolor sit amet',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
