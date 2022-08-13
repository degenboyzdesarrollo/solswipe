import { Box } from '@mui/material';
import { Text } from '@nextui-org/react';
import { StepSlider } from '../../ui/StepSlider';

export const Section7 = () => {
  return (
    <Box
      id='getCards'
      sx={{
        display: 'flex',
      }}>
      <Box
        sx={{
          width: '100%',
        }}>
        <Text
          h1
          css={{
            textAlign: 'center',
            background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
          }}>
          How to Get Solswipe Card
        </Text>
        <StepSlider />
      </Box>
    </Box>
  );
};
