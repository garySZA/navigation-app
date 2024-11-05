import React from 'react';
import { StyleSheet } from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Tab1Screen } from '../screens/tabs';
import { globalColors } from '../theme';
import { TopTabsNavigator } from './TopTabsNavigator';
import { StackNavigator } from './StackNavigator';
import { IonIcon } from '../components/share/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => {
    return (
        <Tab.Navigator
            sceneContainerStyle={ styles.sceneContainer }
            screenOptions={{
                tabBarActiveTintColor: globalColors.primary,
                tabBarLabelStyle: styles.tabBarLabel,
                headerStyle: styles.headerStyle,
                tabBarStyle: styles.tabBar,
            }}
        >
            <Tab.Screen
                name="Tab1"
                options={{ title: 'Tab1', tabBarIcon: ({ color }) => (<IonIcon name="accessibility-outline" color={ color }/>) }}
                component={ Tab1Screen }
            />
            <Tab.Screen
                name="Tab2"
                options={{ title: 'Tab2', tabBarIcon: ({ color }) => (<IonIcon name="hammer-outline" color={ color }/>) }}
                component={ TopTabsNavigator }
            />
            <Tab.Screen
                name="Tab3"
                options={{ title: 'Tab3', tabBarIcon: ({ color }) => (<IonIcon name="home-outline" color={ color }/>) }}
                component={ StackNavigator }
            />
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    sceneContainer: {
        backgroundColor: globalColors.background,
    },

    tabBarLabel: {
        marginBottom: 5,
    },

    headerStyle: {
        elevation: 0,
    },

    tabBar: {
        borderTopWidth: 0,
        elevation: 0,
    },
});
