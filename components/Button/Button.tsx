import React from 'react';
import {Text, Pressable} from 'react-native';

import Icon from '../Icon/Icon';
import {ButtonProps, ButtonStyle} from './index.model';


export const MyButton = ({
  text,
  variant,
  disabled,
  iconName,
  isLarge,
  isLoading,
  ...props
}: ButtonProps) => {

  const {
    container,
    text: textStyle,
    icon: iconStyle,
  } = ButtonStyle({variant, disabled, isLarge, isLoading});

  const getIconName = (): string | undefined => isLoading ? 'spinner' : iconName;

  return (
    <Pressable
      className={container()}
      disabled={disabled}
      {...props}
    >
      {iconName && <Icon name={getIconName()} size={16} style={iconStyle()} />}
      {!isLoading &&<Text className={textStyle()}>{text}</Text>}
    </Pressable>
  );
};
