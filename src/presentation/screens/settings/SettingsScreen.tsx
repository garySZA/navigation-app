import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { globalStyles } from '../../theme';
import { PrimaryButton } from '../../components/share';
import { StackActions, useNavigation } from '@react-navigation/native';

export const SettingsScreen = () => {
    const navigator = useNavigation();

    return (
        <View style={ globalStyles.container }>
            <Text style={ styles.screenTitle }> SettingsScreen </Text>

            <PrimaryButton
                label="Regresar"
                onPress={ () => navigator.goBack() }
            />

            <PrimaryButton
                label="Regresar a Home"
                onPress={ () => navigator.dispatch( StackActions.popToTop() ) }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},

    screenTitle: {
        marginBottom: 10,
    },
});
