import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { type RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { type RootStackParams } from '../../routes';
import { globalStyles } from '../../theme';

export const ProductScreen = () => {
    const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            title: params.name,
        });
    }, [navigation, params.name]);


    return (
        <View style={ globalStyles.container }>
            <Text> ProductScreen </Text>
            <Text style={ styles.text }>
                { params.id } - { params.name }
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},

    text: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
});
