
import PlaceCard from './MyPlaceCard';
import { Typewriter } from 'react-simple-typewriter';
import useAuth from '../../Hooks/useAuth';
import { useEffect, useState } from 'react';

const MyPlace = () => {
  const { user } = useAuth() || {};
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      fetch(`https://server-gold-five.vercel.app/mySpot/${user.email}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error('Failed to fetch');
          }
          return res.json();
        })
        .then((data) => {
          setItems(data);
          setError(null);
        })
        .catch((error) => {
          setError(error.message);
          setItems([]);
        });
    }
  }, [user]);

  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Typewriter animation done!`);
  };

  return (
    <div className="py-10">
      <section data-aos="fade-up" className="container mt-24">
        <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-3xl font-bold">
          You Added on 
          <span className='ml-2' style={{ color: 'red', fontWeight: 'bold' }}> 
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

        {error && <p>Error: {error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((spot) => (
            <PlaceCard key={spot._id} spot={spot} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyPlace;
