import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { LoginContextProvider } from '../contexts/LoginContext';
import { StackNavigator } from './StackNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const Routes = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <LoginContextProvider>
          <StackNavigator />
        </LoginContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}