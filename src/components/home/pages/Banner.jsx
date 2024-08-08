import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import jwellery from "../../../assets/jwellery.png";
import JW from "../../../assets/JW.png";
import skincare from "../../../assets/skincare.png";

const Banner = () => {
  return (
    <div className="mt-0 border border-white text-white">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[36rem] object-cover"
              src={JW}
              alt="Jewelry Collection"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-black">
                  Elegant Jewelry
                </h3>
                <p className="text-md md:text-lg text-black">
                  Discover our exquisite collection of fine jewelry.
                </p>
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[36rem] object-cover"
              src={skincare}
              alt="Luxury Skincare"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-black">
                  Luxury Skincare
                </h3>
                <p className="text-md md:text-lg text-black">
                  Pamper yourself with our premium skincare products.
                </p>
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-96 md:h-[36rem] object-cover"
              src={jwellery}
              alt="Gourmet Foods"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <h3 className="text-4xl md:text-5xl font-bold"> Elegant Jewelry</h3>
                <p className="text-md md:text-lg">
                Discover our exquisite collection of fine jewelry.
                </p>
                <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
