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
  ContextStackNavigator: undefined;
  CartStackNavigator: undefined;
  LandingStackNavigator: undefined;
};
