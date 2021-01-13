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
      <img
        className={classes.icon}
        src="https://www.flaticon.com/svg/vstatic/svg/3444/3444855.svg?token=exp=1610576196~hmac=3fcfc37d4ea0593a582c43e5584911e3"
      />
      <Typography variant="h6">{'Мой сайт'}</Typography>
    </Box>
  )
}
