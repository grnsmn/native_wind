import React from 'react'
import {createIconSetFromFontello} from 'react-native-vector-icons';

import fontelloConfig from '../configIconPack.json';
import { styled } from 'nativewind';
const CustomIcon = createIconSetFromFontello(fontelloConfig);
import { Animated, Easing } from 'react-native';
import { useEffect, useRef } from 'react';

type Props = {
    name: string | undefined;
    size?: number;
    color?: string;
    style?: string;
}

const StyledIcon = styled(CustomIcon);

const Icon = ({name, size, style}: Props) => {  


if (name === 'spinner') {
    const spinValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        const spinAnimation = Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        );
        spinAnimation.start();
        return () => spinAnimation.stop();
    }, [spinValue]);

    const spin = spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <Animated.View style={{ transform: [{ rotate: spin }] }}>
            <CustomIcon className={style} name={name} size={size} />
        </Animated.View>
    );
}
  return (
        <CustomIcon className={style} name={name} size={size} />
  )
}

export default Icon