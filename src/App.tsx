import { Box, Theme } from '@mui/material'
import AppContainerContent from './layouts/AppContainerContent'
import AppHeader from './layouts/AppHeader'
import { makeStyles } from '@mui/styles'

const App = () => {
  const classes = useStyles()

  const onSelectCity = (cityId: number) => {
    console.log(cityId)
  }

  return (
    <Box className={classes.RootApp}>
      <AppHeader onSelectCity={onSelectCity} />
      <AppContainerContent />
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootApp: {
    backgroundColor: theme.color.grey.primary,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
}))

export default App
