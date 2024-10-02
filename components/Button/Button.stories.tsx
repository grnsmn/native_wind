// stories/MyButton.stories.tsx
import type {Meta, StoryObj} from '@storybook/react';
import fontelloConfig from '../configIconPack.json';

import {MyButton} from './Button';
const iconsNames = fontelloConfig.glyphs.map(item => item.css);

const meta = {
  title: 'components/MyButton',
  component: MyButton,
  argTypes: {
    variant: {
      options: ['default','outline', 'ghost'],
      control: {type: 'radio'},
    },
    iconName: {
			control: 'select',
			options: [null, ...iconsNames],
		},
  }
} satisfies Meta<typeof MyButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    text: 'Hello World',
    variant: 'outline',
    disabled: false,
    iconName: 'home',
    isLarge: false,
    onPress: () => {
      console.log('🚀 ~ testing');
    },
    isLoading: false,
  },
};
