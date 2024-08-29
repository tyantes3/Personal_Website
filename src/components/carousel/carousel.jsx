import React, { useState, useEffect } from 'react';
// import reactLogo from '/react.png';  // Import your images
// import jsLogo from '/js.png';
// import htmlLogo from '/html.png';
// import nodeLogo from '/node.png';

const images = ['/react.png', '/js.png', '/html.png', '/node.png'];  // Add more images as needed

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className='carouselContainer'>
      <img src={images[currentImageIndex]} alt="carousel" className='carousel' />
    </div>
  );
};

export default Carousel;