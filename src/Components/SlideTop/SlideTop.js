import { GrNext, GrPrevious } from "react-icons/gr"
import { Controller, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './SlideTop.css'

function SlideTop() {
  return (
    <section className="slidetop relative">
      <div className="relative group">
        <button className="swiper-button-next-slidetop duration-300 text-white opacity-0 group-hover:opacity-100 cursor-pointer absolute right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 medium:w-14 medium:h-14 rounded-lg bg-[#00000050] border border-white flex items-center justify-center">
          <GrNext className="text-2xl medium:text-3xl" />
        </button>
        <button className="swiper-button-prev-slidetop duration-300 text-white opacity-0 group-hover:opacity-100 cursor-pointer absolute left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 medium:w-14 medium:h-14 rounded-lg bg-[#00000050] border border-white flex items-center justify-center">
          <GrPrevious className="text-2xl medium:text-3xl" />
        </button>
        <Swiper
          style={{height: '36vw'}}
          modules={[Navigation, Pagination, Controller]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-slidetop",
            prevEl: ".swiper-button-prev-slidetop",
          }}
          loop={true}
          pagination={false}
          className="swiper-slidetop"
          slideToClickedSlide
          // breakpoints={{
          //   // when window width is >= 320px
          //   320: {
          //     slidesPerView: 1,
          //   },
          //   // when window width is >= 640px
          //   640: {
          //     slidesPerView: 1,
          //   },
          //   // when window width is >= 1024px
          //   1024: {
          //     slidesPerView: 1,
          //   },
          //   // when window width is >= 1440px
          //   1440: {
          //     slidesPerView: 1,
          //   },
          // }}
        >
          <SwiperSlide>
            <article className="w-full">
              <a href="#" title="title" className="block">
                <figure className="leading-[0px] relative pt-[52.15%] medium:pt-[38.15%] overflow-hidden">
                  <span className="w-full h-full absolute top-0 left-0">
                    <img
                      alt="title"
                      src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/logo/2021/10/27/dreamstime_m_176777046.png"
                      className="w-full"
                    />
                  </span>
                </figure>
              </a>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="w-full">
              <a href="#" title="title" className="block">
                <figure className="leading-[0px] relative pt-[52.15%] medium:pt-[38.15%] overflow-hidden">
                  <span className="w-full h-full absolute top-0 left-0">
                    <img
                      alt="title"
                      src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/logo/2021/10/27/dreamstime_l_29809930.jpg"
                      className="w-full"
                    />
                  </span>
                </figure>
              </a>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="w-full">
              <a href="#" title="title" className="block">
                <figure className="leading-[0px] relative pt-[52.15%] medium:pt-[38.15%] overflow-hidden">
                  <span className="w-full h-full absolute top-0 left-0">
                    <img
                      alt="title"
                      src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/logo/2021/10/27/dreamstime_l_8511710.jpg"
                      className="w-full"
                    />
                  </span>
                </figure>
              </a>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            <article className="w-full">
              <a href="#" title="title" className="block">
                <figure className="leading-[0px] relative pt-[52.15%] medium:pt-[38.15%] overflow-hidden">
                  <span className="w-full h-full absolute top-0 left-0">
                    <img
                      alt="title"
                      src="https://hottipsnailsandspa.ca/uploads/fnail07ri1nsb/logo/2021/10/27/dreamstime_s_71844158.png"
                      className="w-full"
                    />
                  </span>
                </figure>
              </a>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};
export default SlideTop;