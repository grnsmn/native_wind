import { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import Input from './Input';
import { View } from 'react-native';

const meta = {
  title: 'components/Input',
  component: Input,
  args: {
    label: 'Input',
    placeholder: 'Placeholder',
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
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args: {
        label: 'Hello World',
    },
};