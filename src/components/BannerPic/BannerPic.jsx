import AOS from "aos";
import "animate.css";
import { useEffect } from "react";

const BannerPic = () => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div data-aos="zoom-in"
      className="h-[400px] w-full  bg-[url('https://allmyne.com/wp-content/uploads/2024/04/mustsee2feat.webp')] bg-cover bg-center"
    ></div>
  );
};

export default BannerPic;
