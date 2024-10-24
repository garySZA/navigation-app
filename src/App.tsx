import './gesture-handler';

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import IonIcon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './presentation/routes';

const iconProvider = (props: React.ComponentProps<typeof IonIcon>) => <IonIcon { ...props }/>;

export const App = () => {
    return (
        <NavigationContainer>
          <PaperProvider
            settings={{
              icon: iconProvider,
            }}
          >
            <SafeAreaView style={ styles.container }>
              <StackNavigator />
            </SafeAreaView>
          </PaperProvider>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
