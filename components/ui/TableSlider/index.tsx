import { FC, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import { Col1 } from './tabla1/Col1';
import { Table2Col1 } from './tabla2/Col1';
import { Col2 } from './tabla1/Col2';
import { Col3 } from './tabla1/Col3';
import { Col4 } from './tabla1/Col4';
import { Box } from '@mui/material';
import { Button, Text } from '@nextui-org/react';
import { colors } from '../../../const';
import { Table2Col2 } from './tabla2/Col2';
import { Table2Col3 } from './tabla2/Col3';
import { Table2Col4 } from './tabla2/Col4';
import { SlideHandlerTable } from '../SlideHandlerTable';
import { SliderHandlerTableButton } from '../SliderHandlerTableButton';
import { CaretLeft } from 'react-iconly';
import { StepSlideButton } from '../StepSliderButton';

// import 'swiper/css/pagination';

// import Image from 'next/image';

export const TableSlider: FC = () => {
  const [slideActive, setSlideActive] = useState(1);
  const [stepInfo, setStepInfo] = useState<any>({});
  const [prevOrNext, setPrevOrNext] = useState<'next' | 'prev' | 'initial'>(
    'initial'
  );
  const [dispatch1, setDispatch1] = useState(false);
  const [dispatch2, setDispatch2] = useState(false);

  const [slide1, setSlide1] = useState(1);
  const [slide2, setSlide2] = useState(1);

  const handlePrevOrNext = (prevOrNext: 'next' | 'prev', slide?: number) => {
    setPrevOrNext(prevOrNext);
    if (slide === 1) {
      setDispatch1((prev) => !prev);
    }
    if (slide === 2) {
      setDispatch2((prev) => !prev);
    }
  };

  useEffect(() => {
    if (slide1 === 2 && slide2 === 1) {
      handlePrevOrNext('next', 2);
    }
    if (slide1 === 3 && slide2 === 2) {
      handlePrevOrNext('next', 2);
    }
    if (slide1 === 4 && slide2 === 3) {
      handlePrevOrNext('next', 2);
    }
    if (slide1 === 1 && slide2 === 4) {
      handlePrevOrNext('next', 2);
    }
    if (slide1 === 2 && slide2 === 3) {
      handlePrevOrNext('prev', 2);
    }
    if (slide1 === 3 && slide2 === 4) {
      handlePrevOrNext('prev', 2);
    }
    if (slide1 === 4 && slide2 === 1) {
      handlePrevOrNext('prev', 2);
    }
    if (slide1 === 1 && slide2 === 2) {
      handlePrevOrNext('prev', 2);
    }
  }, [slide1]);
  useEffect(() => {
    if (slide2 === 2 && slide1 === 1) {
      handlePrevOrNext('next', 1);
    }
    if (slide2 === 3 && slide1 === 2) {
      handlePrevOrNext('next', 1);
    }
    if (slide2 === 4 && slide1 === 3) {
      handlePrevOrNext('next', 1);
    }
    if (slide2 === 1 && slide1 === 4) {
      handlePrevOrNext('next', 1);
    }
    if (slide2 === 2 && slide1 === 3) {
      handlePrevOrNext('prev', 1);
    }
    if (slide2 === 3 && slide1 === 4) {
      handlePrevOrNext('prev', 1);
    }
    if (slide2 === 4 && slide1 === 1) {
      handlePrevOrNext('prev', 1);
    }
    if (slide2 === 1 && slide1 === 2) {
      handlePrevOrNext('prev', 1);
    }
  }, [slide2]);

  return (
    <>
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        slidesPerView={2}
        spaceBetween={0}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="tabla1"
      >
        <SwiperSlide>
          <SlideHandlerTable
            position={1}
            setSlideActive={setSlideActive}
            setSlide={setSlide1}
          />
          <Col1 />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHandlerTable
            position={2}
            setSlideActive={setSlideActive}
            setSlide={setSlide1}
          />
          <Col2 />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHandlerTable
            position={3}
            setSlideActive={setSlideActive}
            setSlide={setSlide1}
          />
          <Col3 />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHandlerTable
            position={4}
            setSlideActive={setSlideActive}
            setSlide={setSlide1}
          />
          <Col4 />
        </SwiperSlide>
        <StepSlideButton type={prevOrNext} dispatch={dispatch1} />
      </Swiper>
      <Box
        sx={{
          width: '100%',
          background: colors.secondary,
          padding: '20px 10px',
          margin: '20px 0',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Text size={14} css={{ textAlign: 'center' }}>
            Fees includes card, freight charges and opening of offshore bank
            account (No bank book).
          </Text>
        </Box>
      </Box>
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        slidesPerView={2}
        spaceBetween={0}
        centeredSlides={true}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="tabla2"
      >
        <SwiperSlide>
          <SlideHandlerTable
            position={1}
            setSlideActive={setSlideActive}
            setSlide={setSlide2}
          />
          <Table2Col1 />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHandlerTable
            position={2}
            setSlideActive={setSlideActive}
            setSlide={setSlide2}
          />
          <Table2Col2 />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHandlerTable
            position={3}
            setSlideActive={setSlideActive}
            setSlide={setSlide2}
          />
          <Table2Col3 />
        </SwiperSlide>
        <SwiperSlide>
          <SlideHandlerTable
            position={4}
            setSlideActive={setSlideActive}
            setSlide={setSlide2}
          />
          <Table2Col4 />
        </SwiperSlide>
        <StepSlideButton type={prevOrNext} dispatch={dispatch2} />
      </Swiper>
      <Box
        sx={{
          width: '100%',
          background: colors.secondary,
          padding: '20px 10px',
          margin: '20px 0',
        }}
      >
        <Box sx={{ width: '100%' }}>
          <Text size={14} css={{ textAlign: 'center' }}>
            All fees with * are normal fees chargeable by the bank / atm.
          </Text>
        </Box>
      </Box>
    </>
  );
};
