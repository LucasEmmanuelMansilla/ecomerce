import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../ui/screens/login/Login';
import type {LoginAndRegisterStackScreen} from '../../types/types';

const Stack = createStackNavigator<LoginAndRegisterStackScreen>();

export default function LoginAndRegisterStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
}
