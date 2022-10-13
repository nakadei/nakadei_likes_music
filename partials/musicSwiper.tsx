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
    <Swiper
      slidesPerView={3}
      direction={'horizontal'}
      pagination={{
        clickable: true,
        type: 'bullets',
      }}
      navigation
      loop={true}
      spaceBetween={30}
      modules={[EffectCoverflow]}
      effect={'coverflow'}
      centeredSlides={true}
      // breakpoints={{
      //   400: {
      //     slidesPerView: 3,
      //     direction: 'horizontal',
      //   }
      // }}
    >
      {
        musics.map((music) => {
          return (
            <SwiperSlide key={music.trackId}>
              <MusicPlayer music={music} />
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}

export default MusicSwiper
