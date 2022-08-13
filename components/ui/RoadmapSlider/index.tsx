import { FC, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';
import { Image, Text } from '@nextui-org/react';

export const RoadmapSlider = () => {
  return (
    <>
      <Text
        h1
        css={{
          marginBottom: '50px',
          background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '@media screen and (max-width: 1100px)': {
            fontSize: '2.8rem',
            textAlign: 'center',
          },
        }}
      >
        Solswipe Roadmap
      </Text>
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/assets/section3/1.svg"
            alt="Logo"
            width={500}
            css={{
              '@media screen and (max-width: 1100px)': {
                width: '80%',
                margin: '0px auto',
              },
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/assets/section3/2.svg"
            alt="Logo"
            width={500}
            css={{
              '@media screen and (max-width: 1100px)': {
                width: '80%',
                margin: '0px auto',
              },
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/assets/section3/3.svg"
            alt="Logo"
            width={500}
            css={{
              '@media screen and (max-width: 1100px)': {
                width: '80%',
                margin: '0px auto',
              },
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/assets/section3/4.svg"
            alt="Logo"
            width={500}
            css={{
              '@media screen and (max-width: 1100px)': {
                width: '80%',
                margin: '0px auto',
              },
            }}
          />
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <Image
            src="/assets/section3/5.svg"
            alt="Logo"
            width={500}
            css={{
              '@media screen and (max-width: 1100px)': {
                width: '80%',
                margin: '0px auto',
              },
            }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
