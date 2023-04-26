// components/Card.js
import Image from "next/image";
import React from "react";

const Card = ({ title, date, description, side }) => {
  const randomImageUrl = `https://source.unsplash.com/random/400x300`;

  return (
    <div className="relative max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="absolute left-0 top-1/2 h-0 w-0 border-r-8 border-t-8 border-transparent border-b-8 border-l-8 border-white -mt-4 -ml-4"></div>
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <Image
            className={`rounded w-full h-auto absolute top-0 transform ${
              side === "left" ? "-translate-x-1/3" : "translate-x-1/3"
            }`}
            width={50}
            height={50}
            src={randomImageUrl}
            alt={title}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {date}
          </div>
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">
            {title}
          </h2>
          <p className="mt-2 text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
