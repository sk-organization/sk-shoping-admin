import React from 'react';
import { Carousel } from 'antd';
import { IMAGE_HOST } from '../../../../app/config/constants';

const CarouselSlider = ({ images }) => {
  const imageList = images.map(image => {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${IMAGE_HOST + image})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <p style={{ color: 'transparent' }}>.</p>
        </div>
      </div>
    );
  });
  return (
    <Carousel effect="fade" autoplay autoplaySpeed={2000}>
      {imageList}
    </Carousel>
  );
};

export default CarouselSlider;
