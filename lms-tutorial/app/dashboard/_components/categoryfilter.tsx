'use client'
import React, { useState } from "react";
export const CategoryFilter: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const filterOptions = [
    {
      id: 1,
      name: 'All',
      value: 'all'
    },
    {
      id: 2,
      name: 'Project Management',
      value: 'pm'
    },
    {
      id: 3,
      name: 'Data Analyst',
      value: 'da'
    },
    {
      id: 4,
      name: 'Android Developer',
      value: 'ad'
    },
    {
      id: 5,
      name: 'Copy Writing',
      value: 'cw'
    },
    {
      id: 6,
      name: 'SEO',
      value: 'seo'
    }
  ];

  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`border p-2 px-4 text-[15px] text-sm rounded-md hover:border-red-900 font-bold hover:bg-gray-50
                      ${activeIndex === index ? 'border-black bg-red-900 text-white' : null}`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;

