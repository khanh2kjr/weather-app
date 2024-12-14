import { Box, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import { ReactElement } from 'react'

interface PaperBoxProps {
  title?: string
  children: ReactElement | string
  className?: string
}

const PaperBox = ({ title, className, children }: PaperBoxProps) => {
  const classes = useStyles()

  return (
    <Box className={clsx(classes.RootPaperBox, className && className)}>
      <Box className={classes.title}>{title}</Box>
      {children}
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
}))

export default PaperBox
