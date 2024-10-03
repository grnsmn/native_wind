import { styled } from 'nativewind';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from '../Icon/Icon'; // Assicurati di avere @expo/vector-icons installato
import { CheckboxProps, CheckboxStyle } from './index.model';

const StyledTouchableOpacity = styled(TouchableOpacity);

const Checkbox = ({ label, value, defaultValue, onCheck, isError, isDisabled }: CheckboxProps) => {
    const {container, checkbox, icon, text } = CheckboxStyle({value, isError, isDisabled});

    const toggleCheckbox = () => {
        onCheck(!value);
    };

    return (
        <StyledTouchableOpacity onPress={toggleCheckbox} disabled={isDisabled} className={container()}>
            <View className={checkbox()}>
                {defaultValue || value && <Icon name="confirm" size={20} style={icon()} />}
            </View>
            <Text className={text()}>{label}</Text>
        </StyledTouchableOpacity>
    );
};

export default Checkbox;