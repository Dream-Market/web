/* eslint-disable */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { SigninForm } from './SigninForm';

export default {
  title: 'forms/SigninForm',
  component: SigninForm,
} as ComponentMeta<typeof SigninForm>;

const Template: ComponentStory<typeof SigninForm> = (args) => (
  <SigninForm {...args} />
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
