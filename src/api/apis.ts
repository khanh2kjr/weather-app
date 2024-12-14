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
