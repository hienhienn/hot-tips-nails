import { GrNext, GrPrevious } from "react-icons/gr";
import { Controller, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Slide from "./Slide";

function SlideMulti({ data }) {
  return (
    <section className="slidetop relative">
      <div className="relative group">
        <button className="large:hidden swiper-button-next-slidetop duration-300 text-white opacity-0 group-hover:opacity-100 cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 medium:w-14 medium:h-14 rounded-lg bg-[#00000050] border border-white flex items-center justify-center">
          <GrNext className="text-2xl medium:text-3xl" />
        </button>
        <button className="large:hidden swiper-button-prev-slidetop duration-300 text-white opacity-0 group-hover:opacity-100 cursor-pointer absolute left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 medium:w-14 medium:h-14 rounded-lg bg-[#00000050] border border-white flex items-center justify-center">
          <GrPrevious className="text-2xl medium:text-3xl" />
        </button>
        <Swiper
          //   style={{height: '36vw'}}
          modules={[Navigation, Pagination, Controller]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-slidetop",
            prevEl: ".swiper-button-prev-slidetop",
          }}
          loop={true}
          pagination={false}
          className="swiper-slidetop"
          slideToClickedSlide
          breakpoints={{
            // when window width is >= 320px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            990: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            },
            // // when window width is >= 1440px
            // 1440: {
            //   slidesPerView: 1,
            // },
          }}
        >
          {data.map((ele, index) => (
            <SwiperSlide key={index}>
              <Slide data={ele} />
            </SwiperSlide>
          ))}
          <SwiperSlide>
            <div className="item">
              <img
                src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/product/dreamstime_s_169440119.jpg"
                alt="manicure"
              />
              <div className="title-text info">Manicure</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/product/dreamstime_xl_70500411.jpg"
                alt="waxing"
              />
              <div className="title-text info">Waxing</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/product/dreamstime_l_91950042.jpg"
                alt="nails"
              />
              <div className="title-text info">Acrylic-gel nails</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="item">
              <img
                src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/product/dreamstime_s_44756234.jpg"
                alt="predicure"
              />
              <div className="title-text info">Pedicure</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
export default SlideMulti;
