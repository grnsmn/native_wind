
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import fontelloConfig from '../configIconPack.json';

const iconsNames = fontelloConfig.glyphs.map(item => item.css);

import Icon from './Icon';

const meta = {
  title: 'components/Icon',
  component: Icon,
  args: {
    size: 24,
  },
  argTypes: {
    name: {
      control: 'select',
      options: iconsNames,
    },
    size: {
      control: 'select',
      options: [16, 24, 32, 48, 64],
      
    },

  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    name: 'vidoser',
  },
}
