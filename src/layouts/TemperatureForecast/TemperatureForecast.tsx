import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import TodaysTemperature from './TodaysTemperature'
import EightDaysForecast from './EightDaysForecast'
import { useSelector } from 'react-redux'
import { cityReducerSelector } from '../../reducer/city.reducer'
import { useEffect, useState } from 'react'
import { CityResponse, Coordinate } from '../../types'
import { getCityCurrentForeCast, getCityCurrentWeather } from '../../api/apis'

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000)
  const options: any = { weekday: 'short', month: 'short', day: 'numeric' }
  return date.toLocaleDateString('en-US', options)
}

export interface EightDaysForecastItem {
  date: string
  tempMax: number
  tempMin: number
  icon: string
}

const TemperatureForecast = () => {
  const classes = useStyles()

  const { searchCityCoord } = useSelector(cityReducerSelector)

  const [loading, setLoading] = useState(false)
  const [currentWeather, setCurrentWeather] = useState<CityResponse>({})
  const [eightDaysForecast, setEightDaysForecast] = useState<
    EightDaysForecastItem[]
  >([])

  const getCityTemperature = async (searchCityCoord: Coordinate) => {
    try {
      const res = await getCityCurrentWeather(searchCityCoord)
      setCurrentWeather(res?.data)
      return res
    } catch (error) {
      console.error(error)
    }
  }

  const getCityForeCast = async (searchCityCoord: Coordinate) => {
    try {
      const res = await getCityCurrentForeCast(searchCityCoord)
      setEightDaysForecast(
        res?.data.daily.map((item: any) => ({
          date: formatDate(item.dt),
          tempMax: Math.round(item.temp.max),
          tempMin: Math.round(item.temp.min),
          icon: item.weather[0].icon,
        }))
      )
      return res
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    if (searchCityCoord.lat && searchCityCoord.lon) {
      setLoading(true)
      Promise.all([
        getCityTemperature(searchCityCoord),
        getCityForeCast(searchCityCoord),
      ]).finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 200)
      })
    }
  }, [searchCityCoord])

  return (
    <Box className={classes.RootTemperatureForecast}>
      <Box className={classes.boxToday}>
        <TodaysTemperature
          loading={loading}
          tempValue={currentWeather.main?.temp}
          iconValue={currentWeather.weather?.[0]?.icon}
          cityName={currentWeather.name}
          countryName={currentWeather.sys?.country}
        />
      </Box>
      <Box className={classes.boxEightDays}>
        <EightDaysForecast
          eightDaysForecast={eightDaysForecast}
          loading={loading}
        />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootTemperatureForecast: {
    width: '100%',
    display: 'flex',
    gap: theme.spacing(3),
  },
  boxToday: {
    width: 300,
  },
  boxEightDays: {
    width: 'calc(100% - (300px + 24px))',
  },
}))

export default TemperatureForecast
