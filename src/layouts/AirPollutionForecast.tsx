import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const AirPollutionForecast = () => {
  const classes = useStyles()

  return <Box className={classes.RootAirPollutionForecast}></Box>
}

const useStyles = makeStyles((theme: Theme) => ({
  RootAirPollutionForecast: {
    background: 'green',
    width: '100%',
    height: '100%',
  },
}))

export default AirPollutionForecast
