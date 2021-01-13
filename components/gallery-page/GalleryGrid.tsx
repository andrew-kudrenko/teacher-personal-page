import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import { GridList, GridListTile } from '@material-ui/core'
import { GalleryGridTileProps } from '../../types/components.types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      maxWidth: 1000,
    },
  })
)

const tileData: Array<GalleryGridTileProps> = [
  { img: '/author_photo.jpg', cols: 2 },
  { img: '/author_photo-2.jpg', cols: 1 },
  { img: '/author_photo.jpg', cols: 3 },
  { img: '/author_photo-1.jpg', cols: 1 },
  { img: '/author_photo.jpg', cols: 1 },
  { img: '/author_photo-2.jpg', cols: 1 },
  { img: '/author_photo.jpg', cols: 2 },
  // { img: '/author_photo-1.jpg', cols: 1 },
]

export const GalleryGrid: React.FC = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <GridList cellHeight={160 * 2.5} className={classes.gridList} cols={3}>
        {tileData.map((t, idx) => (
          <GridListTile key={`${t.img}--${idx}`} cols={t.cols}>
            <img src={t.img} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
