import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

const TemperatureForecast = () => {
  const classes = useStyles()

  return <Box className={classes.RootTemperatureForecast}></Box>
}

const useStyles = makeStyles((theme: Theme) => ({
  RootTemperatureForecast: {
    background: 'red',
    width: '100%',
    height: '100%',
  },
}))

export default TemperatureForecast
