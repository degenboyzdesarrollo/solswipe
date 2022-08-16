import { Box } from '@mui/material';
import { Image, Text } from '@nextui-org/react';
import React from 'react';
import { colors } from '../../../../const';

export const Col1 = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box sx={{ background: 'rgb(255, 255, 255,0.3)', padding: '0px 0px' }}>
        <Image src='/assets/section5/simbolo.svg' alt='simbolo' width={150} />
      </Box>
      <Box
        sx={{
          background: colors.secondary,
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '50px 20px 8px 20px',
        }}>
        <Text size={20}>Requirement</Text>
      </Box>
      <Box
        sx={{
          background: colors.secondary,
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '50px 20px 8px 20px',
        }}>
        <Text size={20}>First time minimum load</Text>
      </Box>
    </Box>
  );
};
