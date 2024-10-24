import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/home';
import { ProductScreen, ProductsScreen } from '../screens/products';
import { SettingsScreen } from '../screens/settings';


export type RootStackParams = {
    Home: undefined,
    Products: undefined,
    Product: { id: number, name: string },
    Settings: undefined,
}

const Stack = createStackNavigator<RootStackParams>();

export const  StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: true,
            headerStyle: {
                elevation: 0,
                shadowColor: 'transparent',
            },
        }}>
            <Stack.Screen options={{}} name="Home" component={ HomeScreen } />
            <Stack.Screen options={{}} name="Products" component={ProductsScreen} />
            <Stack.Screen options={{}} name="Product" component={ProductScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
};
