import { FcOvertime } from "react-icons/fc";
import { FaChildren } from "react-icons/fa6";
import Loader from "../../pages/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Helmet } from "react-helmet";

const Places = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState([]);

  const handleType = () => {};

  const handleDone = () => {};

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    fetch("https://server-gold-five.vercel.app/spot")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, []);

  const sortAllPlace = (field) => {
    const sortedPlace = [...item].sort((a, b) => {
      if (a[field] < b[field]) return 1;
      if (a[field] > b[field]) return -1;
      return 0;
    });
    setItem(sortedPlace);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    sortAllPlace(e.target.value);
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="py-10">
      <Helmet>
        <meta charSet="utf-8" />
        <title>All Place</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <section data-aos="fade-up" className="container mt-24">
        <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-xl font-bold">
          You Add Tourist Spots{" "}
          <span style={{ color: "red", fontWeight: "bold" }}>
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

        <div className="flex justify-center items-center mb-4">
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="bg-base-200 hover:bg-base-400 text-xl select select-bordered "
          >
            <option value="id">Select Your Choice</option>
            <option value="cost">cost</option>
            <option value="totalVisitor">Total Visitor</option>
            <option value="time">Travel Days</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {item.map((spot) => (
            <div
              key={spot.id_id}
              className="shadow-2xl transition-all duration-500 hover:shadow-xl cursor-pointer rounded-xl"
            >
              <div className="overflow-hidden rounded-xl">
                <img
                  src={spot.imgURL}
                  alt="No image"
                  className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-xl"
                />
              </div>

              <div className="space-y-2 p-3">
                <h1 className="line-clamp-1 font-bold text-md text-black">
                  {spot.name}
                </h1>
                <div className="">
                  <div className="flex items-center justify-start gap-1">
                    <FcOvertime className="text-md" />
                    <span className="text-red-500 font-black">{spot.time}</span>
                    <p className="line-clamp-2 text-md">Days</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-2 opacity-70">
                    <FaChildren className="text-md" />
                    <p>Visitor Per Yer - </p>
                    <span className="text-md text-red-500 font-black">
                      {spot.totalVisitor}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
                  <div className="opacity-70">
                    <p>{spot.seasonality}</p>
                  </div>
                  <div>
                    <p className="text-md font-black text-xl">${spot.cost}</p>
                  </div>
                </div>

                <div>
                  <NavLink
                    to={`/spot/${spot._id}`}
                    className="btn btn-sm btn-neutral px-8 w-full hover:bg-[#33908a] border-none"
                  >
                    View Details
                  </NavLink>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Places;
