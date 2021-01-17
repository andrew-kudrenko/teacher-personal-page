import { Box, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles = makeStyles(
  createStyles({
    icon: {
      maxHeight: 40,
      marginRight: '.25rem',
    },
  })
)

export const NavbarLogo: React.FC = () => {
  const classes = useStyles()

  return (
    <Box display="flex" alignItems="center">
      <img className={classes.icon} src="/navbar/navbar-logo.png" />
      <Typography variant="h6">{'Алина Ерохина'}</Typography>
    </Box>
  )
}
