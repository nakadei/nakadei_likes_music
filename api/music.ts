import axios from 'axios'
import { ItunesStoreMusic } from '../types/itunesStore'


// NOTE: cors の関係で使わなくなった
export async function getMusic(trackId: string): Promise<ItunesStoreMusic> {
  const url = `https://itunes.apple.com/lookup?id=${trackId}&country=JP`
  // NOTE: 古いURLっぽい
  //const url = `http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsLookup?id=${trackId}&country=JP`
  return axios.get(url).then(res => {
    console.log('[API] getMusic: ', res.data.results[0])
    // results は unique id で検索しても必ず array で帰ってくるのでこうしてる
    return res.data.results[0]
  })
}
