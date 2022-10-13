/* eslint-disable */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { MainLayout } from './MainLayout';

export default {
  title: 'layouts/MainLayout',
  component: MainLayout,
} as ComponentMeta<typeof MainLayout>;

const Template: ComponentStory<typeof MainLayout> = (args) => (
  <MainLayout {...args} />
);

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DefaultDark = Template.bind({});
DefaultDark.args = {};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
