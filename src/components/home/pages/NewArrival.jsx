import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import b1 from "../../../assets/bannar/b1.png";
import b2 from "../../../assets/bannar/b2.png";
import b3 from "../../../assets/bannar/b3.png";

const NewArrival = () => {
  return (
    <div className="mt-0 border border-white text-white">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[40rem] md:h-[50rem] object-cover"
              src={b1}
              alt="Jewelry Collection"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-700">
                  Style in your own way
                </h3>
                <p className="text-lg md:text-lg text-blue-700">
                 Embrace the power of you with luxury and confidence
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
              className="w-full h-[40rem] md:h-[50rem] object-cover"
              src={b2}
              alt="Luxury Skincare"
            />
         
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img
              className="w-full h-[40rem] md:h-[50rem] object-cover"
              src={b3}
              alt="Gourmet Foods"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-end p-4">
                <h3 className="text-4xl md:text-5xl font-bold text-blue-700">
                  Free To Be
                </h3>
                <p className="text-md md:text-lg text-blue-700 text-center">
               Explore to be  Free with an incredible integrity
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

export default NewArrival;
