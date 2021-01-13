import { Box, Typography } from '@material-ui/core'
import { RootLayout } from '../components/layouts/RootLayout'
import { MaterialsList } from '../components/materials-page/MaterialsList'
import { MaterialsListProps } from '../types/components.types'

const materials: Array<MaterialsListProps> = [
  {
    title: 'Презентации к урокам',
    data: [
      {
        title:
          'Презентация к уроку математики "Контрольная работа за I полугодие"',
        href: 'https://clck.ru/LuBdJ',
      },
      {
        title: '',
        href: '',
      },
    ],
  },
  {
    title: 'Проекты',
    data: [
      {
        title: '"Моя малая родина"',
        href: 'https://clck.ru/LuBd2',
      },
    ],
  },
  {
    title: 'Методические разработки',
    data: [
      {
        title:
          'Методика организации индивидуальной работы на уроках в начальной школе',
        href: 'https://clck.ru/LuBd2',
      },
      {
        title:
          'Методическая разработка урока развивающего контроля "Контрольная работа за I полугодие"',
        href: 'https://clck.ru/LuBd2',
      },
    ],
  },
]

export default function Materials() {
  return (
    <RootLayout title="Методические материалы">
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        {'Методическая копилка'}
      </Typography>
      <Box>
        {materials.map(m => (
          <MaterialsList {...m} key={m.title} />
        ))}
      </Box>
    </RootLayout>
  )
}
