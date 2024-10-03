import { styled } from 'nativewind';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Icon from '../Icon/Icon'; // Assicurati di avere @expo/vector-icons installato
import { InputProps, InputStyle } from './index.model';
const StyledTextInput = styled(TextInput);

const Input = ({ label, placeholder, value, onCheck, isError, isDisabled }: InputProps) => {
    const {container, header, label: labelStyle, footer, input, input_box } = InputStyle();

    const toggleInput = () => {
        onCheck(!value);
    };

    return (
        <View className={container()}>
            <View className={header()}>
                <Icon name={'help'} size={16} />
                <Text className={labelStyle()}>{label}</Text>
            </View>
            <View className={input_box()}>
                <StyledTextInput className={input()} placeholder={placeholder}/>
                <Icon name={'calendar'} size={24} />
            </View>
            <Text className={footer()}>{label}</Text>
        </View>
    );
};

export default Input;