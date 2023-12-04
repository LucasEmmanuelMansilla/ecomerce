import {View, Pressable} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../styles/globalStyles';
import {Bell, Profile, ShoppingCart} from '../../assets';
import {WELCOME_TITLE} from '../../constants';
import CustomText from './CustomText';
import {useNavigation} from '../../utils/useNavigationHook';
export default function Header() {
  const {handle} = useNavigation();

  return (
    <View style={GlobalStyles.headerContainer}>
      <Pressable onPress={() => handle('UserProfileStackNavigator')}>
        <Profile />
      </Pressable>
      <View style={{flex: 1, alignItems: 'center'}}>
        <CustomText styles={GlobalStyles.title} text={WELCOME_TITLE} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '18%',
          justifyContent: 'space-between',
        }}>
        <Pressable
          onPress={() => {
            handle('CartStackNavigator');
          }}>
          <ShoppingCart />
        </Pressable>
        <Pressable>
          <Bell />
        </Pressable>
      </View>
    </View>
  );
}
