import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { getWeatherIconURL } from '../utils'
import clsx from 'clsx'

interface TemperatureBoxProps {
  icon: string
  value: string | number
  iconWidthSize?: number
  valueSize?: number
  className?: string
}

const TemperatureBox = ({
  icon,
  value,
  iconWidthSize,
  valueSize,
  className,
}: TemperatureBoxProps) => {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.RootTemperatureBox, className && className)}>
      <img
        src={getWeatherIconURL(icon)}
        style={{ width: iconWidthSize || 70 }}
      />
      <Box sx={{ fontSize: valueSize || 32 }}>{value}°C</Box>
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
