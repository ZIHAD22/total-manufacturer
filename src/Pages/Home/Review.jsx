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
import { useQuery } from "react-query";
import axios from "../../utility/axios";
import Spinner from "../Shared/Spinner";

const Review = () => {
  const { data: reviewsData, isLoading } = useQuery("reviewsData", async () => {
    const { data } = await axios.get("reviews");
    console.log(data);
    return data;
  });

  if (isLoading) {
    return <Spinner />;
  }
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
        {reviewsData.map((review) => (
          <SwiperSlide>
            <ReviewItem review={review}></ReviewItem>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
