import React from 'react';
import {Animated, View, TouchableOpacity} from 'react-native';
import {manageIcon} from './manageIcon';
import {CustomTopTabProps} from '../types/types';

const CustomTopTab: React.FC<CustomTopTabProps> = ({
  state,
  descriptors,
  navigation,
  position,
}) => {
  const handleTabPress = (route: any) => {
    if (!isRouteFocused(route)) {
      navigation.navigate(route.name, route.params);
    }
  };

  const handleTabLongPress = (route: any) => {
    navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const isRouteFocused = (route: any) =>
    state.index === state.routes.indexOf(route);

  const renderTab = (route: any, index: number) => {
    const {options} = descriptors[route.key];
    const isFocused = isRouteFocused(route);

    const inputRange = state.routes.map((_, i) => i);
    const opacity = position.interpolate({
      inputRange,
      outputRange: inputRange.map(i => (i === index ? 1 : 0.3)),
    });

    return (
      <TouchableOpacity
        key={index}
        accessibilityRole="button"
        accessibilityState={{selected: isFocused}}
        accessibilityLabel={options.tabBarAccessibilityLabel}
        testID={options.tabBarTestID}
        onPress={() => handleTabPress(route)}
        onLongPress={() => handleTabLongPress(route)}
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
          {manageIcon(route.name)}
        </Animated.View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{flexDirection: 'row'}}>{state.routes.map(renderTab)}</View>
  );
};

export default CustomTopTab;
