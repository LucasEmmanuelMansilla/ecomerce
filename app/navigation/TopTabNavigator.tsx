import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LandingStackNavigator from './LandingStackNavigator';
import {TopTabNavigator} from '../types/types';
import {House, Profile, ShoppingCart} from '../assets';
import CartStackNavigator from './CartStackNavigator';
import UserProfileStackNavigator from './UserProfileStackNavigator';

const Tab = createMaterialTopTabNavigator<TopTabNavigator>();

export default function TopTabNavigatorScreen(): JSX.Element {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <House />;
          },
        }}
        name="LandingStackNavigator"
        component={LandingStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <ShoppingCart />;
          },
        }}
        name="CartStackNavigator"
        component={CartStackNavigator}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => {
            return <Profile />;
          },
        }}
        name="UserProfileStackNavigator"
        component={UserProfileStackNavigator}
      />
    </Tab.Navigator>
  );
}
