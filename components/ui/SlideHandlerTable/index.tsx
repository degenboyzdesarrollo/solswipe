import { FC, useEffect } from 'react';
import { useSwiperSlide } from 'swiper/react';

type Props = {
  setSlideActive: (slide: number) => void;
  position: number;
  setSlide?: (slide: number) => void | undefined;
};

export const SlideHandlerTable: FC<Props> = ({
  setSlideActive,
  position,
  setSlide,
}) => {
  const swiperSlide = useSwiperSlide();

  useEffect(() => {
    if (swiperSlide.isActive) {
      setSlideActive(position);
      if (setSlide) {
        setSlide(position);
      }
    }
  }, [position, setSlideActive, swiperSlide]);
  return <></>;
};
