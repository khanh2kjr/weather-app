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
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}))

export default App
