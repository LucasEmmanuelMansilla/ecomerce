import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {LandingStackScreen} from '../types/types';
import Landing from '../ui/screens/landing/Landing';
import {View} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';
import AllProducts from '../ui/screens/allProducts/AllProducts';

import {NavigationContext} from '../utils/context';

const Stack = createStackNavigator<LandingStackScreen>();

export default function LandingStackNavigator(props: any): JSX.Element {
  return (
    <NavigationContext.Provider value={props.navigation}>
      <View style={GlobalStyles.container}>
        <Stack.Navigator>
          <Stack.Screen
            options={{headerShown: false}}
            name="Landing"
            component={Landing}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Product"
            component={AllProducts}
          />
        </Stack.Navigator>
      </View>
    </NavigationContext.Provider>
  );
}
