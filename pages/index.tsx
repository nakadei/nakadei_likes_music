import type { GetStaticProps , NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { trackIds } from '../store/trackIds'
import { ItunesStoreMusic } from '../types'
import { MusicSwiper } from '../partials/musicSwiper'
import { getItunesMusics } from '../features/itunesMusics'

type Props = {
  musics: ItunesStoreMusic[]
}

const Home: NextPage<Props> = ({ musics }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>nakadei likes music</title>
        <meta name="description" content="nakadei likes music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <MusicSwiper musics={musics} />
      </main>
    </div>
  )
}

export const getStaticProps : GetStaticProps<Props> = async() => {
  return {
    props: {
      musics: await getItunesMusics(trackIds)
    }
  }
}

export default Home
