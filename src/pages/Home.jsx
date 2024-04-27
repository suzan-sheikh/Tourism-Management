import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import Places from "../components/Places/Places";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import Slider from "../components/Slider/Slider";

const Home = () => {
  return (
    <>
      <div>
        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4"/>
          </video>
          <Hero />
        </div>        
        <div>
          <Slider/>
        </div>

        <Places/>
        <BannerPic/>        
        <Banner />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
