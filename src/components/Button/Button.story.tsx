import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me!',
  variant: 'primary',
  disabled: false,
};
