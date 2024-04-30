import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FcOvertime } from "react-icons/fc";
import { FaChildren } from "react-icons/fa";
import Loader from "../../pages/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import { Typewriter } from "react-simple-typewriter";

const Places = () => {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortOption, setSortOption] = useState("name"); // Default sort option

  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Typewriter animation done!`);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });

    fetch("https://server-gold-five.vercel.app/spot")
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  // Sorting logic
  const sortedItems = [...item].sort((a, b) => {
    if (sortOption === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortOption === "time") {
      return a.time.localeCompare(b.time);
    } else if (sortOption === "totalVisitor") {
      return a.totalVisitor - b.totalVisitor;
    } else if (sortOption === "cost") {
      return a.cost - b.cost;
    }
    return 0;
  });

  return (
    <div className="py-10">
      <section data-aos="fade-up" className="container mt-24">
        <div className="flex justify-between mb-4">
          <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-3xl font-bold">
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
          <div>
            <select
              value={sortOption}
              onChange={handleSortChange}
              className="p-2 border rounded-md"
            >
              <option value="name">Sort by Name</option>
              <option value="time">Sort by Time</option>
              <option value="totalVisitor">Sort by Total Visitors</option>
              <option value="cost">Sort by Cost</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sortedItems.map((spot) => (
            
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
                    <p className="line-clamp-2 text-md">{spot.time}</p>
                  </div>
                </div>
                <div className="">
                  <div className="flex items-center gap-2 opacity-70">
                    <FaChildren className="text-md" />
                    <span className="text-md">{spot.totalVisitor}</span>
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
