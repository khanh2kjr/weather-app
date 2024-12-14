import { AppBar, Box, Button, Theme, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'

const AppHeader = () => {
  const classes = useStyles()

  const [searchValue, setSearchValue] = useState('')

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.title}>Weather App</Box>
        <Box className={classes.searchBox}>
          <SearchBar value={searchValue} onChange={setSearchValue} />
          <Button className={classes.buttonSearch} variant="contained">
            Search
          </Button>
        </Box>
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
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchBox: {
    display: 'flex',
    gap: theme.spacing(1),
  },
  buttonSearch: {
    backgroundColor: `${theme.color.grey.primary} !important`,
  },
}))

export default AppHeader
