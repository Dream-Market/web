/* eslint-disable */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { SignupForm } from './SignupForm';

export default {
  title: 'forms/SignupForm',
  component: SignupForm,
} as ComponentMeta<typeof SignupForm>;

const Template: ComponentStory<typeof SignupForm> = (args) => (
  <SignupForm {...args} />
);

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  children: 'Text',
};
Default.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Text',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
