import PlaceCard from './PlaceCard';
import FetchData from '../../Hooks/FetchData';
import Loader from '../../pages/Loader';
import { Typewriter } from 'react-simple-typewriter';

const Places = () => {
  
  const handleType = (count) => {
    // access word count number
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  const [data, loading] = FetchData();

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <div className="py-10">
        <section data-aos="fade-up" className="container ">
          
          <h1 className="my-8 border-l-8 border-red-500 py-2 pl-2 text-3xl font-bold">
            Life is simple{' '}
            <span style={{ color: 'red', fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['Bangladesh', 'Thailand', 'Indonesia', 'Vietnam', 'Malaysia!']}
                loop={5}
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
            {data.map((spot) => (
              <PlaceCard key={spot._id} spot={spot} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
