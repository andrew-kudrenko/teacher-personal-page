import { Typography } from '@material-ui/core'
import { GalleryGrid } from '../components/gallery-page/GalleryGrid'
import { RootLayout } from '../components/layouts/RootLayout'

export default function Gallery() {
  return (
    <RootLayout title="Фотогалерея">
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        {'Фотогалерея'}
      </Typography>
      <GalleryGrid />
    </RootLayout>
  )
}
