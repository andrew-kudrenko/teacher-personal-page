import { Typography } from '@material-ui/core'
import { RootLayout } from '../components/layouts/RootLayout'

export default function Materials() {
  return (
    <RootLayout title="Методические материалы">
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        {'Методическая копилка'}
      </Typography>
    </RootLayout>
  )
}
