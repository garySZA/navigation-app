import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';


import { StackNavigator } from './StackNavigator';
import { ProfileScreen } from '../screens/profile';
import { globalColors } from '../theme';
import { StyleSheet, useWindowDimensions, View } from 'react-native';

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
            <Drawer.Screen name="StackNavigator" component={ StackNavigator } />
            <Drawer.Screen name="Profile" component={ProfileScreen} />
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
