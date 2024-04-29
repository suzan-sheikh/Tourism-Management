import PlaceCard from './PlaceCard';
import { Typewriter } from 'react-simple-typewriter';
import { useEffect, useState } from 'react';

const Places = () => {

  const [item, setItem] = useState([]);
  
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  useEffect(() => {
    fetch(`https://server-gold-five.vercel.app/spot`)
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, []);

  console.log(item);



  return (
    <>
      <div className="py-10">
        <section data-aos="fade-up" className="container mt-24 ">
          
          <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-3xl font-bold">
            You Add Tourist Spots
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Bangladesh', 'Thailand', 'Indonesia', 'Vietnam', 'Malaysia!']}
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
            {item.map((spot) => (
              <PlaceCard key={spot._id} spot={spot} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
