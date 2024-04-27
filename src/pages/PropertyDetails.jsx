import { useLoaderData, useParams } from "react-router-dom";
import { FcHome } from "react-icons/fc";

import { Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import AOS from "aos";

const PropertyDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const property = useLoaderData();

  const { id } = useParams();
  const idInt = parseInt(id);
  const asset = property.find((asset) => asset.id === idInt);
  
  const {
    segmentName,
    title,
    description,
    price,
    facilities,
    location,
    status,
    area,
    image,
    image2,
  } = asset;

  return (
    <div>
      <div className="container px-8 lg:px-16 mx-auto rounded-2xl">
        <div className="p-6 text-center">
          <h3 className="text-2xl font-semibold sm:text-4xl">
            Army Welfare <span className="text-[#33908a]">Trust Ltd</span>
          </h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-between gap-6">
          <div
            data-aos="flip-right"
            className="md:w-2/4 w-full md:min-h-96 rounded-xl"
          >
            <Swiper
              modules={[Pagination, Scrollbar, A11y, Autoplay]}
              spaceBetween={0}
              slidesPerView={1}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src={image} className="h-72 w-full rounded-xl" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={image2} className="h-72 w-full rounded-xl" />
              </SwiperSlide>
            </Swiper>
          </div>

          <div
            data-aos="fade-down-left"
            className="md:w-2/4 w-full text-white cursor-pointer"
          >
            <div className="space-y-1 p-4 rounded-2xl transition-all hover:bg-[url('https://images.unsplash.com/photo-1579546929662-711aa81148cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-[url('https://images.unsplash.com/photo-1557683311-eac922347aa1?q=80&w=829&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
              <div className="flex gap-2 items-center text-sm">
                <FcHome className="text-xl text-green-600" />
                <h3 className="text-2xl font-bold">{segmentName}</h3>
              </div>

              <div className="flex gap-2 items-center text-sm">
                <span className="bg-green-600 w-3 h-3 rounded-xl"></span>
                <h3 className="text-left text-xl">{title}</h3>
              </div>

              <hr />

              <h3 className="text-xl font-black text-justify text-red-600">
                <span>$</span>
                {price}
              </h3>

              <hr />

              <div className="flex flex-col md:flex-row gap-2 mt-4">
                <h2 className="border-l-4 border-red-600 font-bold pl-2">
                  Facilities:{" "}
                </h2>
                {facilities.map((tag, index) => (
                  <span key={index}> {tag},</span>
                ))}
              </div>

              <hr />

              <div className="flex gap-5">
                <div>
                  <h3 className="text-md font-bold ">status: </h3>
                  <h3 className="text-md font-bold flex items-center">
                    {" "}
                    Location:{" "}
                  </h3>
                  <h3 className="text-md font-bold">Area: </h3>
                </div>
                <div>
                  <h3 className="text-md font-bold">{status}</h3>
                  <h3 className="text-md font-bold">{location}</h3>
                  <h3 className="text-md font-bold">{area}</h3>
                </div>
              </div>

              <p className="text-md text-justify">
                <span className="font-bold"></span>
                {description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
