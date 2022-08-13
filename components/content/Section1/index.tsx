import { FC } from 'react';
import { Box } from '@mui/material';
import { colors } from '../../../const';
import { Button, Container, Image, Text } from '@nextui-org/react';
import { useRouter } from 'next/router';

const Section1: FC = () => {
  const router = useRouter();
  return (
    // Container
    <Box
      sx={{
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
        }}>
        <video autoPlay muted loop style={{ width: '100%', height: '100%' }}>
          <source src='/assets/section1/herovid.mp4' type='video/mp4' />
        </video>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '50%',
          margin: 'auto',
          '@media screen and (max-width: 700px)': {
            bottom: '25%',
          },
          '@media screen and (min-width: 600px) and (max-width:767px)': {
            bottom: '50%',
          },
          '@media screen and (min-width: 768px) and (max-width:1224px)': {
            bottom: '25%',
          },
        }}>
        <Text
          h1
          size={80}
          css={{
            textAlign: 'center',
            zIndex: '100',
            '@media screen and (max-width: 768px)': {
              fontSize: '40px !important',
            },
            '@media screen and (min-width: 768px) and (max-width:1024px)': {
              fontSize: '70px !important',
            },
          }}>
          Solana’s First Ever Debit Card
        </Text>
      </Box>
    </Box>
  );
};

export default Section1;
