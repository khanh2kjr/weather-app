import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import { CityResponse, Coordinate } from '../types'
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
  searchCityCoord: Coordinate
  citiesSearchState: {
    data: CityResponse[]
    loading: boolean
  }
}
const initialState: CityState = {
  searchCityCoord: {
    lat: 0,
    lon: 0,
  },
  citiesSearchState: {
    data: [],
    loading: false,
  },
}

export const citySlice = createSlice({
  name: 'cityStore',
  initialState,
  reducers: {
    setSearchCityCoord(state, { payload }) {
      state.searchCityCoord = payload
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

export const { setSearchCityCoord } = citySlice.actions

export default citySlice.reducer
