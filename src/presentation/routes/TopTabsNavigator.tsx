import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ProfileScreen } from '../screens/profile';
import { AboutScreen } from '../screens/about';

const Tab = createMaterialTopTabNavigator();

export const TopTabsNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Perfil" component={ProfileScreen} />
            <Tab.Screen name="About" component={AboutScreen} />
        </Tab.Navigator>
    );
};
