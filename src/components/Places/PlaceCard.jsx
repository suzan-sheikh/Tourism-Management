import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { FaChildren } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";

const PlaceCard = ({spot}) => {
  console.log(spot);

  const {
    name,
    country,
    location,
    description,
    cost,
    seasonality,
    time,
    totalVisitor,
    email,
    userName,
    imgURL,
    userEmail
  } = spot;

  return (
    <>
      <div
        className="shadow-2xl transition-all duration-500 hover:shadow-xl cursor-pointer rounded-xl"
      >
        <div className="overflow-hidden rounded-xl">
          <img 
            src={imgURL}
            alt="No image"
            className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-xl"
          />
        </div>

        <div className="space-y-2 p-3">
          <h1 className="line-clamp-1 font-bold text-xl">{name}</h1>
          <div className="flex items-center gap-2 opacity-70">
            <IoLocationSharp />
            <span>{location}</span>
          </div>
          <p className="line-clamp-2">{description}</p>

          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70 flex gap-1 items-center justify-center">
              <FaChildren /> 
              <p>{totalVisitor}</p>
            </div>

            <div className="flex gap-1 items-center justify-center">
              <MdAccessTime /> 
              <p>  {time}</p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70">
              <p>{seasonality}</p>
            </div>
            <div>
              <p className="text-2xl font-bold">${cost}</p>
            </div>
          </div>

          <div>
          <NavLink
            to='/'
            className="btn btn-sm btn-neutral px-8 w-full hover:bg-[#33908a] border-none"
          >
            View Property
          </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
