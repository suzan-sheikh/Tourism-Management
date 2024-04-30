import Hero from "../components/Hero/Hero";
import NatureVid from "../assets/video/main.mp4";
import Testimonial from "../components/Testimonial/Testimonial";
import Banner from "../components/Banner/Banner";
import BannerPic from "../components/BannerPic/BannerPic";
import Slider from "../components/Slider/Slider";
import MyPlace from "../components/MyAddPlace/MyPlace";
import Country from "../components/Country/Country";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <div>

        <Helmet>
          <meta charSet="utf-8" />
          <title>Home</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>

        <div className="h-[700px] relative">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={NatureVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <div>
          <Slider />
        </div>

        <MyPlace />
        <Country />
        <BannerPic />
        <Banner />
        <Testimonial />
      </div>
    </>
  );
};

export default Home;
