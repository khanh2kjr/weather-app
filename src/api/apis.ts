import { Coordinate } from '../types'
import { httpRequest } from './httpRequest'

export const searchCityCoordinates = async (payload: { cityName: string }) => {
  try {
    const res = await httpRequest.get('/find', {
      params: {
        q: payload.cityName,
      },
    })
    return res
  } catch (error) {
    console.error(error)
  }
}

export const getCityCurrentWeather = async (payload: Coordinate) => {
  try {
    const res = await httpRequest.get('/weather', {
      params: payload,
    })
    return res
  } catch (error) {
    console.error(error)
  }
}

export const getCityCurrentForeCast = async (payload: Coordinate) => {
  try {
    const res = await httpRequest.get('/onecall', {
      params: payload,
    })
    return res
  } catch (error) {
    console.error(error)
  }
}

export const getCityCurrentAQI = async (payload: Coordinate) => {
  try {
    const res = await httpRequest.get('/air_pollution', {
      params: payload,
    })
    return res
  } catch (error) {
    console.error(error)
  }
}
