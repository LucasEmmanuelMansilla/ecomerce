import React from 'react';
import {Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LandingStackNavigator from './LandingStackNavigator';
import {TopTabNavigator} from '../types/types';
import {House, Profile, ShoppingCart} from '../assets';
import CartStackNavigator from './CartStackNavigator';
import UserProfileStackNavigator from './UserProfileStackNavigator';
import CustomTopTab from './CustomTopTab';

const Tab = createMaterialTopTabNavigator<TopTabNavigator>();

/**
 * Renders a top tab navigation bar using the createMaterialTopTabNavigator component.
 * The navigation bar consists of three tabs: LandingStackNavigator, CartStackNavigator, and UserProfileStackNavigator.
 * Each tab is associated with a specific component and displays an icon.
 * The CustomTopTab component is used to customize the appearance of the navigation bar.
 * @returns JSX.Element representing the top tab navigation bar.
 */
export default function TopTabNavigatorScreen(): JSX.Element {
  return (
    <Tab.Navigator
      tabBar={({state, descriptors, navigation, position}: any) => (
        <CustomTopTab
          state={state}
          descriptors={descriptors}
          navigation={navigation}
          position={position}
        />
      )}
      initialRouteName="LandingStackNavigator"
      keyboardDismissMode="on-drag"
      initialLayout={{width: Dimensions.get('window').width}}
      screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen
        name="LandingStackNavigator"
        component={LandingStackNavigator}
        options={{
          tabBarIcon: () => <House />,
        }}
      />
      <Tab.Screen
        name="CartStackNavigator"
        component={CartStackNavigator}
        options={{
          tabBarIcon: () => <ShoppingCart />,
        }}
      />
      <Tab.Screen
        name="UserProfileStackNavigator"
        component={UserProfileStackNavigator}
        options={{
          tabBarIcon: () => <Profile />,
        }}
      />
    </Tab.Navigator>
  );
}
