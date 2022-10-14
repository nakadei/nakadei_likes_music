import type { GetServerSideProps , NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { ItunesStoreMusic } from '../types'
import { MusicSwiper } from '../partials/musicSwiper'
import { getItunesMusics, getTrackIdsRandom } from '../features/itunesMusics'

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

export const getServerSideProps : GetServerSideProps<Props> = async() => {
  const result = await getTrackIdsRandom()
  return {
    props: {
      musics: await getItunesMusics(result)
    }
  }
}

export default Home
