import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import TemperatureForecast from './TemperatureForecast/TemperatureForecast'
import AirPollutionForecast from './AirPollutionForecast'

const AppContainerContent = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootAppContainerContent}>
      <TemperatureForecast />
      <AirPollutionForecast />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootAppContainerContent: {
    padding: theme.spacing(3),
    maxWidth: 1488,
    margin: '0 auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(3),
  },
}))

export default AppContainerContent
