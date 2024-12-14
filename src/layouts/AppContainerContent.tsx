import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import TemperatureForecast from './TemperatureForecast'
import AirPollutionForecast from './AirPollutionForecast'

const AppContainerContent = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootAppContainerContent}>
      <Box className={classes.tempForcast}>
        <TemperatureForecast />
      </Box>
      <Box className={classes.airPollutionForcast}>
        <AirPollutionForecast />
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootAppContainerContent: {
    flexGrow: 1,
    display: 'flex',
    gap: theme.spacing(3),
    padding: theme.spacing(3),
  },
  tempForcast: {
    width: 400,
  },
  airPollutionForcast: {
    width: 600,
  },
}))

export default AppContainerContent
