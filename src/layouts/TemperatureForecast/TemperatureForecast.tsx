import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import TodaysTemperature from './TodaysTemperature'
import EightDaysForecast from './EightDaysForecast'

const TemperatureForecast = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootTemperatureForecast}>
      <Box className={classes.boxToday}>
        <TodaysTemperature />
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
