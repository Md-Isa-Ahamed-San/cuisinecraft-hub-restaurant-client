import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import slide1 from "../../../../assets/home/slide1.jpg";
import slide2 from "../../../../assets/home/slide2.jpg";
import slide3 from "../../../../assets/home/slide3.jpg";
import slide4 from "../../../../assets/home/slide4.jpg";
import slide5 from "../../../../assets/home/slide1.jpg";
import "./Category.css";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import SectionIntro from "../../../common/SectionIntro";
import { Link, NavLink } from "react-router-dom";
const Category = () => {
  const breakpoints = {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2, // You can adjust this based on your needs
    },
    768: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 4,
    },
  };
  const heading = "---From 11:00am to 10:00pm---";
  const text = ["ORDER ONLINE"];
  return (
    <div>
      <SectionIntro heading={heading} text={text}></SectionIntro>
      <Swiper
        breakpoints={breakpoints}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
        className="mySwiper max-w-7xl my-6 md:my-10 lg:my-20"
      >
        {[slide1, slide2, slide3, slide4, slide5].map((img, index) => {
          const titles = [{name:"SALAD",loc:"ourShop/salad"}, {name:"PIZZA",loc:"ourShop/pizza"}, {name:"SOUP",loc:"ourShop/soup"}, {name:"DESSERT",loc:"ourShop/dessert"}, {name:"SALAD",loc:"ourShop/salad"}];
          return (
            <SwiperSlide key={index}>
              <div className="relative">
                <img
                  src={img}
                  alt={titles[index]}
                  className="w-full h-[250px] md:h-[300px] lg:h-[350px] object-cover rounded-xl shadow-lg"
                />
                <NavLink to={`/${titles[index].loc}`} className="absolute py-3 bottom-4 left-1/2 transform -translate-x-1/2 text-xl md:text-3xl font-rancho font-bold text-center bg-gradient-to-r from-green-500 to-[#d6b704] text-transparent bg-clip-text hover:text-yellow-400">
                  {titles[index].name}
                </NavLink>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Category;
