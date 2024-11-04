import React from 'react';

import { StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DrawerActions, useNavigation } from '@react-navigation/native';

import { PrimaryButton } from '../../components/share';

export const ProfileScreen = () => {
    const { top } = useSafeAreaInsets();
    const navigation = useNavigation();

    return (
        <View style={[ styles.container, { marginTop: top } ]}>
            <Text style={ styles.title }> ProfileScreen </Text>

            <PrimaryButton
                onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }
                label="Abrir menú"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },

    title: {
        marginBottom: 10,
    },
});
