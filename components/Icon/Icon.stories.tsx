import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Icon from './Icon';

export default {
  title: 'components/Icon',
  component: Icon,
  args: {
    name: 'spinner',
    size: 20,

  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);

export const Story = Template.bind({});
Story.args = {};
