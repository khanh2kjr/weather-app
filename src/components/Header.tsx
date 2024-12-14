import { AppBar, Box, Theme, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchBar from './SearchBar'

const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.title}>Weather App</Box>
        <SearchBar />
      </Toolbar>
    </AppBar>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    textTransform: 'uppercase',
  },
  toolbar: {
    gap: theme.spacing(2),
  },
}))

export default Header
