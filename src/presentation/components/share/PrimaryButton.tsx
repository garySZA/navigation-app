import React from 'react';
import { Pressable, Text } from 'react-native';
import { globalStyles } from '../../theme';

interface Props {
    label: string,
    onPress: () => void;
}

export const PrimaryButton = ({ label, onPress }: Props) => {
    return (
        <Pressable
            onPress={ () => onPress() }
            style={ globalStyles.primaryButton }
        >
            <Text style={ globalStyles.buttonText } > { label } </Text>
        </Pressable>
    );
};
