import React from 'react';
import './home.css';
import Carousel from 'react-material-ui-carousel';
import "./banner.css";

const Banner = () => {
  const imagePaths = [
    './01 cursol.jpg',
    './02 cursol.jpg',
    './03 cursol.jpg',
    './04 cursol.jpg',
    './05 cursol.jpg',
    './06 cursol.jpg',
  ];

  return (
    <Carousel
      className='carousel'
      autoPlay={true}
      animation='slide'
      indicators={false}
      navButtonsAlwaysInvisible={false} // Set to false to make navigation buttons visible
      cycleNavigation={true}
      navButtonsProps={{
        style: {
          backgroundColor: '#fff',
          color: '#494949',
          borderRadius: '50%', // Making buttons circular
          marginTop: 'auto', // Adjusting button position
          marginBottom: 'auto', // Adjusting button position
          height: '40px', // Adjusting button size
          width: '40px', // Adjusting button size
        },
      }}
    >
      {imagePaths.map((path, index) => (
        <div key={index} className='banner_img'>
          <img src={path} alt={`image-${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
