import React, { useEffect } from 'react';
import { Pressable, Text, View } from 'react-native';

import { DrawerActions, type NavigationProp, useNavigation } from '@react-navigation/native';

import { globalStyles } from '../../theme';
import { PrimaryButton } from '../../components/share';
import { type RootStackParams } from '../../routes';

export const HomeScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParams>>();

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <Pressable onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer )}>
                    <Text>Menu</Text>
                </Pressable>
            ),
        });
    }, [navigation]);


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
