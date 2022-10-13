import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import styles from '../styles/Home.module.css'
import { getMusic } from '../api/music'
import { trackIds } from '../store/trackIds'
import { ItunesStoreMusic } from '../types/itunesStore'
import { MusicPlayer } from '../components/music/musicPlayer'

type Props = {
  musics: ItunesStoreMusic[]
}

const Home: NextPage<Props> = ({ musics }) => {
  console.log("musics: ", musics)
  return (
    <div className={styles.container}>
      <Head>
        <title>nakadei likes music</title>
        <meta name="description" content="nakadei likes music" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {/* TODO: Slider のようなもので実装する */}
        <div className="grid gap-y-8">
          {musics.map((music) => <MusicPlayer key={music.trackId} music={music} />)}
        </div>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async() => {
  console.log("getServerSideProps")
  const responses = await Promise.all(trackIds.map((trackId) => fetch(`https://itunes.apple.com/lookup?id=${trackId}&country=JP`)))
  const results = await Promise.all(responses.map((response) => response.json()))

  return {
    props: {
      musics: results.map((result) => result.results[0])
    }
  }
}

export default Home
