import { Box } from '@mui/material';
import { Container, Image, Text } from '@nextui-org/react';
import React from 'react';

export const Section8 = () => {
  return (
    <Box id='partnership' sx={{ position: 'relative' }}>
      <Container
        display='flex'
        direction='column'
        alignItems='center'
        css={{
          gap: '50px',
          paddingTop: '50px',
          paddingBottom: '25px',
        }}>
        {/* Arriba */}
        <Box>
          <Text
            h1
            css={{
              textAlign: 'center',
              background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}>
            Solswipe Partnership
          </Text>
          <Text>
            we are open to all kinds of partnerships with projects who want to
            integrate our cards or to customize your own Debit card brand
          </Text>
        </Box>
        {/* ABajo */}
        <Box
          sx={{
            gap: '0px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            '@media screen and (max-width: 1100px)': {
              flexDirection: 'column',
            },
          }}>
          {/* Izquierda */}
          <Box
            sx={{
              position: 'relative',
              width: '50%',
              '@media screen and (max-width: 1100px)': {
                width: '100%',
              },
            }}>
            {/* card1 */}
            <Box
              sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                zIndex: '100',
                '@media screen and (max-width: 1100px)': {
                  position: 'static',
                  marginBottom: '6rem',
                },
              }}>
              <Image
                src='/assets/section8/cardBlack.svg'
                alt='Logo'
                width={400}
              />
            </Box>
            {/* card2 */}
            <Box
              sx={{
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                transform: 'translate(1.5em,5em)',
              }}>
              <Image
                src='/assets/section8/cardPurple.svg'
                alt='Logo'
                width={400}
              />
            </Box>
          </Box>
          {/* Derecha */}
          <Box
            sx={{
              gap: '20px',
              width: '50%',
              display: 'flex',
              flexDirection: 'column',
              '@media screen and (max-width: 1100px)': {
                width: '100%',
              },
            }}>
            {/* Uno */}
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
                '&>div': { margin: '0px' },
              }}>
              <Image
                src='/assets/section8/puntero.svg'
                alt='Logo'
                width={30}
                css={{ paddingTop: '10px' }}
              />
              <Text
                size={20}
                css={{
                  paddingRight: '200px',
                  '@media screen and (max-width: 1100px)': {
                    padding: '0 20px 0 20px',
                  },
                }}>
                Individuals who would like to partner with us in expanding the
                reach and potential of SolSwipe, we have affiliate programs.
              </Text>
            </Box>
            {/* Dos */}
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
                '&>div': { margin: '0px' },
              }}>
              <Image
                src='/assets/section8/puntero.svg'
                alt='Logo'
                width={20}
                css={{ paddingTop: '10px' }}
              />
              <Text
                size={20}
                css={{
                  paddingRight: '200px',
                  '@media screen and (max-width: 1100px)': {
                    padding: '0 20px 0 20px',
                  },
                }}>
                Projects who would like to integrate Debit card utilities into
                your tokens.
              </Text>
            </Box>
            {/* Tres */}
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
                '&>div': { margin: '0px' },
              }}>
              <Image
                src='/assets/section8/puntero.svg'
                alt='Logo'
                width={22}
                css={{ paddingTop: '10px' }}
              />
              <Text
                size={20}
                css={{
                  paddingRight: '200px',
                  '@media screen and (max-width: 1100px)': {
                    padding: '0 20px 0 20px',
                  },
                }}>
                Projects from other chains who would like to integrate our
                system into your chain.
              </Text>
            </Box>
            {/* Cuatro */}
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
                '&>div': { margin: '0px' },
              }}>
              <Image
                src='/assets/section8/puntero.svg'
                alt='Logo'
                width={30}
                css={{ paddingTop: '10px' }}
              />
              <Text
                size={20}
                css={{
                  paddingRight: '200px',
                  '@media screen and (max-width: 1100px)': {
                    padding: '0 20px 0 20px',
                  },
                }}>
                Any project that wants to have a Crypto - Fiat solution via
                debit card usage for your community.
              </Text>
            </Box>
            {/* Cinco */}
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                alignItems: 'flex-start',
                '&>div': { margin: '0px' },
              }}>
              <Image
                src='/assets/section8/puntero.svg'
                alt='Logo'
                width={22}
                css={{ paddingTop: '10px' }}
              />
              <Text
                size={20}
                css={{
                  paddingRight: '200px',
                  '@media screen and (max-width: 1100px)': {
                    padding: '0 20px 0 20px',
                  },
                }}>
                White labelling our whole card providing backend system for your
                project.
              </Text>
            </Box>
          </Box>
        </Box>
        {/* Bolitas */}
        <Box sx={{ position: 'absolute', top: '0', left: '2em' }}>
          <Image src='/assets/bolita.svg' alt='bolita' width={80} />
        </Box>
        <Box sx={{ position: 'absolute', top: '2em', left: '0em' }}>
          <Image src='/assets/bolita2.svg' alt='bolita' width={40} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: '0',
            right: '0',
          }}>
          <Image src='/assets/bolita2.svg' alt='bolita' width={70} />
        </Box>
      </Container>
    </Box>
  );
};
