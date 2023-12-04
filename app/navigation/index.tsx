import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {RootStackNavigator} from '../types/types';
import {NavigationContext} from '../utils/context';
import {View} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';
import TopTabNavigatorScreen from './TopTabNavigator';

const Stack = createStackNavigator<RootStackNavigator>();

export default function RootNavigator(): JSX.Element {
  const Provider = (props: any) => (
    <View style={GlobalStyles.container}>
      <NavigationContext.Provider value={props.navigation}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="TopNavigator"
            component={TopTabNavigatorScreen}
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
          headerTitle: '',
        }}>
        <Stack.Screen
          name="ContextStackNavigator"
          children={(props: any) => <Provider {...props} />}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
