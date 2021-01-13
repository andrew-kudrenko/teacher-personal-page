import {
  makeStyles,
  createStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import { ProfessionalPropertyCardProps } from '../../types/components.types'

const useStyles = makeStyles(
  createStyles({
    media: {
      height: 200,
    },
    card: {
      height: 350,
    },
  })
)

export const ProfessionalPropertyCard: React.FC<ProfessionalPropertyCardProps> = props => {
  const { description, img, title } = props
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4} key={title}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia image={img} title={title} className={classes.media} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  )
}
