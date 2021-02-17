import { Box, Typography } from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { RootLayout } from '../components/layouts/RootLayout'
import { NewsCard } from '../components/news-page/NewsCard'
import { apiUrl } from '../helpers/api.helpers'
import { News } from '../types/entities'

export default function ContactsPage() {
  const [news, setNews] = useState<Array<News>>([])

  useEffect(() => {
    ;(async () => {
      const data: Array<News> = (await axios.get(`${apiUrl}/contacts`)).data

      setNews(
        data
          .filter(n => n.title && n.content)
          .map(n => ({ ...n, image: n.image ? `${apiUrl}/${n.image}` : null }))
      )
    })()
  }, [])

  return (
    <RootLayout title="Контакты">
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        {'Контакты'}
      </Typography>
      <Box display="flex" flexDirection="column" alignItems="center">
        {news.length ? (
          news.map(n => <NewsCard {...n} />)
        ) : (
          <Typography variant="h6" component="h6" align="center" gutterBottom>
            {'Пока нет контактов'}
          </Typography>
        )}
      </Box>
    </RootLayout>
  )
}
