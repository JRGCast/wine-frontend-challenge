import Head from 'next/head'
import {
  Container,
  Main,
  Title,
  Description,
  CodeTag,
} from '../components/sharedstyles'
import Cards from '../components/cards'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Create Next App</title>
        <meta name="JRGCast-wine-challenge" content="JRGCast-wine-challenge" />
        <link rel="icon" href="https://img.wine.com.br/logo/wine/black/wine.svg" />
      </Head>
      <Main>
        <Title>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </Title>

        <Description>
          Get started by editing
          <CodeTag>pages/index.tsx</CodeTag>
        </Description>

        <Cards />
      </Main>
    </Container>
  )
}
