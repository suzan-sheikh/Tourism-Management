import { Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import AOS from "aos";
import "animate.css";

const Slider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <div data-aos="zoom-in" className="container mx-auto my-8">
        <div className="mb-6">
          <div></div>
        </div>

        <Swiper
          modules={[Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div>
              <div className="h-72 md:h-[450px] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1602528495711-f52bf3988a00?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover flex items-center justify-center">
                <div className="text-center p-5">
                  <h3 className="animate__animated animate__flash text-2xl font-semibold sm:text-4xl mb-4 text-center text-white">
                    Sajek <span className="text-[#33908a]">Valley</span>
                  </h3>
                  <p className="text-white">
                    The designation of Sajek Valley is derived from the Sajek
                    River, which originates from the Karnaphuli river.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="h-72 md:h-[450px] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover flex items-center justify-center">
                <div className="text-center p-5">
                  <h3 className="animate__animated animate__flash text-2xl font-semibold sm:text-4xl mb-4 text-center">
                    Cox's <span className="text-[#33908a]">Bazar</span>
                  </h3>
                  <p>
                    Cox's Bazar, Bangladesh, is the longest natural sea beach in
                    the world running 120 kilometres
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="h-72 md:h-[450px] w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1608958435020-e8a7109ba809?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover flex items-center justify-center">
                <div className="text-center p-5">
                  <h3 className="animate__animated animate__flash text-2xl font-semibold sm:text-4xl mb-4 text-center">
                    Saint Martin <span className="text-[#33908a]">Island</span>
                  </h3>
                  <p>
                    Millennia ago, the island used to be an extension of the
                    Teknaf peninsula
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
