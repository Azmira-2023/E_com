import React from 'react';
import { Link } from 'react-router-dom';
import Men from "../../../assets/categories/Men.png";
import Women from "../../../assets/categories/women.png";
import Kids from "../../../assets/categories/kids.png";
import Footwear from "../../../assets/categories/footwear.png";

const Categories = () => {
  const categories = [
    { name: 'Men', image: Men, path: '/categories/men' },
    { name: 'Women', image: Women, path: '/categories/women' },
    { name: 'Kids', image: Kids, path: '/categories/kids' },
    { name: 'Footwear', image: Footwear, path: '/categories/footwear' },
  ];

  return (
    <div className='mt-12 text-center p-12'>
      <h1 className='text-6xl font-semibold '>Trending Categories</h1>
      <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-8'>
        {categories.map((category, index) => (
          <div key={index} className='border rounded-lg overflow-hidden'>
            <img
              src={category.image}
              alt={category.name}
              className='w-full object-cover'
            />
            <div className='flex items-center justify-center p-4'>
              <Link to={category.path}>
                <button className='border bg-slate-100 text-black py-2 px-8 rounded hover:bg-slate-400'>
                  {category.name}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
