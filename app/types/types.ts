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
};

export type UserProfileStackScreen = {
  User: undefined;
  EditProfile: undefined;
  EditPassword: undefined;
};
