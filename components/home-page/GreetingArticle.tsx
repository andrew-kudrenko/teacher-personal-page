import { Typography } from '@material-ui/core'

export const GreetingArticle: React.FC = () => {
  return (
    <>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        {'Давайте знакомиться!'}
      </Typography>
      <Typography component="p" gutterBottom>
        {`
          Рада приветствовать Вас на персональном 
          сайте воспитателя детского сада №8 
          "Золотая рыбка" г.Валуйки - 
          Ерохиной Алины Владимировны!`}
      </Typography>
    </>
  )
}
