import type { GetStaticProps , NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { trackIds } from '../store/trackIds'
import { ItunesStoreMusic } from '../types'
import { MusicPlayer } from '../components/music/musicPlayer'
import { MusicSwiper } from '../partials/musicSwiper'
import { Swiper, SwiperSlide } from 'swiper/react' //カルーセル用のタグをインポート
import SwiperCore, { Pagination, Navigation } from 'swiper' //使いたい機能をインポート

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
  const responses = await Promise.all(trackIds.map((trackId) => fetch(`https://itunes.apple.com/lookup?id=${trackId}&country=JP`)))
  const results = await Promise.all(responses.map((response) => response.json()))

  return {
    props: {
      musics: results.map((result) => result.results[0])
    }
  }
}

export default Home
