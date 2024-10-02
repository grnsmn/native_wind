import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';

import Card from './Card';

export default {
  title: 'components/Card',
  component: Card,
  args: {

  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const Story = Template.bind({});
Story.args = {};
