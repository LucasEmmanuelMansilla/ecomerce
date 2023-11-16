import {View, Text} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../styles/globalStyles';

type Props = {
  id: number;
};

export default function LandingBanner({id}: Props) {
  return (
    <View style={GlobalStyles.landingBannerContainer}>
      <View style={GlobalStyles.bannerContainer}>
        <View style={GlobalStyles.bannerBlue}>
          <Text style={GlobalStyles.textBanner}>{id.toString()}</Text>
        </View>
        <View style={GlobalStyles.bannerRed} />
      </View>
    </View>
  );
}
