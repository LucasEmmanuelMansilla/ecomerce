import {View, Text} from 'react-native';
import React from 'react';
import {Data} from '../../../types/types';
import CardFeaturedProductsContainer from '../../components/CardFeaturedProductsContainer';
import {GlobalStyles} from '../../../styles/globalStyles';

type Props = {
  data: Array<Data>;
};

export default function AllProductsUI({data}: Props) {
  return (
    <View
      style={[GlobalStyles.pagesContainer, GlobalStyles.allProductsContainer]}>
      <CardFeaturedProductsContainer data={data} />
    </View>
  );
}
