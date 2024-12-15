import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PaperBox from '../../components/PaperBox'
import TemperatureBox from '../../components/TemperatureBox'
import { EightDaysForecastItem } from './TemperatureForecast'

interface EightDaysForecastProps {
  eightDaysForecast: EightDaysForecastItem[]
}

const EightDaysForecast = ({ eightDaysForecast }: EightDaysForecastProps) => {
  const classes = useStyles()

  return (
    <PaperBox title="8 Days Forecast">
      <Box className={classes.dayForecastList}>
        {eightDaysForecast.map(item => (
          <Box className={classes.forecastItem}>
            <Box>{item.date}</Box>
            <TemperatureBox
              className={classes.tempBox}
              maxValue={item.tempMax}
              minValue={item.tempMin}
              icon={item.icon}
              iconWidthSize={40}
              valueSize={20}
            />
          </Box>
        ))}
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
