import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";

const Banner = () => {
  return (
    <div className="z-0">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className="h-[600px] w-full object-cover"
            src="https://media.istockphoto.com/id/108313157/photo/india-farming.jpg?s=612x612&w=0&k=20&c=eIh5qLq3fmUIKfVVzg1GO-aU2cTXCH_6yjf16zMPEK8="
            alt="Banner 1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="h-[600px] w-full object-cover"
            src="https://media.istockphoto.com/id/1092520698/photo/indian-farmer-at-onion-field.jpg?s=612x612&w=0&k=20&c=gvu-DzA17EyVSNzvdf7L3R8q0iIvLapG15ktOimqXqU="
            alt="Banner 2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="h-[600px] w-full object-cover"
            src="https://images.pexels.com/photos/3560020/pexels-photo-3560020.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="Banner 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[600px] w-full object-cover"
            src="https://www.shutterstock.com/image-photo/outdoor-photo-bangladeshi-happy-paddy-600nw-2539826285.jpg"
            alt="Banner 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
