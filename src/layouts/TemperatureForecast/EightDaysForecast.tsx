import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PaperBox from '../../components/PaperBox'
import TemperatureBox from '../../components/TemperatureBox'
import { EightDaysForecastItem } from './TemperatureForecast'

interface EightDaysForecastProps {
  eightDaysForecast: EightDaysForecastItem[]
  loading: boolean
}

const EightDaysForecast = ({
  eightDaysForecast,
  loading,
}: EightDaysForecastProps) => {
  const classes = useStyles()

  return (
    <PaperBox title="8 Days Forecast" loading={loading}>
      <Box className={classes.dayForecastList}>
        {eightDaysForecast.map(item => (
          <Box className={classes.forecastItem} key={item.date}>
            <Box>{item.date}</Box>
            <TemperatureBox
              className={classes.tempBox}
              maxValue={item.tempMax}
              minValue={item.tempMin}
              icon={item.icon}
              iconWidthSize={40}
              valueSize={16}
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
    gap: theme.spacing(3),
    flexWrap: 'wrap',
  },
  forecastItem: {},
  tempBox: {
    marginLeft: theme.spacing(-1),
  },
}))

export default EightDaysForecast
