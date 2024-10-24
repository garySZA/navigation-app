import React from 'react';
import { View } from 'react-native';

import { type NavigationProp, useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../theme';
import { PrimaryButton } from '../../components/share';
import { type RootStackParams } from '../../routes';

export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    return (
        <View style={ globalStyles.container }>
            <PrimaryButton
                label="Products"
                onPress={ () => navigation.navigate('Products') }
            />

            <PrimaryButton
                label="Settings"
                onPress={ () => navigation.navigate('Settings') }
            />
        </View>
    );
};
