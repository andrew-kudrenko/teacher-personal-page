import { Box, Paper } from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/styles'

type PortraitProps = { src: string }

const useStyles = makeStyles(
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-evenly',
    },
    portrait: {
      maxHeight: '70vh',
      maxWidth: '100%',
    },
    imageWrapper: {
      margin: '0 auto',
    },
  })
)

export const Portrait: React.FC<PortraitProps> = ({ src }) => {
  const classes = useStyles()

  return (
    <Box marginY={2} className={classes.root}>
      <Box className={classes.imageWrapper} padding={2} component={Paper}>
        <img src={src} className={classes.portrait} />
      </Box>
    </Box>
  )
}
