import { FC, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
// import required modules
import { Autoplay, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
// import 'swiper/css/pagination';

// import Image from 'next/image';
import { Box } from '@mui/system';
import { Image, Text } from '@nextui-org/react';
import { useSwiperSlide } from 'swiper/react';
import { SlideButton } from '../SlideButton';
import { SlideTitle } from '../SlideTitle';

export const CardSlider: FC = () => {
  const [slideActive, setSlideActive] = useState(1);
  const [backOrFrontCard, setBackOrFrontCard] = useState('front');

  const handleBackOrFrontCard = (backOrFrontCard: 'front' | 'back') => {
    setBackOrFrontCard(backOrFrontCard);
  };

  return (
    <>
      <Swiper
        loop={true}
        loopFillGroupWithBlank={true}
        slidesPerView={2}
        spaceBetween={100}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
        }}
        className='mySwiper'>
        <SwiperSlide>
          <SlideTitle position={1} setSlideActive={setSlideActive} />
          <Box
            sx={{
              textAlign: 'center',
            }}>
            <Text
              css={{
                marginBottom: '2rem',
                fontSize: '2.2rem',
                '@media screen and (max-width: 1100px)': {
                  fontSize: '0.95rem',
                },
              }}
              h3>
              Premium Black Plastic
            </Text>
            <Image
              src={`/assets/cards/${backOrFrontCard}-card-black.png`}
              alt='black-card'
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <SlideTitle position={2} setSlideActive={setSlideActive} />
          <Box
            sx={{
              textAlign: 'center',
            }}>
            <Text
              h3
              css={{
                marginBottom: '2rem',
                fontSize: '2.2rem',
                '@media screen and (max-width: 1100px)': {
                  fontSize: '1rem',
                },
              }}>
              Silver Metal
            </Text>
            <Image
              src={`/assets/cards/${backOrFrontCard}-card-silver.png`}
              alt='black-card'
            />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <SlideTitle position={3} setSlideActive={setSlideActive} />
          <Box
            sx={{
              textAlign: 'center',
            }}>
            <Text
              h3
              css={{
                marginBottom: '2rem',
                fontSize: '2.2rem',
                '@media screen and (max-width: 1100px)': {
                  fontSize: '1rem',
                },
              }}>
              Gold Metal
            </Text>
            <Image
              src={`/assets/cards/${backOrFrontCard}-card-golden.png`}
              alt='black-card'
            />
          </Box>
        </SwiperSlide>
        <Box
          sx={{
            margin: '5rem 0 0 0',
            display: 'flex',
            justifyContent: 'center',
            '@media screen and (max-width: 1100px)': {
              flexDirection: 'column',
            },
          }}>
          <Box
            sx={{
              height: '3rem',
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              fontFamily: 'Roboto',
              '@media screen and (max-width: 1100px)': {
                width: '100%',
                height: '3rem',
              },
            }}>
            <SlideButton slideActive={slideActive} thisSlide={1}>
              <Box
                sx={{
                  margin: '0 0.8rem',
                }}>
                <Image
                  src={`/assets/cards/black-card-dot.png`}
                  alt='black-card-dot'
                  width={40}
                  css={{
                    border: slideActive === 1 ? '2px solid #9164FB' : '',
                    padding: '3px',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
                <Text
                  css={{
                    marginTop: '1rem',
                    color: slideActive === 1 ? '#fff' : '#6C6C6C',
                    fontSize: '1.4rem',
                    borderBottom: slideActive === 1 ? '2px solid #9164FB' : '',
                    transition: 'all 0.3s ease-in-out',
                  }}>
                  Black
                </Text>
              </Box>
            </SlideButton>
            <SlideButton slideActive={slideActive} thisSlide={2}>
              <Box
                sx={{
                  margin: '0 0.8rem',
                }}>
                <Image
                  src={`/assets/cards/silver-card-dot.png`}
                  alt='silver-card-dot'
                  width={40}
                  css={{
                    border: slideActive === 2 ? '2px solid #9164FB' : '',
                    padding: '3px',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
                <Text
                  css={{
                    marginTop: '1rem',
                    color: slideActive === 2 ? '#fff' : '#6C6C6C',
                    fontSize: '1.4rem',
                    borderBottom: slideActive === 2 ? '2px solid #9164FB' : '',
                    transition: 'all 0.3s ease-in-out',
                  }}>
                  Silver
                </Text>
              </Box>
            </SlideButton>
            <SlideButton slideActive={slideActive} thisSlide={3}>
              <Box
                sx={{
                  margin: '0 0.8rem',
                }}>
                <Image
                  src={`/assets/cards/golden-card-dot.png`}
                  alt='golden-card-dot'
                  width={40}
                  css={{
                    border: slideActive === 3 ? '2px solid #9164FB' : '',
                    padding: '3px',
                    borderRadius: '50%',
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
                <Text
                  css={{
                    marginTop: '1rem',
                    color: slideActive === 3 ? '#fff' : '#6C6C6C',
                    fontSize: '1.4rem',
                    borderBottom: slideActive === 3 ? '2px solid #9164FB' : '',
                    transition: 'all 0.3s ease-in-out',
                  }}>
                  Gold
                </Text>
              </Box>
            </SlideButton>
          </Box>
          <Box
            sx={{
              height: '6rem',
              width: '50%',
              display: 'flex',
              justifyContent: 'center',
              '@media screen and (max-width: 1100px)': {
                width: '100%',
                height: '6rem',
                marginTop: '6rem',
              },
            }}>
            <Box
              sx={{
                margin: '0 1rem',
              }}
              onClick={() => handleBackOrFrontCard('front')}>
              <Image
                src={`/assets/cards/front-card.svg`}
                alt='black-card-dot'
                width={40}
              />
              <Text
                css={{
                  marginTop: '1rem',
                  color: backOrFrontCard === 'front' ? '#fff' : '#6C6C6C',
                  fontSize: '1.2rem',
                  borderBottom:
                    backOrFrontCard === 'front' ? '2px solid #9164FB' : '',
                  transition: 'all 0.3s ease-in-out',
                }}>
                Front
              </Text>
            </Box>
            <Box
              sx={{
                margin: '0 1rem',
              }}
              onClick={() => handleBackOrFrontCard('back')}>
              <Image
                src={`/assets/cards/back-card.svg`}
                alt='black-card-dot'
                width={40}
              />
              <Text
                css={{
                  marginTop: '1rem',
                  color: backOrFrontCard === 'back' ? '#fff' : '#6C6C6C',
                  fontSize: '1.2rem',
                  borderBottom:
                    backOrFrontCard === 'back' ? '2px solid #9164FB' : '',
                  transition: 'all 0.3s ease-in-out',
                }}>
                Back
              </Text>
            </Box>
          </Box>
        </Box>
      </Swiper>
    </>
  );
};
