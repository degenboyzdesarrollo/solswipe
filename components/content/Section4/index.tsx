import { Box } from '@mui/material';
import { Container, Text } from '@nextui-org/react';
import { colors } from '../../../const';

import { CardSlider } from '../../ui/CardSlider';

export const Section4 = () => {
  return (
    <Box id="cardTiers">
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px 0',
        }}
      >
        <Text
          h1
          css={{
            background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            '@media screen and (max-width: 1100px)': {
              fontSize: '2.8rem',
              textAlign: 'center',
            },
          }}
        >
          Solswipe Card Tiers
        </Text>
        <Text
          css={{
            '@media screen and (max-width: 1100px)': {
              textAlign: 'center',
              margin: '0 auto',
              padding: '0 1rem',
            },
          }}
        >
          Select from 1 of our 3 classy metallic cards, each with their added
          benefits
        </Text>
      </Box>
      <Box
        sx={{
          background: colors.secondary,
          backdropFilter: 'blur(50px)',
          padding: '3rem 0',
          overflow: 'hidden',
          '@media screen and (max-width: 1100px)': {
            margin: '1rem 0 5rem 0',
          },
        }}
      >
        <CardSlider />
      </Box>
    </Box>
  );
};
