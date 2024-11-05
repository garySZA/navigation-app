import React from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { ProfileScreen } from '../screens/profile';
import { globalColors } from '../theme';
import { BottomTabsNavigator } from './BottomTabsNavigator';
import { IonIcon } from '../components/share/IonIcon';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={ (props) => <CustomDrawerContent { ...props } /> }
            screenOptions={{
                drawerType: ( dimensions.width >= 758 ) ? 'permanent' : 'slide',
                headerShown: false,

                drawerActiveBackgroundColor: globalColors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: globalColors.primary,
                drawerItemStyle: styles.drawerItem,
            }}
        >
            <Drawer.Screen
                options={{ drawerIcon: ({ color }) => (<IonIcon name="bonfire-outline" color={ color }/>) }}
                name="Tabs"
                component={ BottomTabsNavigator }
            />
            <Drawer.Screen
                options={{ drawerIcon: ({ color }) => (<IonIcon name="person-circle-outline" color={ color }/>) }}
                name="Profile"
                component={ProfileScreen}
            />
        </Drawer.Navigator>
    );
};


const CustomDrawerContent = ( props: DrawerContentComponentProps ) => {
    return (
        <DrawerContentScrollView>
            <View
                style={ styles.drawerContent }
            />

            <DrawerItemList { ...props } />

        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerItem: {
        borderRadius: 100,
        paddingHorizontal: 20,
    },

    drawerContent: {
        height: 200,
        backgroundColor: globalColors.primary,
        margin: 30,
        borderRadius: 50,
    },
});
