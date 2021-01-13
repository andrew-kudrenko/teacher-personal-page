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
      minWidth: '100px',
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
            <img src="https://www.flaticon.com/svg/vstatic/svg/1005/1005084.svg?token=exp=1610445338~hmac=636cec303bca9e9582a3dc6b669064fe" />
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
