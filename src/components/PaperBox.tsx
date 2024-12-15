import { Box, CircularProgress, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import { ReactElement } from 'react'

interface PaperBoxProps {
  title?: string
  children: ReactElement | string
  className?: string
  loading?: boolean
}

const PaperBox = ({ title, className, children, loading }: PaperBoxProps) => {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.RootPaperBox, className && className)}>
      <Box className={classes.title}>{title}</Box>
      {loading ? (
        <Box className={classes.loading}>
          <CircularProgress className={classes.circle} />
        </Box>
      ) : (
        children
      )}
    </Box>
  )
}

const useStyles = makeStyles((theme: Theme) => ({
  RootPaperBox: {
    borderRadius: theme.spacing(1),
    background: theme.color.black.primary,
    padding: theme.spacing(2),
    minHeight: 190,
  },
  title: {
    fontSize: 18,
    marginBottom: theme.spacing(2),
    borderBottom: `1px solid ${theme.color.grey.primary}`,
    paddingBottom: theme.spacing(2),
  },
  loading: {
    backgroundColor: `${theme.color.grey.primary} !important`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 190,
  },
  circle: {
    color: '#fff !important',
  },
}))

export default PaperBox
