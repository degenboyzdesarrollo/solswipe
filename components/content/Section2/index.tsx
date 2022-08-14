import { FC } from 'react';
import { Box } from '@mui/material';
import { colors } from '../../../const';
import { Container, Image, Text } from '@nextui-org/react';

export const Section2: FC = () => {
  return (
    <Box
      sx={{
        gap: '15px',
        padding: '50px 100px 25px 100px ',
        background: 'rgba(1, 0, 7, 0.3)',
      }}>
      <Container
        fluid
        display='flex'
        direction='column'
        justify='center'
        css={{
          marginBottom: '50px',
        }}>
        <Text
          css={{
            color: colors.text,
            '@media screen and (max-width: 1100px)': {
              marginBottom: '50px',
            },
          }}>
          Powered by:
        </Text>
        <Box
          sx={{
            display: 'flex',
            gap: '70px',
            '@media screen and (max-width: 1100px)': {
              flexDirection: 'column',
            },
          }}>
          <Image src='/assets/section2/jdb.svg' alt='Logo' width={140} />
          <Image
            src='/assets/section2/ethereum.png'
            alt='Logo'
            width={140}
            css={{}}
          />
          <Image src='/assets/section2/unionPay.svg' alt='Logo' width={140} />
          <Image src='/assets/section2/solana.svg' alt='Logo' width={140} />
          <Image
            src='/assets/section2/binanceChain.svg'
            alt='Logo'
            width={140}
          />
        </Box>
      </Container>
    </Box>
  );
};
