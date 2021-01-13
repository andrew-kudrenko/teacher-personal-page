import React from 'react'
import clsx from 'clsx'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import {
  Divider,
  Drawer as MuiDrawer,
  IconButton,
  List,
} from '@material-ui/core'
import {
  BookOutlined,
  BusinessCenterOutlined,
  CallOutlined,
  CameraEnhanceOutlined,
  ChevronLeft,
  HomeOutlined,
  StarOutline,
} from '@material-ui/icons'

import { DrawerListOption } from './DrawerListOption'
import {
  DrawerListOptionProps,
  DrawerProps,
} from '../../../types/components.types'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
  })
)

const drawerListOptions: Array<DrawerListOptionProps> = [
  { label: 'Главная', to: '/', icon: <HomeOutlined /> },
  {
    label: 'Материалы',
    to: '/materials',
    icon: <BookOutlined />,
  },
  // { label: 'Портфолио', to: '/portfolio', icon: <BusinessCenterOutlined /> },
  // { label: 'Новости', to: '/news', icon: <HomeOutlined /> },
  { label: 'Фотогалерея', to: '/gallery', icon: <CameraEnhanceOutlined /> },
  // { label: 'Достижения', to: '/achievements', icon: <StarOutline /> },
  // { label: 'Контакты', to: '/contacts', icon: <CallOutlined /> },
]

export const Drawer: React.FC<DrawerProps> = ({ opened, onToggle }) => {
  const classes = useStyles()

  return (
    <MuiDrawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: opened,
        [classes.drawerClose]: !opened,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: opened,
          [classes.drawerClose]: !opened,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={onToggle}>
          <ChevronLeft />
        </IconButton>
      </div>
      <Divider />
      <List>
        {drawerListOptions.map(o => (
          <DrawerListOption key={o.label} {...o} />
        ))}
      </List>
    </MuiDrawer>
  )
}
