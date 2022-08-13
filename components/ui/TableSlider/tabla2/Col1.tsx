import { Box } from '@mui/material';
import { Image, Text } from '@nextui-org/react';
import React from 'react';
import { colors } from '../../../../const';

export const Table2Col1 = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box
        sx={{
          background: colors.secondary,
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '40px 20px 28px 20px',
          '@media screen and (max-width: 425px)': {
            padding: '40px 20px 28px 20px',
          },
        }}>
        <Text size={14}>Card Issuance Fee</Text>
      </Box>
      <Box
        sx={{
          background: colors.secondary,
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '40px 20px 28px 20px',
          '@media screen and (max-width: 425px)': {
            padding: '40px 20px 28px 20px',
          },
        }}>
        <Text size={14}>Card Replacement Fee</Text>
      </Box>
      <Box
        sx={{
          background: colors.secondary,
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '40px 20px 28px 20px',
          '@media screen and (max-width: 425px)': {
            padding: '40px 20px 28px 20px',
          },
        }}>
        <Text size={14}>Card Loading Fee</Text>
      </Box>
      <Box
        sx={{
          background: colors.secondary,
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '40px 20px 28px 20px',
          '@media screen and (max-width: 425px)': {
            padding: '40px 20px 28px 20px',
          },
        }}>
        <Text size={14}>ATM WithDrawal Fee (%)*</Text>
      </Box>
      <Box
        sx={{
          background: colors.secondary,
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '40px 20px 28px 20px',
          '@media screen and (max-width: 425px)': {
            padding: '40px 20px 28px 20px',
          },
        }}>
        <Text size={14}>Check Balance Fee (ATM)</Text>
      </Box>
      <Box
        sx={{
          background: colors.secondary,
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '40px 20px 28px 20px',
          '@media screen and (max-width: 425px)': {
            padding: '40px 20px 28px 20px',
          },
        }}>
        <Text size={14}>POS & Online Fees (&)</Text>
      </Box>
      <Box
        sx={{
          background: colors.secondary,
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '40px 20px 28px 20px',
          '@media screen and (max-width: 425px)': {
            padding: '40px 20px 28px 20px',
          },
        }}>
        <Text size={14}>Loading Cap</Text>
      </Box>
    </Box>
  );
};
