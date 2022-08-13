import { Box } from '@mui/material';
import { Image } from '@nextui-org/react';

export const Section1 = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}>
      <video autoPlay muted loop style={{ width: '100%', height: '100%' }}>
        <source src='/assets/utility/herovid2.mp4' type='video/mp4' />
      </video>
    </Box>
  );
};
