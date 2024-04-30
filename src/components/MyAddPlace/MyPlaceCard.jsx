import { FcOvertime } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { FaChildren } from "react-icons/fa6";
import PropTypes from 'prop-types'; 
import { TiWeatherPartlySunny } from "react-icons/ti";

const MyPlaceCard = ({spot}) => {

  const {
    _id,
    name,
    cost,
    seasonality,
    time,
    totalVisitor,
    imgURL,
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
          <h1 className="line-clamp-1 font-bold text-md text-black">{name}</h1>
          <div className="">
            <div className="flex items-center justify-start gap-1">
            <FcOvertime className="text-md" />
            <p className="line-clamp-2 text-md">{time}</p>          
            </div>
          </div>
          <div className="">
            <div className="flex items-center gap-2 opacity-70">
            <FaChildren className="text-md" /> 
              <span className="text-md">{totalVisitor}</span>
            </div>
          </div>

          <div className="flex items-center justify-between border-t-2 py-3 !mt-3">
            <div className="opacity-70 flex gap-1 items-center">
            <TiWeatherPartlySunny />
              <p>{seasonality}</p>
            </div>
            <div>
              <p className="text-md font-black text-xl">${cost}</p>
            </div>
          </div>

          <div>
          <NavLink
            to={`/spot/${_id}`}
            className="btn btn-sm btn-neutral px-8 w-full hover:bg-[#33908a] border-none"
          >
            View Details
          </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

MyPlaceCard.propTypes = {
  spot: PropTypes.object.isRequired
}
export default MyPlaceCard;
