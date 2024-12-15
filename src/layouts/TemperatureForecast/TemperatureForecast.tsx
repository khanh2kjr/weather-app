import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import TodaysTemperature from './TodaysTemperature'
import EightDaysForecast from './EightDaysForecast'
import { useSelector } from 'react-redux'
import { cityReducerSelector } from '../../reducer/city.reducer'
import { useEffect, useState } from 'react'
import { CityResponse, Coordinate } from '../../types'
import { getCityCurrentWeather } from '../../api/apis'

const TemperatureForecast = () => {
  const classes = useStyles()

  const { searchCityCoord } = useSelector(cityReducerSelector)

  const [currentWeather, setCurrentWeather] = useState<CityResponse>({})

  const getCityTemperature = async (searchCityCoord: Coordinate) => {
    const res = await getCityCurrentWeather(searchCityCoord)
    if (res) {
      setCurrentWeather(res.data)
    }
  }

  console.log(currentWeather)

  useEffect(() => {
    if (searchCityCoord.lat && searchCityCoord.lon) {
      getCityTemperature(searchCityCoord)
    }
  }, [searchCityCoord])

  return (
    <Box className={classes.RootTemperatureForecast}>
      <Box className={classes.boxToday}>
        <TodaysTemperature
          tempValue={currentWeather.main?.temp}
          iconValue={currentWeather.weather?.[0]?.icon}
          cityName={currentWeather.name}
          countryName={currentWeather.sys?.country}
        />
      </Box>
      <Box className={classes.boxEightDays}>
        <EightDaysForecast />
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
