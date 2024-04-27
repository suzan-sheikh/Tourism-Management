import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 900,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);




  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className=" bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10 text-white">
        <div className="container grid grid-cols-1 gap-4">
          <div className="text-white">
            <p data-aos="fade-up" className="text-md">
              Our Packages
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="space-y-4 rounded-md p-4 relative bg-[#ffffff48]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-3">
              <div>
                <label htmlFor="destination" className="text-xl">
                  Searh your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Bangladesh"
                  className="w-full my-2 accent-primary focus:outline-primary focus:outline outline-2 rounded-full p-2 pl-6 text-primary font-bold"
                />
              </div>
              <div>
                <label htmlFor="destination" className="text-xl">
                  Date
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  className="w-full my-2 rounded-full focus:outline-primary focus:outline outline-1 text-primary p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70 block">
                  <div className="w-full flex justify-between items-center">
                    <p>Max Price</p>
                    <p className="font-bold text-xl">$ {priceValue}</p>
                  </div>
                </label>
                <div className="rounded-full p-2 flex items-center justify-center ">
                  <input
                    type="range"
                    name="destination"
                    id="destination"
                    className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2">
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
