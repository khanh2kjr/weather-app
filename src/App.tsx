import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import AppContainerContent from './layouts/AppContainerContent'
import AppHeader from './layouts/AppHeader'

const App = () => {
  const classes = useStyles()

  return (
    <Box className={classes.RootApp}>
      <AppHeader />
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
