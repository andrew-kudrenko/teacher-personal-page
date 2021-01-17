import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Card,
  CardContent,
  Box,
} from '@material-ui/core'

const useStyles = makeStyles(({ spacing, typography }: Theme) =>
  createStyles({
    credo: {
      marginBottom: spacing(2),
    },
    content: {
      display: 'flex',
      alignItems: 'center',
    },
    quote: {
      marginRight: spacing(2),
      minWidth: '50px',
    },
    quoteMarker: {
      maxHeight: '50px',
    },
    text: {
      fontStyle: 'italic',
      fontWeight: typography.fontWeightLight,
      fontSize: typography.fontSize * 1.25,
    },
  })
)

export const Credo: React.FC = () => {
  const classes = useStyles()

  return (
    <>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {'Моё преподавательское кредо'}
      </Typography>
      <Card className={classes.credo}>
        <CardContent className={classes.content}>
          <Box className={classes.quote}>
            <img className={classes.quoteMarker} src="/home-page/idea.png" />
          </Box>
          <Box>
            <Typography
              variant="inherit"
              component="blockquote"
              gutterBottom
              className={classes.text}
            >
              {`
                "Если к ребенку не предъявлять 
                больших требований, то не стоит 
                ждать и больших результатов!"
              `}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  )
}
