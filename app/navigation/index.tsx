import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingStackNavigator from './LandingStackNavigator';
import {RootStackNavigator} from '../types/types';
import Header from '../ui/components/Header';
import CartStackNavigator from './CartStackNavigator';
import {NavigationContext} from '../utils/context';
import Filter from '../ui/components/Filter';
import {View} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';

const Stack = createStackNavigator<RootStackNavigator>();

export default function RootNavigator(): JSX.Element {
  const Provider = (props: any) => (
    <View style={GlobalStyles.container}>
      <Filter />
      <NavigationContext.Provider value={props.navigation}>
        <Stack.Navigator
          screenOptions={{
            header: () => <Header />,
          }}>
          <Stack.Screen
            name="LandingStackNavigator"
            component={LandingStackNavigator}
          />
        </Stack.Navigator>
      </NavigationContext.Provider>
    </View>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="ContextStackNavigator"
          children={(props: any) => <Provider {...props} />}
        />
        <Stack.Screen
          name="CartStackNavigator"
          component={CartStackNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
