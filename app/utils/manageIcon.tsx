import {House, Profile, ShoppingCart} from '../assets';

export const manageScreensIcon = (screen: string): JSX.Element => {
  switch (screen) {
    case 'LandingStackNavigator':
      return <House />;
    case 'CartStackNavigator':
      return <ShoppingCart />;
    case 'UserProfileStackNavigator':
      return <Profile />;
    default:
      return <House />;
  }
};
