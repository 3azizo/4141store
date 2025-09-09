
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';

import "../assets/styles/TripleSlider.css"
const images = [
  'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/484442742_122289294380008706_5043256013686993329_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BxcNFY5uaXIQ7kNvwHCjvaY&_nc_oc=AdmkDi9iNCNHpHJxqeuNYGBi7RvAzdMgfYEvkTzkq-EFdXmHwOowHRMZ8kWmj68e4n4&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=SJ8wPtJXlH-Lxea7O0en8Q&oh=00_AfZgJYLFFkhkmkypX0BXh0oMpkSDi1HqOSrKbjnr2yt_GA&oe=68C2D8F6',
  'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/484442742_122289294380008706_5043256013686993329_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BxcNFY5uaXIQ7kNvwHCjvaY&_nc_oc=AdmkDi9iNCNHpHJxqeuNYGBi7RvAzdMgfYEvkTzkq-EFdXmHwOowHRMZ8kWmj68e4n4&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=SJ8wPtJXlH-Lxea7O0en8Q&oh=00_AfZgJYLFFkhkmkypX0BXh0oMpkSDi1HqOSrKbjnr2yt_GA&oe=68C2D8F6',
  'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/484442742_122289294380008706_5043256013686993329_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BxcNFY5uaXIQ7kNvwHCjvaY&_nc_oc=AdmkDi9iNCNHpHJxqeuNYGBi7RvAzdMgfYEvkTzkq-EFdXmHwOowHRMZ8kWmj68e4n4&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=SJ8wPtJXlH-Lxea7O0en8Q&oh=00_AfZgJYLFFkhkmkypX0BXh0oMpkSDi1HqOSrKbjnr2yt_GA&oe=68C2D8F6',
  'https://scontent.fcai19-3.fna.fbcdn.net/v/t39.30808-6/484442742_122289294380008706_5043256013686993329_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BxcNFY5uaXIQ7kNvwHCjvaY&_nc_oc=AdmkDi9iNCNHpHJxqeuNYGBi7RvAzdMgfYEvkTzkq-EFdXmHwOowHRMZ8kWmj68e4n4&_nc_zt=23&_nc_ht=scontent.fcai19-3.fna&_nc_gid=SJ8wPtJXlH-Lxea7O0en8Q&oh=00_AfZgJYLFFkhkmkypX0BXh0oMpkSDi1HqOSrKbjnr2yt_GA&oe=68C2D8F6',
];


const TripleSlider = () => {
  return (
    <div className="hero-slider">
      <Swiper
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        {images.map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <img src={imgSrc} alt={`slide-${index}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default TripleSlider;
