import {View, Image} from 'react-native';
import React from 'react';
import {useQuery} from '@tanstack/react-query';
export default function UserUI() {
  const fetchData = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        console.log('dataaaaaa: ', data);
        return data;
      })
      .catch(error => {
        console.error('errorrr: ', error);
        return false;
      });
  };
  const {isError} = useQuery({
    queryKey: ['user'],
    queryFn: async () => await fetchData(),
  });
  console.log('🚀 ~ file: UserUI.tsx:19 ~ UserUI ~ isError:', isError);
  return (
    <View>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: 'https://cdn.gogeticon.net/files/1925428/fa0cbc2764f70113bf2fad3905933545.png',
        }}
      />
    </View>
  );
}
