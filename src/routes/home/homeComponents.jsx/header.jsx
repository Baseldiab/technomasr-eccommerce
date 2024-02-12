// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Parallax, Pagination, Navigation } from "swiper/modules";
import PrimaryButton from "../../../components/buttons/primaryButton";
import { useEffect, useState } from "react";

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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Assuming sm is 768px
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        navigation={!isMobile}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              className="md:!h-[80vh] !h-[80vh]"
              style={{
                // height: "70vh",
                backgroundImage: "url(/images/header-1.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute left-[7%] top-1/2 transform -translate-y-1/2">
                <h1
                  className="font-sans subtitle font-bold sm:text-2xl text-xl text-white m-0 p-0"
                  data-swiper-parallax="-200"
                >
                  {item.header}
                </h1>
                <div
                  className="sm:text-xl text-lg  max-w-[400px]  leading-[1.3]  my-3"
                  data-swiper-parallax="-100"
                >
                  <p className="font-sans text-white m-0">{item.text}</p>
                </div>
                <div>
                  <PrimaryButton text={"Shop Now"} />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
