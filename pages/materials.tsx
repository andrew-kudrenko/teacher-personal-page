import { Box, Typography } from '@material-ui/core'
import { RootLayout } from '../components/layouts/RootLayout'
import { MaterialsList } from '../components/materials-page/MaterialsList'
import { MaterialsListProps } from '../types/components.types'
import { Portrait } from '../components/home-page/Portrait'

const materials: Array<MaterialsListProps> = [
  {
    title: 'Презентации к урокам',
    data: [
      {
        title:
          'Презентация к уроку математики "Контрольная работа за I полугодие"',
        href: 'https://clck.ru/LuBdJ',
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
      <Typography variant="h3" component="h2" align="center">
        {'Методическая копилка'}
      </Typography>
      <Portrait src="/materials-page/alina's_photo_2.jpg" />
      <Box>
        {materials.map(m => (
          <MaterialsList {...m} key={m.title} />
        ))}
      </Box>
    </RootLayout>
  )
}
