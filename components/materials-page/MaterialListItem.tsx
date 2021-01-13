import Link from 'next/link'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
  Typography,
} from '@material-ui/core'
import { MaterialListItemProps } from '../../types/components.types'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    marker: {
      maxHeight: 30,
    },
  })
)

export const MaterialsListItem: React.FC<MaterialListItemProps> = props => {
  const { title, href } = props
  const classes = useStyles()

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <img
          className={classes.marker}
          src="https://image.flaticon.com/icons/png/128/3444/3444821.png"
        />
      </ListItemAvatar>
      <Typography component={Link} href={href}>
        <ListItemText primary={title} color="default" />
      </Typography>
    </ListItem>
  )
}
