import {FlatList, View} from 'react-native';
import React from 'react';
import CardCategories from './CardCategories';
import {CATEGORIES_TITLE} from '../../constants';
import CustomText from './CustomText';
import {GlobalStyles} from '../../styles/globalStyles';
import {Eggs, Fruits, Meat, Vegetals} from '../../assets';

export default function CardCategoriesContainer() {
  const mockup = [
    {
      id: 1,
      svg: <Vegetals />,
      product: 'Verduras',
      inactiveColor: '#EAF3EA',
    },
    {
      id: 2,
      svg: <Fruits />,
      product: 'Frutas',
      inactiveColor: '#FFECE8',
    },
    {
      id: 3,
      svg: <Eggs />,
      product: 'Huevos',
      inactiveColor: '#FFF6E4',
    },
    {
      id: 4,
      svg: <Meat />,
      product: 'Carne',
      inactiveColor: '#F1EDFC',
    },
    {
      id: 5,
      svg: <Vegetals />,
      product: 'Hortalizas',
      inactiveColor: '#EAF3EA',
    },
  ];
  return (
    <View>
      <CustomText styles={GlobalStyles.subtitle} text={CATEGORIES_TITLE} />
      <FlatList
        horizontal
        data={mockup}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => <CardCategories item={item} />}
      />
    </View>
  );
}
