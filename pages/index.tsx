import { Credo } from '../components/home-page/Credo'
import { GreetingArticle } from '../components/home-page/GreetingArticle'
import { Portrait } from '../components/home-page/Portrait'
import { ProfessionalProperties } from '../components/home-page/ProfessionalProperties'
import { RootLayout } from '../components/layouts/RootLayout'

export default function Home() {
  return (
    <RootLayout title="Обо мне">
      <GreetingArticle />
      <Portrait src="/author_photo.jpg" />
      <Credo />
      <Portrait src="/author_photo-2.jpg" />
      <ProfessionalProperties />
    </RootLayout>
  )
}
