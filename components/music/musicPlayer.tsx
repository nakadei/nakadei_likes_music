import { replaceArtworkQualityUrl } from "../../helpers/itunes"
import { ItunesStoreMusic } from "../../types"

type Props = {
  music: ItunesStoreMusic
}

// TODO: Howler.js みたいなものを使って audio tag をやめる
export const MusicPlayer: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col w-[300px] h-full shadow-xl">
      <div className="flex flex-col pt-1 pb-2 bg-gray-800">
        <div className="flex justify-left pl-4 text-white text-lg font-bold underline">
          <a target="_blank" rel="noopener noreferrer" href={props.music.trackViewUrl}>{props.music.trackName}</a>
        </div>
        <div className="flex justify-left pl-4 text-white text-xs underline">
          <a target="_blank" rel="noopener noreferrer" href={props.music.artistViewUrl}>{props.music.artistName}</a>
        </div>
      </div>
      <div className="flex justify-center">
        <picture>
          <source srcSet={replaceArtworkQualityUrl(props.music.artworkUrl100)} type="image/webp" />
          <img className="w-[300px]"
            src={replaceArtworkQualityUrl(props.music.artworkUrl100)}
            alt={props.music.trackName}
          ></img>
        </picture>
      </div>
      <audio controls src={props.music.previewUrl} className="w-[300px] bg-gray-100"></audio>
    </div>
  )
}