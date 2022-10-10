import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useMemo, useState } from 'react'
import styles from '../styles/Home.module.css'
import { getMusic } from '../api/music'
import { trackIds } from '../store/trackIds'
import { ItunesStoreMusic } from '../types/itunesStore'
import { MusicPlayer } from '../components/music/musicPlayer'

const Home: NextPage = () => {
  const [musics, updateMusics] = useState<ItunesStoreMusic[]>([])
  const MemoMusicPlayers = useMemo(() => {
    return musics.map((music) => <MusicPlayer key={music.trackId} music={music} />)
  }, [musics])

  useEffect(() => {
    Promise.all(
      trackIds.map((trackId) => {
        return getMusic(trackId)
      })
    ).then(res => {
      updateMusics([...res])
    })
  }, [])


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
          {MemoMusicPlayers}
        </div>
      </main>
    </div>
  )
}

export default Home
