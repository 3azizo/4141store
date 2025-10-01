
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import image1 from "../assets/6428.jpg"

import image2 from "../assets/14632.jpg"

import image3 from "../assets/2151059725.jpg"



import "../assets/styles/TripleSlider.css"
const images = [
  image1,image2,image3

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
