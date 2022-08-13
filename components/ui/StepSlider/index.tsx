import { FC, useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import Image from 'next/image';

import { Box } from '@mui/system';
import { Button, Image, Text } from '@nextui-org/react';
import { useSwiperSlide } from 'swiper/react';
import { SlideButton } from '../SlideButton';
import { SlideTitle } from '../SlideTitle';
import { steps } from '../../../const/steps';
import { StepSlideButton } from '../StepSliderButton';
import { CaretLeft, CaretRight } from 'react-iconly';

export const StepSlider: FC = () => {
  const [slideActive, setSlideActive] = useState(1);
  const [stepInfo, setStepInfo] = useState<any>({});
  const [prevOrNext, setPrevOrNext] = useState<'next' | 'prev' | 'initial'>(
    'initial'
  );
  const [dispatch, setDispatch] = useState(false);

  const handlePrevOrNext = (prevOrNext: 'next' | 'prev') => {
    setPrevOrNext(prevOrNext);
    setDispatch((prev) => !prev);
  };

  useEffect(() => {
    const step: any = steps.find((step) => step.id === slideActive);
    setStepInfo(step);
  }, [slideActive]);

  return (
    <Box
      display="flex"
      sx={{
        margin: '6rem 0',
        '@media screen and (max-width: 1100px)': {
          flexDirection: 'column-reverse',
        },
      }}
    >
      <Box
        sx={{
          width: '35%',
          padding: '0rem 2rem 0rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          '@media screen and (max-width: 1100px)': {
            width: '100%',
            marginTop: '2rem',
            textAlign: 'center',
          },
        }}
      >
        <Box>
          <Text
            h1
            css={{
              background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              textTransform: 'uppercase',
              marginBotton: '1rem',
            }}
          >
            {stepInfo !== {} && stepInfo.title}
          </Text>
          <Text
            css={{
              fontWeight: '400',
              fontSize: '20px',
              lineHeight: '40px',
              '@media screen and (max-width: 1100px)': {
                fontSize: '1.2rem',
                height: '6rem',
              },
            }}
          >
            {stepInfo !== {} && stepInfo.description}
          </Text>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Button
            icon={<CaretLeft set="bold" primaryColor="#4C445C" />}
            flat
            css={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              minWidth: '50px',
              margin: '0 2rem',
              backgroundColor: '#9164FB',
            }}
            onClick={() => handlePrevOrNext('prev')}
          ></Button>
          <Button
            icon={<CaretRight set="bold" primaryColor="#4C445C" />}
            flat
            css={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              minWidth: '50px',
              margin: '0 2rem',
              backgroundColor: '#9164FB',
            }}
            onClick={() => handlePrevOrNext('next')}
          ></Button>
        </Box>
      </Box>
      <Swiper
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        // autoplay={{
        //   delay: 6000,
        //   disableOnInteraction: false,
        // }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className="stepSlider"
      >
        <SwiperSlide>
          <SlideTitle position={1} setSlideActive={setSlideActive} />
          <Box
            sx={{
              border: slideActive === 1 ? '2.5px solid #c9aa24' : '',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            <Image src={`/assets/steps/step1.png`} alt="black-card" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <SlideTitle position={2} setSlideActive={setSlideActive} />
          <Box
            sx={{
              border: slideActive === 2 ? '2.5px solid #c9aa24' : '',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            <Image src={`/assets/steps/step2.png`} alt="black-card" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <SlideTitle position={3} setSlideActive={setSlideActive} />
          <Box
            sx={{
              border: slideActive === 3 ? '2.5px solid #c9aa24' : '',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            <Image src={`/assets/steps/step3.png`} alt="black-card" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <SlideTitle position={4} setSlideActive={setSlideActive} />
          <Box
            sx={{
              border: slideActive === 4 ? '2.5px solid #c9aa24' : '',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            <Image src={`/assets/steps/step4.png`} alt="black-card" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <SlideTitle position={5} setSlideActive={setSlideActive} />
          <Box
            sx={{
              border: slideActive === 5 ? '2.5px solid #c9aa24' : '',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            <Image src={`/assets/steps/step5.png`} alt="black-card" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <SlideTitle position={6} setSlideActive={setSlideActive} />
          <Box
            sx={{
              border: slideActive === 6 ? '2.5px solid #c9aa24' : '',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            <Image src={`/assets/steps/step6.png`} alt="black-card" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <SlideTitle position={7} setSlideActive={setSlideActive} />
          <Box
            sx={{
              border: slideActive === 7 ? '2.5px solid #c9aa24' : '',
              borderRadius: '5px',
              textAlign: 'center',
            }}
          >
            <Image src={`/assets/steps/step7.png`} alt="black-card" />
          </Box>
        </SwiperSlide>
        <StepSlideButton type={prevOrNext} dispatch={dispatch} />
      </Swiper>
    </Box>
  );
};
