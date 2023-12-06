import {Animated} from 'react-native';

export interface Data {
  createdAt: string;
  product: string;
  price: number;
  image: string;
  is_redemption: boolean;
  _id: string;
}

export type LandingStackScreen = {
  Landing: undefined;
  Product: undefined;
  Cart: undefined;
};

export type CartStackScren = {
  Cart: undefined;
};

export type RootStackNavigator = {
  TopNavigator: undefined;
  ContextStackNavigator: undefined;
};

export type TopTabNavigator = {
  LandingStackNavigator: undefined;
  CartStackNavigator: undefined;
  UserProfileStackNavigator: undefined;
  Search: undefined;
};

export type UserProfileStackScreen = {
  User: undefined;
  EditProfile: undefined;
  EditPassword: undefined;
};

export type LoginAndRegisterStackScreen = {
  Login: undefined;
  Register: undefined;
};

export type Route = {
  key: string | number;
  name: string;
  params: {} | undefined;
};

export type CustomTopTabProps = {
  state: {
    routes: Array<Route>;
    index: number;
  };
  navigation: {
    emit: (event: any) => void;
    navigate: (routeName: string | null, params?: {}) => void;
  };
  position: Animated.Value;
};
