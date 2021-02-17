import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Theme,
  createStyles,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'
import { News } from '../../types/entities'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 550,
      minWidth: 300,
      margin: theme.spacing(2),
    },
    media: {
      height: 300,
    },
  })
)

export const NewsCard: React.FC<News> = ({ title, image, content }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
        {image && <CardMedia className={classes.media} image={image} />}
      </CardActionArea>
    </Card>
  )
}
