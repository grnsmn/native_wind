
import type {Meta, StoryObj} from '@storybook/react';
import React from 'react';
import fontelloConfig from '../configIconPack.json';

const iconsNames = fontelloConfig.glyphs.map(item => item.css);

import Icon from './Icon';

const meta = {
  title: 'components/Icon',
  component: Icon,
  args: {
  },
  argTypes: {
    name: {
      control: 'select',
      options: iconsNames,
      defaultValue: 'vidoser',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {}
