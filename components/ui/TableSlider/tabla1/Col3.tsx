import { Box } from '@mui/material';
import { Image, Text } from '@nextui-org/react';
import React from 'react';
import { colors } from '../../../../const';

export const Col3 = () => {
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
        <Text>Gold Metal</Text>
        <Image src='/assets/section5/goldCard.svg' alt='tarjeta' />
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
          <Text css={{ textAlign: 'center' }}>10</Text>
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
          <Text css={{ textAlign: 'center' }}>$20,000 USD</Text>
        </Box>
      </Box>
    </Box>
  );
};
