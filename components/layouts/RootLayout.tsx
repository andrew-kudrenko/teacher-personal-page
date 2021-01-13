import Head from 'next/head'
import clsx from 'clsx'
import {
  Box,
  Container,
  createStyles,
  CssBaseline,
  makeStyles,
  Theme,
} from '@material-ui/core'
import { RootLayoutProps } from '../../types/components.types'
import { Navbar } from '../nav/navbar/Navbar'
import { useState } from 'react'

const drawerWidth = 240
const appBarHeight = 65

const useStyles = makeStyles(({ spacing, breakpoints }: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: appBarHeight + spacing(2),
      paddingBottom: spacing(2),
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transitionProperty: 'padding-left',
      transitionDuration: '.2s',
      [breakpoints.up('md')]: {
        paddingLeft: 72,
      },
    },
    shiftedByDrawer: {
      [breakpoints.up('md')]: {
        paddingLeft: drawerWidth,
      },
    },
  })
)

export const RootLayout: React.FC<RootLayoutProps> = ({ children, title }) => {
  const classes = useStyles()

  const [opened, setOpened] = useState(false)

  return (
    <>
      <Head>
        <title>{`${title} | Сайт учителя школы`}</title>
      </Head>
      <CssBaseline />
      <Navbar opened={opened} onToggle={setOpened.bind(null, !opened)} />
      <Box
        className={clsx(classes.main, { [classes.shiftedByDrawer]: opened })}
      >
        <Container className={classes.container} maxWidth="md">
          {children}
        </Container>
      </Box>
    </>
  )
}
