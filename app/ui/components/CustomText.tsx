import {Text, TextStyle} from 'react-native';
import React from 'react';

type Props = {
  text: string;
  styles: TextStyle;
};

export default function CustomText({text, styles}: Props) {
  return <Text style={styles}>{text}</Text>;
}
