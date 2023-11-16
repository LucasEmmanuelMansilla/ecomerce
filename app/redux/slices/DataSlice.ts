import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {DataWS} from '../../networking/endpoints/DataWS';
import {Data} from '../../types/types';

const data: Data[] = [];

const initialState = {
  data: data,
};

export const getData = createAsyncThunk(
  'DataSlice/getData',
  async ({}: any, {rejectWithValue, dispatch}) => {
    try {
      const response = await DataWS.getData();
      return response.data;
    } catch (error) {
      console.log('error get data: ', JSON.stringify(error));
      return rejectWithValue({
        error: error,
      });
    }
  },
);

const DataSlice = createSlice({
  name: 'DataSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getData.fulfilled, (state, {payload}) => {
      state.data = payload;
    });
  },
});

export default DataSlice.reducer;
