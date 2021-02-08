import { Theme, createStyles, makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  GridList,
  GridListTile,
  useMediaQuery,
  Box,
} from '@material-ui/core'
import { GalleryGridTileProps } from '../../types/components.types'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { apiUrl } from '../../helpers/api.helpers'

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

export const GalleryGrid: React.FC = () => {
  const [tiles, setTiles] = useState<Array<GalleryGridTileProps>>([])
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

  useEffect(() => {
    ;(async () => {
      const response = await axios.get(`${apiUrl}/photos`)

      if (response.data) {
        setTiles(
          response.data.map(n => ({ img: `${apiUrl}/${n.file}`, cols: n.cols }))
        )
      }
    })()
  }, [])

  return (
    <Paper className={classes.root} elevation={2}>
      <Box padding={1}>
        <GridList
          cellHeight={baseHeight * factor}
          className={classes.gridList}
          cols={3}
          spacing={8}
        >
          {tiles.map((t, idx) => (
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
