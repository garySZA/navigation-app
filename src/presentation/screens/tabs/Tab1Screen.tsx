import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HamburgerMenu } from '../../components/share';

export const Tab1Screen = () => {

    return (
        <View style={ styles.container }>
            <HamburgerMenu />
            <Text> Tab1Screen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
});
