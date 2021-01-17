import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  GridList,
  GridListTile,
  useMediaQuery,
  Box,
} from '@material-ui/core'
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
  { img: '/gallery-page/gallery_photo_3.jpg', cols: 1 },
  { img: '/gallery-page/gallery_photo_5.jpg', cols: 2 },
  { img: '/gallery-page/gallery_photo_1.jpg', cols: 2 },
  { img: '/gallery-page/gallery_photo_2.jpg', cols: 1 },
  { img: '/gallery-page/gallery_photo_6.jpg', cols: 1 },
  { img: '/gallery-page/gallery_photo_0.jpg', cols: 1 },
  { img: '/gallery-page/gallery_photo_7.jpg', cols: 1 },
  { img: '/gallery-page/gallery_photo_4.jpg', cols: 1 },
  { img: '/gallery-page/gallery_photo_8.jpg', cols: 2 },
  { img: '/gallery-page/gallery_photo_9.jpg', cols: 1 },
  { img: '/gallery-page/gallery_photo_10.jpg', cols: 2 },
  { img: '/gallery-page/gallery_photo_11.jpg', cols: 3 },
]

export const GalleryGrid: React.FC = () => {
  const classes = useStyles()

  const greatThanSm = useMediaQuery(`(min-width: ${350}px)`)
  const greatThanMd = useMediaQuery(`(min-width: ${450}px)`)
  const greatThanLg = useMediaQuery(`(min-width: ${650}px)`)

  const baseHeight = 120
  let factor = 1

  if (greatThanSm) {
    factor = 1.25
  }

  if (greatThanMd) {
    factor = 1.75
  }

  if (greatThanLg) {
    factor = 3
  }

  return (
    <Paper className={classes.root} elevation={2}>
      <Box padding={1}>
        <GridList
          cellHeight={baseHeight * factor}
          className={classes.gridList}
          cols={3}
          spacing={8}
        >
          {tileData.map((t, idx) => (
            <GridListTile
              key={`${t.img}--${idx}`}
              cols={greatThanMd ? t.cols : 3}
            >
              <img src={t.img} />
            </GridListTile>
          ))}
        </GridList>
      </Box>
    </Paper>
  )
}
