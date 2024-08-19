import React from 'react';
import { Link } from 'react-router-dom';

const Company = () => {
  return (
    <div className='mt-4 p-4'>
      <div className='flex flex-col md:flex-row justify-between gap-4 mt-4'>
        {/* Fast Delivery Section */}
        <div className='flex flex-col items-center border p-4 w-full md:w-1/3'>
          <svg
            className='w-16 h-16 text-blue-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M16 11v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2a2 2 0 012-2h9a2 2 0 012 2z'
            />
          </svg>
          <p className='text-lg font-semibold mt-2'>Fast Delivery</p>
          <p className='p-4 text-center'>
            Get Fast and hassle-free delivery <br /> of your orders to your doorstep.
            Ensuring a seamless and <br /> hassle-free experience
          </p>
          <Link to="/fast-delivery">
            <button className='mt-2 px-4 py-2 underline text-black rounded'>Learn More</button>
          </Link>
        </div>

        {/* Super Deals Section */}
        <div className='flex flex-col items-center border p-4 w-full md:w-1/3'>
          <svg
            className='w-16 h-16 text-green-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v6M3 12h6M12 21v-6M21 12h-6'
            />
          </svg>
          <p className='text-lg font-semibold mt-6'>Super Deals</p>
          <p className='text-center'>Stay updated on all our latest news,<br /> offers, and campaigns.</p>
          <Link to="/super-deals">
            <button className='mt-8 md:mt-32 px-4 py-2 underline text-black rounded'>Learn More</button>
          </Link>
        </div>

        {/* Rewards Section */}
        <div className='flex flex-col items-center border p-4 w-full md:w-1/3'>
          <svg
            className='w-12 h-12 text-yellow-500'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 3v3m0 0h3m-3 0H9m0 0v3m0-3v3m0 0h3m-3 0H9m0 0v3m0 0h3m-3 0H9m3-6h3'
            />
          </svg>
          <p className='text-lg font-semibold mt-2'>Rewards</p>
          <p className='text-center'>Unlock a world of exciting <br /> benefits with Apex Rewards <br /> loyalty program.</p>
          <Link to="/rewards">
            <button className='mt-8 md:mt-16 px-4 py-2 text-black underline rounded'>Learn More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Company;
