import { FC, useEffect } from 'react';
import { useSwiperSlide } from 'swiper/react';

type Props = {
  setSlideActive: (slide: number) => void;
  position: number;
};

export const SlideTitle: FC<Props> = ({ setSlideActive, position }) => {
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    if (swiperSlide.isActive) {
      setSlideActive(position);
    }
  }, [position, setSlideActive, swiperSlide]);
  return <></>;
};
