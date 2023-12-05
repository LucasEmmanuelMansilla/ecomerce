import {View} from 'react-native';
import React from 'react';
import CardFeaturedProductsContainer from '../../components/CardFeaturedProductsContainer';
import {GlobalStyles} from '../../../styles/globalStyles';

export default function AllProductsUI() {
  return (
    <View
      style={[GlobalStyles.pagesContainer, GlobalStyles.allProductsContainer]}>
      <CardFeaturedProductsContainer data={[]} />
    </View>
  );
}
