import React from 'react';
import { Carousel } from 'antd';
import { IMAGE_HOST } from '../../../../app/config/constants';

const CarouselSlider = ({ images }) => {
  // eslint-disable-next-line arrow-body-style
  const imageList = images.map(image => {
    return (
      <div>
        <div
          style={{
            height: '100%',
            width: '100%',
            backgroundImage: `url(${IMAGE_HOST + image})`,
            backgroundPosition: 'center',
            backgroundSize: 'contain',
            backfaceVisibility: 'hidden',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* <img height="100%" src={IMAGE_HOST + image} /> */}
          <p style={{ color: 'transparent' }}>.</p>
        </div>
      </div>
    );
  });
  return (
    <Carousel effect="scrollx" autoplay autoplaySpeed={2000}>
      {imageList}
    </Carousel>
  );
};

export default CarouselSlider;
