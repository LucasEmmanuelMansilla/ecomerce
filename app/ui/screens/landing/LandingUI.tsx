import React from 'react';
import {View, ScrollView} from 'react-native';
import {Data} from '../../../types/types';
import CardCategoriesContainer from '../../components/CardCategoriesContainer';
import CardFeaturedProductsContainer from '../../components/CardFeaturedProductsContainer';
import LandingBannerContainer from '../../components/LandingBannerContainer';
import {GlobalStyles} from '../../../styles/globalStyles';

type Props = {
  data: Data[];
};

export default function LandingUI({data}: Props) {
  return (
    <View style={GlobalStyles.pagesContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 60}}>
        <LandingBannerContainer />
        <CardCategoriesContainer />
        <CardFeaturedProductsContainer landing data={data.slice(0, 2)} />
      </ScrollView>
    </View>
  );
}
