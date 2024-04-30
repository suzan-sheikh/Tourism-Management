import { Typewriter } from "react-simple-typewriter";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";

const Selected = () => {
  const handleType = () => {
  };

  const handleDone = () => {
  };

  const { name } = useParams();

  const [data, setData] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    fetch(`https://server-gold-five.vercel.app/allCountry/${name}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [name]);

  return (
    <>
      <div className="py-10">
        <section data-aos="fade-up" className="container mt-24 ">
          <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-3xl font-bold">
            Popular Country
            <span className="ml-2" style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Bangladesh",
                  "Thailand",
                  "Indonesia",
                  "Vietnam",
                  "Malaysia!",
                ]}
                loop={10}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onLoopDone={handleDone}
                onType={handleType}
              />
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((item) => (
              <div key={item._id}>
                <div className="shadow-2xl transition-all duration-500 hover:shadow-xl cursor-pointer rounded-xl border-2">
                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={item.image_url}
                      alt="No image"
                      className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-xl"
                    />
                  </div>

                  <div className="space-y-2 p-3">
                    <h1 className="line-clamp-1 font-bold text-3xl text-center text-black">
                      {item.name}
                    </h1>
                    <div className="">
                      <div className="flex items-center justify-center gap-1">
                        <p className="text-red-600 font-bold">Country: </p>
                        <p className="line-clamp-2 text-md">{item.country}</p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center justify-center gap-1">
                        <p className="text-red-600 font-bold">Season: </p>
                        <p className="line-clamp-2 text-md">
                          {item.seasonality}
                        </p>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center justify-center gap-2 opacity-70">
                        <CiLocationOn className="text-sm text-red-600" />
                        <span className="text-md">{item.location}</span>
                      </div>
                    </div>
                    <div className="">
                      <div className="flex items-center justify-center gap-2 opacity-70">
                        <p>$ </p>
                        <span className="text-md">{item.cost}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                      <div className="opacity-70">
                        <p className="text-center">{item.description}</p>
                      </div>
                    </div>

                    <div>
                      <NavLink
                        to={`/countryName/${item._id}`}
                        className="btn btn-sm btn-neutral bg-primary px-8 w-full hover:bg-[#33908a] border-none"
                      >
                        View Details
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Selected;
