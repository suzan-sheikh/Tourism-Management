import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Lottie from "lottie-react";

import Logo from "../assets/logoLocation.json"

const Details = () => {
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
    fetch(`http://localhost:4000/singleProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, [id]);

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
  } = product;

  return (
    <div>
      <div className="container mt-28 mx-auto flex items-center justify-center">
        <div className="w-3/4">
          <div className="h-96 w-full">
            <img
              src={imgURL}
              alt="img"
              className="h-full w-full"
            />
          </div>

          <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-3xl font-bold">
            {name}
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

          <div className="mt-4 md:mt-8 mb-4 md:mb-8 text-justify">
            <p>
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

          <div className="flex gap-4 mx-auto justify-center items-center">
            <div>
                <div className="flex flex-col items-center justify-center">
                <Lottie className="w-14" animationData={Logo} loop={true} />
                <p>{location}</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center">
                <Lottie className="w-14" animationData={Logo} loop={true} />
                <p>{location}</p>
                </div>
            </div>
            <div>
                <div className="flex flex-col items-center justify-center">
                <Lottie className="w-14" animationData={Logo} loop={true} />
                <p>{location}</p>
                </div>
            </div>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Details;
