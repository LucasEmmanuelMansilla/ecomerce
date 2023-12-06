import {Animated} from 'react-native';
import {jest} from '@jest/globals';
import {it, expect, describe} from '@jest/globals';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import CustomTopTab from '../app/navigation/CustomTopTab';
import {render, shallow, configure} from 'enzyme';
configure({adapter: new Adapter()});

describe('code snippet', () => {
  // Renders a row of tabs based on the provided state and descriptors
  it('should render a row of tabs', () => {
    const state = {
      routes: [
        {
          key: 'LandingStackNavigator-HbJOC2hhT1WvuSvHVa--6',
          name: 'LandingStackNavigator',
          params: undefined,
        },
        {
          key: 'CartStackNavigator-ULPNFitmQbc3ZXlT4YTsq',
          name: 'CartStackNavigator',
          params: undefined,
        },
        {
          key: 'UserProfileStackNavigator-i9i5tpW1LtHyavQoOBLRu',
          name: 'UserProfileStackNavigator',
          params: undefined,
        },
      ],
      index: 0,
    };

    const navigation = {
      emit: jest.fn(),
      navigate: jest.fn(),
    };

    const position = new Animated.Value(0);

    const wrapper = shallow(
      <CustomTopTab
        key={1}
        state={state}
        navigation={navigation}
        position={position}
      />,
    );

    expect(wrapper.find('TouchableOpacity')).toHaveLength(3);
  });

  // // Renders each tab with the correct icon based on the route name
  // it('should render each tab with the correct icon', () => {
  //   const state = {
  //     routes: [
  //       {key: '1', name: 'LandingStackNavigator', params: {}},
  //       {key: '2', name: 'CartStackNavigator', params: {}},
  //       {key: '3', name: 'UserProfileStackNavigator', params: {}},
  //     ],
  //     index: 0,
  //   };

  //   const descriptors = {
  //     '1': {
  //       options: {
  //         tabBarAccessibilityLabel: 'Landing Tab',
  //         tabBarTestID: 'landing-tab',
  //       },
  //     },
  //     '2': {
  //       options: {
  //         tabBarAccessibilityLabel: 'Cart Tab',
  //         tabBarTestID: 'cart-tab',
  //       },
  //     },
  //     '3': {
  //       options: {
  //         tabBarAccessibilityLabel: 'User Profile Tab',
  //         tabBarTestID: 'user-profile-tab',
  //       },
  //     },
  //   };

  //   const navigation = {
  //     emit: jest.fn(),
  //     navigate: jest.fn(),
  //   };

  //   const position = new Animated.Value(0);

  //   const wrapper = shallow(
  //     <CustomTopTab
  //       state={state}
  //       descriptors={descriptors}
  //       navigation={navigation}
  //       position={position}
  //     />,
  //   );

  //   expect(wrapper.find('House')).toHaveLength(1);
  //   expect(wrapper.find('ShoppingCart')).toHaveLength(0);
  //   expect(wrapper.find('Profile')).toHaveLength(0);
  // });

  // // Changes the opacity of the selected tab to 1 and the others to 0.3
  // it('should change the opacity of the selected tab and others', () => {
  //   const state = {
  //     routes: [
  //       {key: '1', name: 'LandingStackNavigator', params: {}},
  //       {key: '2', name: 'CartStackNavigator', params: {}},
  //       {key: '3', name: 'UserProfileStackNavigator', params: {}},
  //     ],
  //     index: 0,
  //   };

  //   const descriptors = {
  //     '1': {
  //       options: {
  //         tabBarAccessibilityLabel: 'Landing Tab',
  //         tabBarTestID: 'landing-tab',
  //       },
  //     },
  //     '2': {
  //       options: {
  //         tabBarAccessibilityLabel: 'Cart Tab',
  //         tabBarTestID: 'cart-tab',
  //       },
  //     },
  //     '3': {
  //       options: {
  //         tabBarAccessibilityLabel: 'User Profile Tab',
  //         tabBarTestID: 'user-profile-tab',
  //       },
  //     },
  //   };

  //   const navigation = {
  //     emit: jest.fn(),
  //     navigate: jest.fn(),
  //   };

  //   const position = new Animated.Value(0);

  //   const wrapper = shallow(
  //     <CustomTopTab
  //       state={state}
  //       descriptors={descriptors}
  //       navigation={navigation}
  //       position={position}
  //     />,
  //   );

  //   expect(wrapper.find('Animated.View').at(0).props().style.opacity).toBe(1);
  //   expect(wrapper.find('Animated.View').at(1).props().style.opacity).toBe(0.3);
  //   expect(wrapper.find('Animated.View').at(2).props().style.opacity).toBe(0.3);
  // });

  // // Handles the case when the provided state has no routes
  // it('should handle the case when the state has no routes', () => {
  //   const state = {
  //     routes: [],
  //     index: 0,
  //   };

  //   const descriptors = {};

  //   const navigation = {
  //     emit: jest.fn(),
  //     navigate: jest.fn(),
  //   };

  //   const position = new Animated.Value(0);

  //   const wrapper = shallow(
  //     <CustomTopTab
  //       state={state}
  //       descriptors={descriptors}
  //       navigation={navigation}
  //       position={position}
  //     />,
  //   );

  //   expect(wrapper.find('TouchableOpacity')).toHaveLength(0);
  // });

  // // Handles the case when the provided descriptors have no options
  // it('should handle the case when the descriptors have no options', () => {
  //   const state = {
  //     routes: [
  //       {key: '1', name: 'LandingStackNavigator', params: {}},
  //       {key: '2', name: 'CartStackNavigator', params: {}},
  //       {key: '3', name: 'UserProfileStackNavigator', params: {}},
  //     ],
  //     index: 0,
  //   };

  //   const descriptors = {
  //     '1': {},
  //     '2': {},
  //     '3': {},
  //   };

  //   const navigation = {
  //     emit: jest.fn(),
  //     navigate: jest.fn(),
  //   };

  //   const position = new Animated.Value(0);

  //   const wrapper = shallow(
  //     <CustomTopTab
  //       state={state}
  //       descriptors={descriptors}
  //       navigation={navigation}
  //       position={position}
  //     />,
  //   );

  //   expect(wrapper.find('TouchableOpacity')).toHaveLength(3);
  // });

  // // Handles the case when the provided navigation object has no navigate function
  // it('should handle the case when the navigation object has no navigate function', () => {
  //   const state = {
  //     routes: [
  //       {key: '1', name: 'LandingStackNavigator', params: {}},
  //       {key: '2', name: 'CartStackNavigator', params: {}},
  //       {key: '3', name: 'UserProfileStackNavigator', params: {}},
  //     ],
  //     index: 0,
  //   };

  //   const descriptors = {
  //     '1': {
  //       options: {
  //         tabBarAccessibilityLabel: 'Landing Tab',
  //         tabBarTestID: 'landing-tab',
  //       },
  //     },
  //     '2': {
  //       options: {
  //         tabBarAccessibilityLabel: 'Cart Tab',
  //         tabBarTestID: 'cart-tab',
  //       },
  //     },
  //     '3': {
  //       options: {
  //         tabBarAccessibilityLabel: 'User Profile Tab',
  //         tabBarTestID: 'user-profile-tab',
  //       },
  //     },
  //   };

  //   const navigation = {
  //     emit: jest.fn(),
  //   };

  //   const position = new Animated.Value(0);

  //   const wrapper = shallow(
  //     <CustomTopTab
  //       state={state}
  //       descriptors={descriptors}
  //       navigation={navigation}
  //       position={position}
  //     />,
  //   );

  //   expect(wrapper.find('TouchableOpacity')).toHaveLength(3);
  // });
});
