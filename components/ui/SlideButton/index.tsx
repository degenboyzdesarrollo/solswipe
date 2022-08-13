import { FC } from 'react';
import { useSwiper } from 'swiper/react';

type Props = {
  children: React.ReactNode;
  slideActive: number;
  thisSlide: number;
};

export const SlideButton: FC<Props> = ({
  children,
  slideActive,
  thisSlide,
}) => {
  const swiper = useSwiper();

  const handleSlide = (slideActive: number) => {
    if (slideActive === 1 && thisSlide === 2) {
      swiper.slideNext();
    }
    if (slideActive === 1 && thisSlide === 3) {
      swiper.slidePrev();
    }
    if (slideActive === 2 && thisSlide === 1) {
      swiper.slidePrev();
    }
    if (slideActive === 2 && thisSlide === 3) {
      swiper.slideNext();
    }
    if (slideActive === 3 && thisSlide === 1) {
      swiper.slideNext();
    }
    if (slideActive === 3 && thisSlide === 2) {
      swiper.slidePrev();
    }
  };

  return <div onClick={() => handleSlide(slideActive)}>{children}</div>;
};
