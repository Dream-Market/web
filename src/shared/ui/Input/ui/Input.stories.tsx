/* eslint-disable */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

Template.story = {
  name: 'default',
};

export const Default = Template.bind({});
Default.args = {
  label: 'Label',
};
Default.decorators = [ThemeDecorator(Theme.LIGHT)];

export const DefaultDark = Template.bind({});
DefaultDark.args = {
  label: 'Label',
};
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)];
