/* eslint-disable */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { ButtonUnderlined } from './ButtonUnderlined';

export default {
  title: 'shared/ButtonUnderlined',
  component: ButtonUnderlined,
} as ComponentMeta<typeof ButtonUnderlined>;

const Template: ComponentStory<typeof ButtonUnderlined> = (args) => (
  <ButtonUnderlined {...args} />
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
