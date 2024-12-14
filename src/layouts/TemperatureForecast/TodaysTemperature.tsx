import { CalendarToday, Place } from '@mui/icons-material'
import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PaperBox from '../../components/PaperBox'
import TemperatureBox from '../../components/TemperatureBox'
import { formatToReadableDate } from '../../utils'

const TodaysTemperature = () => {
  const classes = useStyles()

  return (
    <PaperBox className={classes.RootTodaysTemperature} title="Currently">
      <Box className={classes.todaysTemperatureChildren}>
        <Box className={classes.temperatureBox}>
          <TemperatureBox value={25} icon="04n" />
        </Box>
        <Box className={classes.timeBox}>
          <CalendarToday />
          <Box>{formatToReadableDate(new Date())}</Box>
        </Box>
        <Box className={classes.cityNameBox}>
          <Place />
          <Box>Hanoi, VN</Box>
        </Box>
      </Box>
    </PaperBox>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootTodaysTemperature: {
    height: '100%',
  },
  todaysTemperatureChildren: {
    '& svg': { fontSize: 20 },
  },
  temperatureBox: {
    margin: theme.spacing(-2, 0, 0, -1),
  },
  temperatureValue: {
    fontSize: 32,
  },
  cityNameBox: {
    marginTop: theme.spacing(1),
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
  },
  timeBox: {
    display: 'flex',
    gap: theme.spacing(1),
    alignItems: 'center',
  },
}))

export default TodaysTemperature
