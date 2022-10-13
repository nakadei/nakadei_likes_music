import { ItunesStoreMusic } from '../types'
import { MusicPlayer } from '../components/music/musicPlayer'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Pagination, Navigation, EffectCoverflow } from 'swiper'

type Props = {
  musics: ItunesStoreMusic[]
}

SwiperCore.use([Pagination, Navigation]) 

export const MusicSwiper: React.FC<Props> = ({ musics }) => {
  return (
    <div className="flex flex-col">
      <Swiper
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        navigation
        loop={true}
        spaceBetween={50}
        modules={[EffectCoverflow]}
        effect={'coverflow'}
        centeredSlides={true}
        // breakpoints={{
        //   480: {
        //     width: 480,
        //     slidesPerView: 1,
        //     spaceBetween: 10,
        //   },
        // }}
      >
        {
          musics.map((music) => {
            return (
              <SwiperSlide key={music.trackId}>
                <MusicPlayer key={music.trackId} music={music} />
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}

export default MusicSwiper
