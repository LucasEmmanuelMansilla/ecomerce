import {useContext} from 'react';
import {NavigationContext} from './context';

// Custom hook para acceder a la función de navegación
export function useNavigation() {
  const navigation = useContext<any>(NavigationContext);
  const handle = (route: string) => {
    navigation?.navigate(route);
  };
  return {
    handle,
  };
}
