import React from 'react';
import {View} from 'react-native';
import type {Data} from '../../../types/types';
import CardCategoriesContainer from '../../components/CardCategoriesContainer';
import CardFeaturedProductsContainer from '../../components/CardFeaturedProductsContainer';
import LandingBannerContainer from '../../components/LandingBannerContainer';
import {GlobalStyles} from '../../../styles/globalStyles';

type Props = {
  data: Data[];
};

export default function LandingUI() {
  return (
    <View style={GlobalStyles.pagesContainer}>
      <View>
        <LandingBannerContainer />
        <CardCategoriesContainer />
        <CardFeaturedProductsContainer landing data={[]} />
      </View>
    </View>
  );
}
