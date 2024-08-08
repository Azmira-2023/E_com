import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import s1 from '../../../assets/shoes/s1.png';
import s2 from '../../../assets/shoes/s2.jpg';
import s3 from '../../../assets/shoes/s3.jpg';
import s4 from "../../../assets/shoes/s4.jpg";
import s5 from "../../../assets/shoes/s5.jpg";
import s6 from "../../../assets/shoes/s6.jpg";
import s7 from "../../../assets/shoes/s7.jpg";
import s8 from "../../../assets/shoes/s8.jpg";
import s9 from "../../../assets/shoes/s9.jpg";
import s10 from "../../../assets/shoes/s10.jpg";
import s11 from "../../../assets/shoes/s11.jpg";

const BigSale = () => {
  const sliderRef = useRef(null);
  const [autoplay, setAutoplay] = useState(true);

  const products = [
    { id: 1, image: s1, name: 'Running Shoes', price: '$100', offerPrice: '$80' },
    { id: 2, image: s2, name: 'Slippers', price: '$120', offerPrice: '$90' },
    { id: 3, image: s3, name: 'Slippers', price: '$90', offerPrice: '$70' },
    { id: 4, image: s4, name: 'Slippers', price: '$90', offerPrice: '$70' },
    { id: 5, image: s5, name: 'Casual Shoes', price: '$90', offerPrice: '$70' },
    { id: 6, image: s6, name: 'Casual Shoes', price: '$90', offerPrice: '$70' },
    { id: 7, image: s7, name: 'Casual Shoes', price: '$90', offerPrice: '$70' },
    { id: 8, image: s8, name: 'Casual Shoes', price: '$90', offerPrice: '$70' },
    { id: 9, image: s9, name: 'Casual Shoes', price: '$90', offerPrice: '$70' },
    { id: 10, image: s10, name: 'Casual Shoes', price: '$90', offerPrice: '$70' },
    { id: 11, image: s11, name: 'Casual Shoes', price: '$90', offerPrice: '$70' },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: 2000,
  };

  const handlePause = () => {
    sliderRef.current.slickPause();
    setAutoplay(false);
  };

  const handlePlay = () => {
    sliderRef.current.slickPlay();
    setAutoplay(true);
  };

  return (
    <div className='mt-4 p-12'>
      <div className='flex items-center justify-center'>
        <div className='border bg-black w-1/3 h-1'></div>
        <p className='mx-4 text-3xl font-semibold uppercase'>Big Sale</p>
        <div className='border bg-black w-1/3 h-1'></div>
      </div>

      <div className='mt-8 relative'>
        <Slider ref={sliderRef} {...settings}>
          {products.map((product) => (
            <div key={product.id} className='p-8 w-1/5'>
              <div className='border rounded-lg overflow-hidden p-8'>
                <img src={product.image} alt={product.name} className='w-full h-72 object-cover' />
                <div className='p-4 text-center'>
                  <h3 className='text-xl font-semibold'>{product.name}</h3>
                  <p className='text-gray-500 line-through'>{product.price}</p>
                  <p className='text-red-500'>{product.offerPrice}</p>
                  <Link to={`/product/${product.id}`}>
                    <button className='mt-4 bg-black text-white py-2 px-4 rounded hover:bg-blue-700'>
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <button onClick={handlePause} className='absolute top-1/2 left-0 transform -translate-y-1/2 text-3xl z-10 bg-white rounded-full p-2'>
          <MdOutlineKeyboardDoubleArrowLeft />
        </button>
        <button onClick={handlePlay} className='absolute top-1/2 right-0 transform -translate-y-1/2 text-3xl z-10 bg-white rounded-full p-2'>
          <MdKeyboardDoubleArrowRight />
        </button>
       
      </div>
    </div>
  );
}

export default BigSale;
