import { Box } from '@mui/material';
import { Image, Text } from '@nextui-org/react';
import React from 'react';
import { colors } from '../../../../const';

export const Col2 = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box
        sx={{
          background: colors.secondary,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '10px',
        }}>
        <Text>Black Plastic</Text>
        <Image src='/assets/section5/blackCard.svg' alt='tarjeta' />
      </Box>
      <Box
        sx={{
          background: 'rgb(255,255,255,0.03)',
          borderLeft: '1px solid rgb(255,255,255,0.3)',
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '50px 50px 15px 50px',
        }}>
        <Box sx={{ width: '100%' }}>
          <Text css={{ textAlign: 'center' }}>0</Text>
        </Box>
      </Box>
      <Box
        sx={{
          background: 'rgb(255,255,255,0.03)',
          borderLeft: '1px solid rgb(255,255,255,0.3)',
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '50px 50px 15px 50px',
        }}>
        <Box sx={{ width: '100%' }}>
          <Text css={{ textAlign: 'center' }}>0</Text>
        </Box>
      </Box>
    </Box>
  );
};
