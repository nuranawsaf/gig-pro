import React from 'react';

import { A11y, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper } from 'swiper/react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const SwiperContainer = ({ children, className }: Props) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={10}
      navigation
      // pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className={className}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        740: {
          slidesPerView: 2,
        },
        1224: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default SwiperContainer;
