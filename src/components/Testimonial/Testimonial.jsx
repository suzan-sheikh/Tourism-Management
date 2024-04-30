import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Md Suzan Sheikh",
    text: "Everything is good……but agent said will give mount view hotels but thats not provided",
    img: "https://avatars.githubusercontent.com/u/142421683?v=4",
  },
  {
    id: 1,
    name: "Skeikh Sumon",
    text: "My experience with Pearl Andaman tours and travels was absolutely fantastic! Although",
    img: "https://www.sukhothai.in/wp-content/uploads/2016/07/male-passport-size-2.jpg",
  },
  {
    id: 1,
    name: "John Doe",
    text: "First the good things: 1. Customized trip planning by Lalith - all questions answered.",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwH384rT3f4l8ORlGXFZVVy-UEbk4LpqBNhQuyFlQVzQ&s",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-4 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-md text-gray-400 mt-2">
              Really thank you for sharing your feedback with us It means a lot
              to hear your support for our efforts.
            </p>
          </div>
          {/* testimonial section */}
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[800px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map(({ id, name, text, img }) => {
                return (
                  <div key={id} className="my-6">
                    <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl relative">
                      <div className="w-14 h-14">
                        <img
                          src={img}
                          alt=""
                          className="rounded-full block mx-auto w-14 h-14"
                        />
                      </div>

                      <h1 className="text-xl font-bold">{name}</h1>
                      <p className="text-gray-500 text-sm">{text}</p>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
