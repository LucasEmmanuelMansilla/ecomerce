import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../../ui/screens/login/Login';

const Stack = createStackNavigator();

export default function LoginAndRegisterStackNavigator(): JSX.Element {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Landing"
        component={Login}
      />
    </Stack.Navigator>
  );
}
