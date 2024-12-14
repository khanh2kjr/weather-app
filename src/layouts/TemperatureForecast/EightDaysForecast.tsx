import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PaperBox from '../../components/PaperBox'
import TemperatureBox from '../../components/TemperatureBox'

const EightDaysForecast = () => {
  const classes = useStyles()

  return (
    <PaperBox title="8 Days Forecast">
      <Box className={classes.dayForecastList}>
        <Box className={classes.forecastItem}>
          <Box>Sat, Dec 14</Box>
          <TemperatureBox
            className={classes.tempBox}
            value={10}
            icon="04n"
            iconWidthSize={40}
            valueSize={20}
          />
        </Box>
        <Box className={classes.forecastItem}>
          <Box>Sat, Dec 14</Box>
          <TemperatureBox
            className={classes.tempBox}
            value={10}
            icon="04n"
            iconWidthSize={40}
            valueSize={20}
          />
        </Box>
        <Box className={classes.forecastItem}>
          <Box>Sat, Dec 14</Box>
          <TemperatureBox
            className={classes.tempBox}
            value={10}
            icon="04n"
            iconWidthSize={40}
            valueSize={20}
          />
        </Box>
        <Box className={classes.forecastItem}>
          <Box>Sat, Dec 14</Box>
          <TemperatureBox
            className={classes.tempBox}
            value={10}
            icon="04n"
            iconWidthSize={40}
            valueSize={20}
          />
        </Box>
        <Box className={classes.forecastItem}>
          <Box>Sat, Dec 14</Box>
          <TemperatureBox
            className={classes.tempBox}
            value={10}
            icon="04n"
            iconWidthSize={40}
            valueSize={20}
          />
        </Box>
        <Box className={classes.forecastItem}>
          <Box>Sat, Dec 14</Box>
          <TemperatureBox
            className={classes.tempBox}
            value={10}
            icon="04n"
            iconWidthSize={40}
            valueSize={20}
          />
        </Box>
        <Box className={classes.forecastItem}>
          <Box>Sat, Dec 14</Box>
          <TemperatureBox
            className={classes.tempBox}
            value={10}
            icon="04n"
            iconWidthSize={40}
            valueSize={20}
          />
        </Box>
        <Box className={classes.forecastItem}>
          <Box>Sat, Dec 14</Box>
          <TemperatureBox
            className={classes.tempBox}
            value={10}
            icon="04n"
            iconWidthSize={40}
            valueSize={20}
          />
        </Box>
      </Box>
    </PaperBox>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  dayForecastList: {
    display: 'flex',
    gap: theme.spacing(6),
    flexWrap: 'wrap',
  },
  forecastItem: {},
  tempBox: {
    marginLeft: theme.spacing(-1),
  },
}))

export default EightDaysForecast
