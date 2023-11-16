import {FlatList, View, Pressable} from 'react-native';
import React from 'react';
import {Data} from '../../types/types';
import CardFeaturedProduct from './CardFeaturedProduct';
import CustomText from './CustomText';
import {GlobalStyles} from '../../styles/globalStyles';
import {FEATURED_PRODUCTS_TITLE, SEE_ALL} from '../../constants';
import {useNavigation} from '../../utils/useNavigationHook';

type Props = {
  data: Data[];
  landing?: boolean;
};

export default function CardFeaturedProductsContainer({data, landing}: Props) {
  const {handle} = useNavigation();
  return (
    <View>
      {landing && (
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: '3%',
          }}>
          <CustomText
            styles={GlobalStyles.subtitle}
            text={FEATURED_PRODUCTS_TITLE}
          />
          <Pressable onPress={() => handle('Product')}>
            <CustomText styles={GlobalStyles.title} text={SEE_ALL} />
          </Pressable>
        </View>
      )}
      <FlatList
        data={data}
        contentContainerStyle={{
          paddingBottom: 10,
          width: '100%',
        }}
        numColumns={2}
        keyExtractor={item => '#' + item._id}
        renderItem={({item}) => <CardFeaturedProduct data={item} />}
      />
    </View>
  );
}
