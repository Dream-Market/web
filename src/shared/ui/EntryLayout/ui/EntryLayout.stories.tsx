/* eslint-disable */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { EntryLayout } from './EntryLayout';

export default {
  title: 'layouts/EntryLayout',
  component: EntryLayout,
} as ComponentMeta<typeof EntryLayout>;

const Template: ComponentStory<typeof EntryLayout> = (args) => (
  <EntryLayout {...args} />
);

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Lorem ipsum',
};
Default.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Lorem ipsum',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
