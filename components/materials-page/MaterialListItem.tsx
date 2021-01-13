import Link from 'next/link'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Theme,
  Typography,
} from '@material-ui/core'
import { DockOutlined } from '@material-ui/icons'
import { MaterialListItemProps } from '../../types/components.types'
import { makeStyles, createStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
  })
)

export const MaterialsListItem: React.FC<MaterialListItemProps> = props => {
  const { title, href } = props
  const classes = useStyles()

  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar>
          <DockOutlined />
        </Avatar>
      </ListItemAvatar>
      <Typography component={Link} href={href}>
        <ListItemText primary={title} color="default" />
      </Typography>
    </ListItem>
  )
}
