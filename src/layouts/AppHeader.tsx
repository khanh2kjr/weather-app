import { AppBar, Box, Button, Theme, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useEffect, useRef, useState } from 'react'
import { searchCityCoordinates } from '../api/apis'
import SearchBar from '../components/SearchBar'
import { CityResponse } from '../types'
import { getCountryIconURL } from '../utils'
import TemperatureBox from '../components/TemperatureBox'
import { useClickOutside } from '../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch } from '../store'
import {
  cityReducerSelector,
  searchCities,
  setSearchCityCoord,
} from '../reducer/city.reducer'

const AppHeader = () => {
  const classes = useStyles()
  const dispatch = useDispatch<AppDispatch>()
  const searchBoxRef = useRef<HTMLDivElement | null>(null)

  const { citiesSearchState } = useSelector(cityReducerSelector)

  const [searchValue, setSearchValue] = useState('')
  const [openCities, setOpenCities] = useState(false)
  const [searchFocused, setSearchFocused] = useState(false)
  const [countSearch, setCountSearch] = useState(0)

  useClickOutside(searchBoxRef, () => {
    setOpenCities(false)
  })

  const onClickSearchCities = () => {
    setOpenCities(true)
    dispatch(searchCities({ cityName: searchValue.trim() }))
    setCountSearch(countSearch + 1)
  }

  const selectCity = (city: CityResponse) => {
    dispatch(setSearchCityCoord(city.coord))
    setOpenCities(false)
    setSearchValue('')
    setCountSearch(0)
  }

  useEffect(() => {
    dispatch(searchCities({ cityName: 'hanoi' })).then(res => {
      // @ts-ignore
      dispatch(setSearchCityCoord(res.payload?.data?.list[0]?.coord))
    })
  }, [])

  useEffect(() => {
    const onEscape = (event: { key: string }) => {
      if (event.key === 'Enter' && !!searchValue && searchFocused) {
        setOpenCities(true)
        dispatch(searchCities({ cityName: searchValue.trim() }))
        setCountSearch(countSearch + 1)
      }
    }
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('keydown', onEscape)
    }
  }, [searchValue, searchFocused])

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Box className={classes.title}>Weather App</Box>
        <Box className={classes.searchBox} ref={searchBoxRef}>
          <SearchBar
            value={searchValue}
            onChange={setSearchValue}
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
          <Button
            variant="contained"
            disabled={!searchValue.trim()}
            className={classes.buttonSearch}
            onClick={onClickSearchCities}
          >
            Search
          </Button>
          {citiesSearchState.loading && countSearch > 0 && (
            <Box className={classes.listCities}>
              <Box className={classes.emptyCities}>Loading...</Box>
            </Box>
          )}
          {!citiesSearchState.loading && openCities && (
            <Box className={classes.listCities}>
              {citiesSearchState.data.length ? (
                citiesSearchState.data.map(city => (
                  <Box
                    className={classes.cityItem}
                    key={city.id}
                    onClick={() => selectCity(city)}
                  >
                    <Box className={classes.cityNameBox}>
                      <Box>{`${city.name}, ${city.sys?.country}`}</Box>
                      <img src={getCountryIconURL(city.sys?.country)} />
                    </Box>
                    <TemperatureBox
                      className={classes.tempBox}
                      value={city.main?.temp}
                      icon={city?.weather?.[0].icon}
                      valueSize={14}
                      iconWidthSize={50}
                    />
                  </Box>
                ))
              ) : (
                <Box className={classes.emptyCities}>No Data</Box>
              )}
            </Box>
          )}
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
    [theme.breakpoints.down(576)]: {
      flexDirection: 'column',
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      alignItems: 'baseline',
    },
  },
  searchBox: {
    display: 'flex',
    gap: theme.spacing(1),
    position: 'relative',
  },
  buttonSearch: {
    backgroundColor: `${theme.color.grey.primary} !important`,
  },
  listCities: {
    position: 'absolute',
    width: '100%',
    top: '100%',
    background: theme.color.black.primary,
    border: `1px solid ${theme.color.grey.primary}`,
    borderTop: 0,
    borderRadius: '0 0 4px 4px',
  },
  cityItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(4),
    padding: theme.spacing(1),
    cursor: 'pointer',
    transition: 'all .2s',
    '&:hover': {
      backgroundColor: theme.color.grey.primary,
    },
  },
  cityNameBox: {
    fontSize: 13,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1),
  },
  tempBox: {
    minWidth: 100,
  },
  emptyCities: {
    padding: theme.spacing(2),
  },
}))

export default AppHeader
