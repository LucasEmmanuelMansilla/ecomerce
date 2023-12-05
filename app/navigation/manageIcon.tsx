import {House, Profile, ShoppingCart} from '../assets';

/**
 * Returns the corresponding icon component based on the given screen name.
 * @param screen - The name of the screen for which the icon component is needed.
 * @returns The icon component.
 */
export const manageIcon = (screen: string): JSX.Element => {
  switch (screen) {
    case 'LandingStackNavigator':
      return <House />;
    case 'CartStackNavigator':
      return <ShoppingCart />;
    case 'UserProfileStackNavigator':
      return <Profile />;
    default:
      throw new Error(`Invalid screen name: ${screen}`);
  }
};
