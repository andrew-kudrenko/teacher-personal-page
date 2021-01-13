import Link from 'next/link'
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from '@material-ui/core'
import { DrawerListOptionProps } from '../../../types/components.types'

export const DrawerListOption: React.FC<DrawerListOptionProps> = props => {
  const { label, to, icon } = props

  return (
    <Link href={to} as={to}>
      <ListItem button key={label} component="a">
        <Tooltip title={label}>
          <ListItemIcon>{icon}</ListItemIcon>
        </Tooltip>
        <ListItemText primary={label} />
      </ListItem>
    </Link>
  )
}
