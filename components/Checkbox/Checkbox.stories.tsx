import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Checkbox from './Checkbox';
import { View } from 'react-native';

const meta = {
  title: 'components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    isError: false,
    isDisabled: false,
  },
  decorators: [
    (Story, context) => {
        const [checked, setChecked] = useState(false)

        return (
            <View style={{ padding: 20 }}>
                <Story args={{
                    defaultValue: false,
                    value: checked,
                    ...context.args,
                    onCheck: (value)=>setChecked(value),
                }}/>
            </View>
        );
    },
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Hello World',
    },
};