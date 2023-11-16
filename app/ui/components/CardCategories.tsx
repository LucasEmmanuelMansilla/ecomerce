import {View, Text} from 'react-native';
import React from 'react';
import {GlobalStyles} from '../../styles/globalStyles';

type Item = {
  id: number;
  svg: React.ReactNode;
  product: string;
  inactiveColor: string;
};

type Props = {
  item: Item;
};

export default function CardCategories({item}: Props) {
  return (
    <View style={GlobalStyles.cardCategoriesContainer}>
      <View
        style={[
          GlobalStyles.cardSVGContainer,
          {backgroundColor: item.inactiveColor},
        ]}>
        {item.svg}
      </View>
      <Text style={GlobalStyles.cardCategoriesDescription}>{item.product}</Text>
    </View>
  );
}
