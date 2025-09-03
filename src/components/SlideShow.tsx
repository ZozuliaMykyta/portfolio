import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MainSlide from "./slides/MainSlide";
import SkillsSlide from "./slides/SkillsSlide";

const SlideShow: React.FC = () => {
  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={true}
      style={{ width: "100vw", height: "100vh" }}
    >
      <SwiperSlide className="main-slide">
        <MainSlide />
      </SwiperSlide>
      <SwiperSlide className="main-slide">
        <SkillsSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideShow;
