import React from 'react';
import UserUI from './UserUI';
import {useQuery} from '@tanstack/react-query';

export default function User() {
  const fetchUserData = async () => {
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
  const {isError, isLoading} = useQuery({
    queryKey: ['userData'],
    queryFn: async () => await fetchUserData(),
  });
  console.log('🚀 ~ file: User.tsx:22 ~ User ~ isLoading:', isLoading);
  console.log('🚀 ~ file: User.tsx:22 ~ User ~ isError:', isError);
  return <UserUI />;
}
