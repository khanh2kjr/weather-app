import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { getWeatherIconURL } from '../utils'
import clsx from 'clsx'

interface TemperatureBoxProps {
  icon?: string
  value?: number
  iconWidthSize?: number
  valueSize?: number
  className?: string
  maxValue?: number
  minValue?: number
}

const TemperatureBox = ({
  icon,
  value,
  iconWidthSize,
  valueSize,
  className,
  maxValue,
  minValue,
}: TemperatureBoxProps) => {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.RootTemperatureBox, className && className)}>
      <img
        src={getWeatherIconURL(icon)}
        style={{ width: iconWidthSize || 70 }}
      />
      <Box sx={{ fontSize: valueSize || 32 }}>
        {maxValue && minValue ? (
          <Box component="span">
            {Math.round(maxValue)} / {Math.round(minValue)}
          </Box>
        ) : (
          <Box component="span">{Math.round(value || 0)}</Box>
        )}
        °C
      </Box>
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootTemperatureBox: {
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
}))

export default TemperatureBox
