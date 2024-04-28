import { FcOvertime } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { FaChildren } from "react-icons/fa6";
import PropTypes from 'prop-types'; 

const PlaceCard = ({spot}) => {
  console.log(spot);

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
          <h1 className="line-clamp-1 text-center font-bold text-xl">{name}</h1>
          <div className="flex gap-4 justify-around items-center">
            <div className="flex items-center gap-2 opacity-70">
            <FaChildren className="text-2xl" /> 
              <span className="text-lg">{totalVisitor}</span>
            </div>
            <div className="flex items-center justify-start gap-1">
            <FcOvertime className="text-2xl" />
            <p className="line-clamp-2 text-lg">{time}</p>          
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
            to='/about'
            // to={`/spot/${_id}`}
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

PlaceCard.propTypes = {
  spot: PropTypes.object.isRequired
}
export default PlaceCard;
