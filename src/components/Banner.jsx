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
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover"
            src="https://png.pngtree.com/png-clipart/20210808/original/pngtree-personalized-smear-farm-organic-vegetable-web-banner-png-image_6621469.jpg"
            alt="Banner 1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover"
            src="https://cdn.vectorstock.com/i/500p/68/54/fresh-farm-produce-sale-banner-vector-55606854.jpg"
            alt="Banner 2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover"
            src="https://img.pikbest.com/origin/06/12/43/05bpIkbEsTmwN.jpg%21bw700"
            alt="Banner 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[400px] md:h-[500px] lg:h-[600px] w-full object-cover"
            src="https://s3.envato.com/files/134262889/17%20-%20Coming-Soon.jpg"
            alt="Banner 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
