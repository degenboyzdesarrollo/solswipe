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
        display: 'flex',
        height: '100%',
        overflow: 'hidden',
      }}>
      {/* Izquierda-Imagenes */}
      <Box
        sx={{
          position: 'relative',
          '@media screen and (max-width: 1100px)': {
            display: 'none',
          },
        }}>
        <Image src='/assets/section1/fondo.svg' alt='fondo' />
        {/* Tarjetas */}
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            margin: 'auto',
            transform: 'translateX(8em)',
          }}>
          <Image src='/assets/section1/tarjetas.svg' alt='tarjetas' />
        </Box>
      </Box>
      {/* Derecha - Resto de contenido */}
      <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Contenido */}
        <Box
          sx={{
            gap: '100px',
            height: '100%',
            width: '100%',
            display: 'flex',
            padding: '150px 100px 75px 100px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            '@media screen and (max-width: 1100px)': {
              padding: '100px 50px 75px 50px',
            },
          }}>
          {/* Texto */}
          <Box
            sx={{
              gap: '50px',
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Text
              h1
              size={80}
              css={{
                position: 'relative',
                zIndex: '100',
                '@media screen and (max-width: 1100px)': {
                  fontSize: '60px',
                  textAlign: 'center',
                },
              }}>
              Solana’s First Ever Debit Card
            </Text>
            <Text size={20} css={{ color: colors.text }}>
              First ever Decentralised Debit card that you can load directly
              from your cold wallet into our debit card, seamlessly
            </Text>
          </Box>
          <Button
            rounded
            size='md'
            css={{
              background: colors.button,
              height: '70px',
              '@media screen and (max-width: 1100px)': {
                fontSize: '30px',
                textAlign: 'center',
                alignSelf: 'center',
                zIndex: '100',
              },
            }}
            onClick={() =>
              router.push('https://solswipe.io/Solswipe_whitepaper.pdf')
            }>
            Whitepaper
          </Button>
          {/* Bolitas */}
          <Box sx={{ position: 'absolute', bottom: 0, right: '7%' }}>
            <Image src='/assets/bolita.svg' alt='bolita' width={170} />
          </Box>
          <Box sx={{ position: 'absolute', top: '14%', left: '4%' }}>
            <Image src='/assets/bolita2.svg' alt='bolita' width={120} />
          </Box>
          <Box
            sx={{
              position: 'absolute',
              top: '-4em',
              right: '-4em',
              zIndex: '0',
              margin: '0',
            }}>
            <Image src='/assets/bolita2.svg' alt='bolita' width={170} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section1;
