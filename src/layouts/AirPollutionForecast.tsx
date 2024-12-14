import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import PaperBox from '../components/PaperBox'

const AirPollutionForecast = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootAirPollutionForecast}>
      <PaperBox title="Air Quality in Hanoi">
        <Box className={classes.listOptions}>
          <Box className={classes.option}>
            <Box className={classes.label}>PM2.5</Box>
            <Box className={classes.value}>20</Box>
          </Box>
          <Box className={classes.option}>
            <Box className={classes.label}>PM10</Box>
            <Box className={classes.value}>20</Box>
          </Box>
          <Box className={classes.option}>
            <Box className={classes.label}>SO2</Box>
            <Box className={classes.value}>20</Box>
          </Box>
          <Box className={classes.option}>
            <Box className={classes.label}>CO</Box>
            <Box className={classes.value}>20</Box>
          </Box>
          <Box className={classes.option}>
            <Box className={classes.label}>NO</Box>
            <Box className={classes.value}>20</Box>
          </Box>
          <Box className={classes.option}>
            <Box className={classes.label}>NO2</Box>
            <Box className={classes.value}>20</Box>
          </Box>
          <Box className={classes.option}>
            <Box className={classes.label}>NH3</Box>
            <Box className={classes.value}>20</Box>
          </Box>
          <Box className={classes.option}>
            <Box className={classes.label}>O3</Box>
            <Box className={classes.value}>20</Box>
          </Box>
        </Box>
      </PaperBox>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootAirPollutionForecast: {
    width: '100%',
    height: '100%',
  },
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
