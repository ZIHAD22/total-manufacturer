import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";
import ReviewItem from "./ReviewItem";

const Review = () => {
  return (
    <div className="mt-20">
      <h1 className="text-4xl text-gray-600 my-2 text-center font-sans">
        What our clients are saying
      </h1>
      <Swiper
        breakpoints={{
          // when window width is >= 640px
          640: {
            width: 640,
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 1,
          },
        }}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ReviewItem></ReviewItem>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem></ReviewItem>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem></ReviewItem>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem></ReviewItem>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem></ReviewItem>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem></ReviewItem>
        </SwiperSlide>
        <SwiperSlide>
          <ReviewItem></ReviewItem>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
