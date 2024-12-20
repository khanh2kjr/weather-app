import { createTheme } from '@mui/material/styles'
import { ThemeOptions as ThemeOptionsOld } from '@mui/material/styles/createTheme'

export const themeColors = {
  color: {
    blue: {},
    orange: {},
    black: {
      primary: '#333333',
      secondary: '#666666',
    },
    grey: {
      primary: '#515151',
    },
    green: {},
    yellow: {},
    error: {},
    violet: {},
    earthy: {},
  },
} as const

const themeOptions: ThemeOptionsOld = {
  ...themeColors,
  palette: {
    primary: {
      main: themeColors.color.black.primary,
    },
  },
  typography: {
    fontSize: 14,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {},
      },
    },
  },
}

type CustomTheme = {
  [Key in keyof typeof themeColors]: (typeof themeColors)[Key]
}

declare module '@mui/material/styles/createTheme' {
  interface Theme extends CustomTheme {}
  interface ThemeOptions extends CustomTheme {}
}

export const theme = createTheme({ ...themeColors, ...themeOptions })
