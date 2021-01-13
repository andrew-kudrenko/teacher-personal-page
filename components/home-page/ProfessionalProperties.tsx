import { Box, Grid, Typography } from '@material-ui/core'
import { ProfessionalPropertyCardProps } from '../../types/components.types'
import { ProfessionalPropertyCard } from './ProfessionalPropertyCard'

const professionalProperties: Array<ProfessionalPropertyCardProps> = [
  {
    title: 'Квалификация',
    description: 'Учитель начальных классов',
    img:
      'https://si28ufa.ru/wp-content/uploads/2020/04/oayt5g0-8e0a5641d9-scaled.jpg',
  },
  {
    title: 'Карьера',
    description: '2019 год - воспитатель детского сада',
    img: 'https://img5.goodfon.ru/original/1280x800/6/1b/globus-doska-klas.jpg',
  },
  {
    title: 'Профессиональные интересы',
    description: 'Педагогика и методика начального образования',
    img:
      'https://img3.goodfon.ru/original/640x480/f/66/september-sentyabr-kalendar-3927.jpg',
  },
  {
    title: 'Трудовой стаж',
    description: '',
    img:
      'https://www.kerkyrasimera.gr/wp-content/uploads/2019/09/ThinkstockPhotos-484783000.jpg',
  },
  {
    title: 'Педагогический стаж',
    description: '',
    img:
      'https://i.pinimg.com/originals/e4/cb/62/e4cb6218d0a4ccc05d9aaef7877cdba9.jpg',
  },

  {
    title: 'Повышение квалификации',
    description: '',
    img:
      'https://consciousreminder.com/wp-content/uploads/2019/03/graffiti-2227941_1920-768x429.jpg',
  },
]

export const ProfessionalProperties: React.FC = () => {
  return (
    <>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        {'Профессиональные качества'}
      </Typography>
      <Box marginY={2}>
        <Grid container spacing={2}>
          {professionalProperties.map(p => (
            <ProfessionalPropertyCard {...p} key={p.title} />
          ))}
        </Grid>
      </Box>
    </>
  )
}
