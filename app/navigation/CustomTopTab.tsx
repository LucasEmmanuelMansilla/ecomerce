import React from 'react';
import {Animated, View, TouchableOpacity} from 'react-native';
import {manageScreensIcon} from '../utils/manageIcon';
import {CustomTopTabProps, Route} from '../types/types';

const CustomTopTab = ({state, navigation, position}: CustomTopTabProps) => {
  const handleTabPress = (route: any) => {
    if (!isRouteFocused(route)) {
      navigation.navigate(route.name, route.params);
    }
  };

  const isRouteFocused = (route: any) =>
    state.index === state.routes.indexOf(route);

  const renderTab = (route: Route, index: number) => {
    const isFocused = isRouteFocused(route);

    const inputRange = state.routes.map((_, i) => i);
    const opacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 1 : 0.3)),
    });

    return (
      <TouchableOpacity
        key={String(index)}
        accessibilityRole="button"
        accessibilityState={{selected: isFocused}}
        onPress={() => handleTabPress(route)}
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: 'white',
          paddingVertical: '3%',
        }}>
        <Animated.View
          style={{
            opacity,
            alignItems: 'center',
          }}>
          {manageScreensIcon(route.name)}
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flexDirection: 'row'}}>{state.routes.map(renderTab)}</View>
  );
};

export default CustomTopTab;
