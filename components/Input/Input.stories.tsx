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
        return (
            <View style={{ padding: 20 }}>
                <Story args={{
                    defaultValue: false,
                    ...context.args,
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
        onChange: (val: string) => {console.log('🚀 ~ testing', val)},
        variant: 'filled',
    },
};