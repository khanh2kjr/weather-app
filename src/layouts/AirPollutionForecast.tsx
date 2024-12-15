import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getCityCurrentAQI } from '../api/apis'
import PaperBox from '../components/PaperBox'
import { cityReducerSelector } from '../reducer/city.reducer'
import { Coordinate } from '../types'

const AirPollutionForecast = () => {
  const classes = useStyles()

  const { searchCityCoord } = useSelector(cityReducerSelector)

  const [loading, setLoading] = useState(false)
  const [aqiValue, setAqiValue] = useState({
    co: 0,
    no: 0,
    no2: 0,
    o3: 0,
    so2: 0,
    pm2_5: 0,
    pm10: 0,
    nh3: 0,
  })

  const getCityAQI = async (searchCityCoord: Coordinate) => {
    setLoading(true)
    try {
      const res = await getCityCurrentAQI(searchCityCoord)
      setAqiValue(res?.data.list[0].components)
    } catch (error) {
      console.error(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 200)
    }
  }

  useEffect(() => {
    if (searchCityCoord.lat && searchCityCoord.lon) {
      getCityAQI(searchCityCoord)
    }
  }, [searchCityCoord])

  return (
    <PaperBox title="Air Quality in Hanoi" loading={loading}>
      <Box className={classes.listOptions}>
        <Box className={classes.option}>
          <Box className={classes.label}>PM2.5</Box>
          <Box className={classes.value}>{aqiValue.pm2_5}</Box>
        </Box>
        <Box className={classes.option}>
          <Box className={classes.label}>PM10</Box>
          <Box className={classes.value}>{aqiValue.pm10}</Box>
        </Box>
        <Box className={classes.option}>
          <Box className={classes.label}>SO2</Box>
          <Box className={classes.value}>{aqiValue.so2}</Box>
        </Box>
        <Box className={classes.option}>
          <Box className={classes.label}>CO</Box>
          <Box className={classes.value}>{aqiValue.co}</Box>
        </Box>
        <Box className={classes.option}>
          <Box className={classes.label}>NO</Box>
          <Box className={classes.value}>{aqiValue.no}</Box>
        </Box>
        <Box className={classes.option}>
          <Box className={classes.label}>NO2</Box>
          <Box className={classes.value}>{aqiValue.no2}</Box>
        </Box>
        <Box className={classes.option}>
          <Box className={classes.label}>NH3</Box>
          <Box className={classes.value}>{aqiValue.nh3}</Box>
        </Box>
        <Box className={classes.option}>
          <Box className={classes.label}>O3</Box>
          <Box className={classes.value}>{aqiValue.o3}</Box>
        </Box>
      </Box>
    </PaperBox>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  listOptions: {
    display: 'flex',
    gap: theme.spacing(2),
    flexWrap: 'wrap',
  },
  value: {
    fontSize: 24,
  },
  option: {
    width: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  label: {
    marginBottom: theme.spacing(1),
    fontSize: 14,
  },
}))

export default AirPollutionForecast
