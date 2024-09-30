import clsx from 'clsx';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export type ButtonProps = {
  onPress: () => void;
  text: string;
  color?: string;
  textColor?: string;
  rounded?: string;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
};

export const MyButton = ({text, rounded, variant, disabled}: ButtonProps) => {
  const textStyle = clsx(
    'font-sans',
    'font-bold',
    variant === 'primary' && 'text-blue',
    variant === 'secondary' && 'text-blue',
  );

  const touchableStyle = clsx(
    rounded,
    'p-4',
    'flex-grow-0',
    variant === 'primary' && 'bg-blue',
    variant === 'secondary' && 'bg-tahiti-300',
  );

  const containerStyle = clsx(
    'flex-1 items-center justify-center',
    disabled && 'opacity-50',
  );

  return (
    <View className={containerStyle}>
      <TouchableOpacity disabled={disabled} className={touchableStyle}>
        <Text className={textStyle}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};
