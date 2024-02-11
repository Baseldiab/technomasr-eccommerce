// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";

const slides = [
  {
    id: 0,
    header: "New Collections",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 1,
    header: "Best Selling",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    header: "New Arrival",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];

export default function Header() {
  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        speed={600}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="md:!h-[70vh] !h-[80vh]"
              style={{
                // height: "70vh",
                backgroundImage: "url(../../../../public/images/header-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute left-[7%] top-1/2 transform -translate-y-1/2">
                <h1
                  className="subtitle font-bold text-2xl text-white my-1"
                  data-swiper-parallax="-200"
                >
                  {item.header}
                </h1>
                <div className="text-xl  max-w-[400px]  leading-[1.3] " data-swiper-parallax="-100">
                  <p className="text-white">{item.text}</p>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
