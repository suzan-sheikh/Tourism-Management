import PlaceCard from "./PlaceCard";
import FetchData from "../../Hooks/FetchData";
import Loader from "../../pages/Loader";


const Places = () => {

  const [data, loading] = FetchData();

  if (loading) {
    return <Loader />;
  }

  console.log(data);

  return (
    <>
      <div className="py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Tourists Spots Section
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((spot) => (<PlaceCard key={spot._id} spot={spot}/>))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Places;
