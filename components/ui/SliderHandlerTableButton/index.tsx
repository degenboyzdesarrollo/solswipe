import { FC, useEffect } from 'react';
import { useSwiper } from 'swiper/react';

type Props = {
  type: 'prev' | 'next' | 'initial';
  dispatch: boolean;
};

export const SliderHandlerTableButton: FC<Props> = ({ type, dispatch }) => {
  const swiper = useSwiper();

  useEffect(() => {
    if (type === 'prev') {
      swiper.slidePrev();
    }
    if (type === 'next') {
      swiper.slideNext();
    }
  }, [dispatch]);

  return <div></div>;
};
