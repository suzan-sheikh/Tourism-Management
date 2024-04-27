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
              <div className="h-72 md:h-[450px] w-full rounded-xl bg-[url('https://imgs.search.brave.com/qEBl336pc98PW3OISCS6gJGBp4z7Vg0AFqVSxVLxfJk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTg5/OTM4OC5qcGc')] bg-cover flex items-center justify-center">
                <div className="text-center p-5">
                  <h3 className="animate__animated animate__flash text-2xl font-semibold sm:text-4xl mb-4 text-center">
                    Army Welfare{" "}
                    <span className="text-[#33908a]">Trust-Tourism</span>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="h-72 md:h-[450px] w-full rounded-xl bg-[url('https://imgs.search.brave.com/qEBl336pc98PW3OISCS6gJGBp4z7Vg0AFqVSxVLxfJk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTg5/OTM4OC5qcGc')] bg-cover flex items-center justify-center">
                <div className="text-center p-5">
                  <h3 className="animate__animated animate__flash text-2xl font-semibold sm:text-4xl mb-4 text-center">
                    Army Welfare{" "}
                    <span className="text-[#33908a]">Trust-Tourism</span>
                  </h3>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <div className="h-72 md:h-[450px] w-full rounded-xl bg-[url('https://imgs.search.brave.com/qEBl336pc98PW3OISCS6gJGBp4z7Vg0AFqVSxVLxfJk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMTg5/OTM4OC5qcGc')] bg-cover flex items-center justify-center">
                <div className="text-center p-5">
                  <h3 className="animate__animated animate__flash text-2xl font-semibold sm:text-4xl mb-4 text-center">
                    Army Welfare{" "}
                    <span className="text-[#33908a]">Trust-Tourism</span>
                  </h3>
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
