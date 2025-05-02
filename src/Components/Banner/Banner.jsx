// src/Components/Banner/Banner.jsx
import React from 'react';
import bannerImage from '../../assets/Images/Banner/banner.jpg';

function Banner() {
  return (
    <div
      className="w-full h-200 bg-cover bg-center absolute top-0 right-0 left-0"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bannerImage})`,
      }}
    >
      <div className="h-full w-full  flex items-center justify-center text-white text-3xl">
        ¡Bienvenido!
      </div>
    </div>
  );
}

export default Banner;