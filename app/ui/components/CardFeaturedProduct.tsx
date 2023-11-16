import {View, Text, Image} from 'react-native';
import React from 'react';
import {Data} from '../../types/types';
import {GlobalStyles} from '../../styles/globalStyles';
import {DotsVertical} from '../../assets';

type Props = {
  data: Data;
};

export default function CardFeaturedProduct({data}: Props) {
  return (
    <View style={GlobalStyles.containerBoxWithShadow}>
      <View style={GlobalStyles.boxWithShadow}>
        <Image style={GlobalStyles.imageProduct} source={{uri: data.image}} />
        <View>
          <Text style={GlobalStyles.titleCardProduct}>{data.product}</Text>
          <Text style={GlobalStyles.priceCardProduct}>$ {data.price}</Text>
        </View>
        <View style={GlobalStyles.boxRating}>
          <Text style={GlobalStyles.textReviews}>⭐ 4.6</Text>
          <Text style={GlobalStyles.textReviews}>86 Reviews</Text>
          <DotsVertical />
        </View>
      </View>
    </View>
  );
}
