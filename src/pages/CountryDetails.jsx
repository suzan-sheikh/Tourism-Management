import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";
import Logo from "../assets/logoLocation.json"
import { FiDollarSign } from "react-icons/fi";
import { TiWeatherPartlySunny } from "react-icons/ti";

const CountryDetails = () => {
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://server-gold-five.vercel.app/countryName/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

  const {
    spot_name,
    country,
    location,
    description,
    cost,
    seasonality,
    image_url
  } = product;

  return (
    <div>
      <div className="container mt-28 mx-auto flex items-center justify-center">
        <div className="w-3/4">
        <div className="overflow-hidden rounded-xl">
          <img 
            src={image_url}
            alt="No image"
            className="mx-auto h-[320px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110 rounded-xl"
          />
        </div>

          <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-3xl font-bold">
            {spot_name}
            <span className="ml-2" style={{ color: "red", fontWeight: "bold" }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={[
                  "Destination",
                  "locale",
                  "Wander",
                  "Journey's",
                  "Explore!",
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

            <div className="flex items-center justify-between">
            <div className="text-justify">
              <p className="text-red-500 font-black">{country}</p>
            </div>
            <div className="text-justify flex gap-2 items-center">
              <div className="flex items-center justify-center">
                <Lottie className="w-14" animationData={Logo} loop={true} />
                <p>{location}</p>
                </div>
            </div>
            <div className=" text-justify flex gap-2 items-center">
              <FiDollarSign />           
              <span className="text-red-500 font-black"> {cost}</span> 
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className=" text-justify flex gap-2 items-center">
            <TiWeatherPartlySunny />          
              <span className="text-red-500 font-black"> {seasonality}</span> 
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-justify">
              <p> Tourist Spot Name: <span className="text-red-500 font-black"> {spot_name}</span>              
              </p>
            </div>
          </div>

          
          <div className="mt-4 md:mt-8 mb-4 md:mb-8 text-justify">
            <p> <span className="text-red-500 font-black border-l-4 border-red-500 ml-4 pl-2">{description}: </span>
              Honestly, the room we stayed in was unlike any other place I have
              been before. The bungalow was largely open-view, which means we
              got to wake up to the incredible ocean view every morning. And,
              since the room is directly over-water, you can dip into the water
              straight from your balcony for a snorkel or swim. On top of that,
              the bungalow had spots where you could see the ocean floor
              underneath your feet! I particularly loved the glass-bottom
              bathtubs which provided the perfect point of relaxation as you
              watch the marine life below.
            </p>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
