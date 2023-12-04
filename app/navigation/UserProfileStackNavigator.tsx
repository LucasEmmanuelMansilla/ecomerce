import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {UserProfileStackScreen} from '../types/types';
import {View} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';
import {NavigationContext} from '../utils/context';
import User from '../ui/screens/user/User';

const Stack = createStackNavigator<UserProfileStackScreen>();

export default function UserProfileStackNavigator(props: any): JSX.Element {
  return (
    <NavigationContext.Provider value={props.navigation}>
      <View style={GlobalStyles.container}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="User"
            component={User}
          />
        </Stack.Navigator>
      </View>
    </NavigationContext.Provider>
  );
}
