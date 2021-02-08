import { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Typography } from '@material-ui/core'
import { RootLayout } from '../components/layouts/RootLayout'
import { Portrait } from '../components/home-page/Portrait'
import { apiUrl } from '../helpers/api.helpers'
import { ID, Material, MaterialsCategory } from '../types/entities'
import { MaterialsList } from '../components/materials-page/MaterialsList'

export default function Materials() {
  const [categories, setCategories] = useState<Array<ID<MaterialsCategory>>>([])
  const [materials, setMaterials] = useState<Array<ID<Material>>>([])

  useEffect(() => {
    ;(async () => {
      const { data: categories } = await axios.get(
        `${apiUrl}/materials/categories`
      )
      const { data: materials } = await axios.get(`${apiUrl}/materials`)

      setCategories(categories)
      setMaterials(materials)
    })()
  }, [])

  return (
    <RootLayout title="Методические материалы">
      <Typography variant="h3" component="h2" align="center">
        {'Методическая копилка'}
      </Typography>
      <Portrait src="/materials-page/alina's_photo_2.jpg" />
      <Box>
        {categories.map(c => (
          <MaterialsList
            key={c.id}
            title={c.title}
            data={materials.filter(m => m.category === c.id)}
          />
        ))}
      </Box>
    </RootLayout>
  )
}
