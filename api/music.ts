import axios from 'axios'
import { ItunesStoreMusic } from '../types/itunesStore'

export function getMusic(wslId: string): Promise<ItunesStoreMusic> {
  return axios.get(`http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/wa/wsLookup?id=${wslId}&country=JP`).then(res => {
    console.log('[API] getMusic: ', res.data.results[0])
    // results は unique id で検索しても必ず array で帰ってくるのでこうしてる
    return res.data.results[0]
  })
}
