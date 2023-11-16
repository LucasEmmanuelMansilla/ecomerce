import {View, TextInput} from 'react-native';
import React from 'react';
import {PLACEHOLDER_FILTER} from '../../constants';
import {GlobalStyles} from '../../styles/globalStyles';
import {COLORS} from '../../styles/colors';
import {Search} from '../../assets';

export default function Filter() {
  return (
    <View style={GlobalStyles.filterContainer}>
      <View style={GlobalStyles.textInputContainer}>
        <TextInput
          style={GlobalStyles.textInputText}
          placeholderTextColor={COLORS.soft_text}
          placeholder={PLACEHOLDER_FILTER}
        />
        <Search />
      </View>
    </View>
  );
}
