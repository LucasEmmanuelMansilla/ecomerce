import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CartStackScren} from '../types/types';
import Cart from '../ui/screens/cart/Cart';
import {View} from 'react-native';
import {GlobalStyles} from '../styles/globalStyles';

const Stack = createStackNavigator<CartStackScren>();

export default function CartStackNavigator(): JSX.Element {
  return (
    <View style={GlobalStyles.container}>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="Cart"
          component={Cart}
        />
      </Stack.Navigator>
    </View>
  );
}
