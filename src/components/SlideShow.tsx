import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, EffectFade } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import MainSlide from "./slides/MainSlide";
import SkillsSlide from "./slides/SkillsSlide";
// import Earth from "./Earth";

const SlideShow: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Enter" && swiperRef.current) {
        event.preventDefault();
        swiperRef.current.slideNext();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Swiper
      direction="vertical"
      slidesPerView={1}
      mousewheel={{
        forceToAxis: true,
        sensitivity: 1,
        releaseOnEdges: true,
      }}
      modules={[Mousewheel, EffectFade]}
      style={{ width: "100vw", height: "100vh" }}
      allowTouchMove={false}
      simulateTouch={true}
      touchStartPreventDefault={true}
      // effect={"fade"}
      noSwiping={true}
      noSwipingClass="swiper-no-swiping"
      onSwiper={(swiper) => {
        swiperRef.current = swiper;
      }}
    >
      <SwiperSlide
        className="slide-structure"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('assets/img/main-background.png') 0 0 / cover no-repeat",
        }}
      >
        <MainSlide />
      </SwiperSlide>
      <SwiperSlide
        className="slide-structure"
        style={{
          background:
            "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('assets/img/skills-background.png') 0 0 / cover no-repeat",
        }}
      >
        <SkillsSlide />
      </SwiperSlide>
    </Swiper>
  );
};

export default SlideShow;
