import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "animate.css";


const Country = () => {
  const handleType = () => {
  };

  const handleDone = () => {
  };
  const [item, setItem] = useState([]);


  useEffect(() => {
    AOS.init({ duration: 1000 });
    fetch("https://server-gold-five.vercel.app/country")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  return (
    <>
      <div className="py-10">
        <section data-aos="flip-left" className="container mt-24 ">
          <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-3xl font-bold">
            <span style={{ color: "red", fontWeight: "bold" }}>
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
            {item.map((data) => (
              <div key={data._id}>
                <NavLink to={`/country/${data.country}`}>
                  <div className="shadow-2xl transition-all duration-500 hover:shadow-xl cursor-pointer rounded-xl">
                    <div className="overflow-hidden rounded-xl">
                      <img
                        src={data.imgURL}
                        alt="No image"
                        className="mx-auto h-[200px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2 p-3">
                      <h1 className="line-clamp-1 font-bold text-md text-black">
                        {data.country}
                      </h1>
                      <p className="text-justify text-sm">{data.description}</p>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Country;
