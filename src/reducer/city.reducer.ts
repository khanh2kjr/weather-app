import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { CityResponse } from '../types'
import { searchCityCoordinates } from '../api/apis'

export const searchCities = createAsyncThunk(
  'city/searchCityCoordinates',
  async (payload: { cityName: string }, { rejectWithValue }) => {
    try {
      const res = await searchCityCoordinates(payload)
      return res
    } catch (err: any) {
      return rejectWithValue(err)
    }
  }
)

export interface CityState {
  searchCityId: number
  citiesSearchState: {
    data: CityResponse[]
    loading: boolean
  }
}
const initialState: CityState = {
  searchCityId: 0,
  citiesSearchState: {
    data: [],
    loading: false,
  },
}

export const citySlice = createSlice({
  name: 'cityStore',
  initialState,
  reducers: {
    setSearchCityId(state, { payload }) {
      state.searchCityId = payload
    },
  },
  extraReducers: builder => {
    builder.addCase(searchCities.pending, state => {
      state.citiesSearchState = {
        data: [],
        loading: true,
      }
    })
    builder.addCase(searchCities.fulfilled, (state, { payload }) => {
      state.citiesSearchState = {
        data: payload?.data?.list,
        loading: false,
      }
    })
    builder.addCase(searchCities.rejected, state => {
      state.citiesSearchState = {
        data: [],
        loading: false,
      }
    })
  },
})

export const cityReducerSelector = (state: RootState) => state['cityStore']

export const { setSearchCityId } = citySlice.actions

export default citySlice.reducer
