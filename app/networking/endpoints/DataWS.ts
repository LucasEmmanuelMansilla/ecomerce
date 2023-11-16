import api from '../api';

export const DataWS = {
  getData: async function () {
    return await api.get('/products/getAllProducts');
  },
};
