export interface Coordinate {
  lat: number
  lon: number
}

interface Wind {
  speed: number
  deg: number
}

export interface CityResponse {
  id?: number
  base?: number
  cod?: number
  timezone?: number
  visibility?: number
  name?: string
  coord?: Coordinate
  main?: {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
    sea_level: number
    grnd_level: number
  }
  dt?: number
  wind?: Wind
  sys?: {
    country: string
  }
  rain?: number | null
  snow?: number | null
  clouds?: {
    all: number
  }
  weather?: {
    id: number
    main: string
    description: string
    icon: string
  }[]
}
