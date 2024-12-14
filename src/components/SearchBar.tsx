import SearchIcon from '@mui/icons-material/Search'
import { alpha, InputBase, styled } from '@mui/material'
import { ChangeEvent } from 'react'

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      '&:focus': {
        width: '30ch',
      },
    },
  },
}))

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  onFocus?: () => void
}

const SearchBar = ({ value, onChange, onBlur, onFocus }: SearchBarProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    onChange(value)
  }

  const handleFocus = () => {
    !!onFocus && onFocus()
  }

  const handleBlur = () => {
    !!onBlur && onBlur()
  }

  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        value={value}
        placeholder="Enter keyword..."
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </Search>
  )
}

export default SearchBar
