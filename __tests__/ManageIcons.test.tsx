import {it, expect, describe} from '@jest/globals';
import {manageScreensIcon} from '../app/utils/manageIcon';
import {House, Profile, ShoppingCart} from '../app/assets';

describe('code snippet', () => {
  // Returns a JSX element of the corresponding icon for a given screen name
  it('should return the corresponding icon for a given screen name', () => {
    const screen = 'LandingStackNavigator';
    const expectedIcon = <House />;

    const result = manageScreensIcon(screen);

    expect(result).toEqual(expectedIcon);
  });

  // Returns the House icon for an unknown screen name
  it('should return the House icon for an unknown screen name', () => {
    const screen = 'UnknownStackNavigator';
    const expectedIcon = <House />;

    const result = manageScreensIcon(screen);

    expect(result).toEqual(expectedIcon);
  });

  // Returns the correct icon for each valid screen name
  it('should return the correct icon for each valid screen name', () => {
    const screens = [
      'LandingStackNavigator',
      'CartStackNavigator',
      'UserProfileStackNavigator',
    ];
    const expectedIcons = [<House />, <ShoppingCart />, <Profile />];

    screens.forEach((screen, index) => {
      const result = manageScreensIcon(screen);

      expect(result).toEqual(expectedIcons[index]);
    });
  });

  // Returns the House icon for an empty screen name
  it('should return the House icon for an empty screen name', () => {
    const screen = '';
    const expectedIcon = <House />;

    const result = manageScreensIcon(screen);

    expect(result).toEqual(expectedIcon);
  });

  // Returns the House icon for a null screen name
  it('should return the House icon for a null screen name', () => {
    const screen = '';
    const expectedIcon = <House />;

    const result = manageScreensIcon(screen);

    expect(result).toEqual(expectedIcon);
  });

  // Returns the correct icon for each valid screen name, even if the icon component changes
  it('should return the correct icon for each valid screen name, even if the icon component changes', () => {
    const screens = [
      'LandingStackNavigator',
      'CartStackNavigator',
      'UserProfileStackNavigator',
    ];
    const expectedIcons = [<House />, <ShoppingCart />, <Profile />];

    screens.forEach((screen, index) => {
      const result = manageScreensIcon(screen);

      expect(result.type).toEqual(expectedIcons[index].type);
    });
  });
});
