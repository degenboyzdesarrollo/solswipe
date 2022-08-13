import { Box } from '@mui/material';
import { Image, Text } from '@nextui-org/react';
import React from 'react';
import { colors } from '../../../../const';

export const Table2Col4 = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box
        sx={{
          background: 'rgb(255,255,255,0.03)',
          borderLeft: '1px solid rgb(255,255,255,0.3)',
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '53px 50px 15px 50px',
        }}>
        <Box sx={{ width: '100%' }}>
          <Text size={14} css={{ textAlign: 'center' }}>
            $550 USD
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          background: 'rgb(255,255,255,0.03)',
          borderLeft: '1px solid rgb(255,255,255,0.3)',
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '53px 50px 15px 50px',
        }}>
        <Box sx={{ width: '100%' }}>
          <Text size={14} css={{ textAlign: 'center' }}>
            $200 USD
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          background: 'rgb(255,255,255,0.03)',
          borderLeft: '1px solid rgb(255,255,255,0.3)',
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '53px 50px 15px 50px',
        }}>
        <Box sx={{ width: '100%' }}>
          <Text size={14} css={{ textAlign: 'center' }}>
            2.75%
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          background: 'rgb(255,255,255,0.03)',
          borderLeft: '1px solid rgb(255,255,255,0.3)',
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '53px 50px 15px 50px',
        }}>
        <Box sx={{ width: '100%' }}>
          <Text size={14} css={{ textAlign: 'center' }}>
            0.75%
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          background: 'rgb(255,255,255,0.03)',
          borderLeft: '1px solid rgb(255,255,255,0.3)',
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '28px 5px 40px 5px',
          '@media screen and (max-width: 425px)': {
            padding: '28px 5px 15px 5px',
          },
        }}>
        <Box sx={{ width: '100%' }}>
          <Text size={14} css={{ textAlign: 'center' }}>
            Possible Charge by Acquirer Bank ATM
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          background: 'rgb(255,255,255,0.03)',
          borderLeft: '1px solid rgb(255,255,255,0.3)',
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '54px 50px 15px 50px',
        }}>
        <Box sx={{ width: '100%' }}>
          <Text size={14} css={{ textAlign: 'center' }}>
            0.75%
          </Text>
        </Box>
      </Box>
      <Box
        sx={{
          background: 'rgb(255,255,255,0.03)',
          borderLeft: '1px solid rgb(255,255,255,0.3)',
          borderRight: '1px solid rgb(255,255,255,0.3)',
          borderBottom: '2px solid rgb(255,255,255,0.3)',
          padding: '52px 50px 15px 50px',
        }}>
        <Box sx={{ width: '100%' }}>
          <Text size={14} css={{ textAlign: 'center' }}>
            150,000/Month
          </Text>
        </Box>
      </Box>
    </Box>
  );
};