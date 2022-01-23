import { Swiper, SwiperSlide } from "swiper/react";
import { Box } from "@chakra-ui/react";

// Import Swiper styles
import "swiper/css";

export default function Slider() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={6}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </Swiper>
  );
}

const Slide = () => {
  return (
    <Box
      bgSize="cover"
      bgPosition="center"
      width="100%"
      height="280px"
      bgImage="assets/img/MoviePoster.jpg"
    ></Box>
  );
};
