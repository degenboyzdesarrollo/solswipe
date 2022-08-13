import { Box } from '@mui/material';
import { Container, Grid, Image, Row, Text } from '@nextui-org/react';
import React from 'react';
import { colors } from '../../../const';

export const Section6 = () => {
  return (
    <Box id='advantages' sx={{ position: 'relative' }}>
      <Container
        fluid
        display='flex'
        direction='column'
        alignItems='center'
        css={{
          gap: '25px',
          padding: '100px 0px',
        }}>
        {/* Arriba */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            width: '50%',
          }}>
          <Text
            h1
            css={{
              textAlign: 'center',
              background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
            }}>
            Advantages
          </Text>
        </Box>
        {/* abajo */}
        <Grid.Container
          css={{
            padding: '0px 50px',
            display: 'flex',
            justifyContent: 'center',
            '@media screen and (max-width: 1100px)': {
              padding: 0,
            },
          }}>
          {/* UNO */}
          <Grid
            xs={12}
            md={4}
            css={{
              padding: '70px 30px',
              '@media screen and (max-width: 1100px)': {
                padding: '30px',
              },
            }}>
            <Box
              sx={{
                gap: '25px',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '70px 30px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}>
              <Row
                css={{ justifyContent: 'start', '&>div': { margin: '0px' } }}>
                <Image src='/assets/section6/manita.svg' alt='manita' />
              </Row>
              <Text
                h3
                css={{
                  background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}>
                Easy Top Up
              </Text>
              <Box sx={{ paddingRight: '50px' }}>
                <Text
                  size={20}
                  css={{
                    color: colors.text,
                    '@media screen and (max-width: 1100px)': {
                      fontSize: '1.6rem',
                    },
                  }}>
                  Firts debit card to allow crypto reloading via phatom &
                  metamask.
                </Text>
              </Box>
            </Box>
          </Grid>
          {/* DOS */}
          <Grid
            xs={12}
            md={4}
            css={{
              padding: '70px 30px',
              '@media screen and (max-width: 1100px)': {
                padding: '30px',
              },
            }}>
            <Box
              sx={{
                gap: '25px',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '70px 30px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}>
              <Row
                css={{ justifyContent: 'start', '&>div': { margin: '0px' } }}>
                <Image src='/assets/section6/flechitas.svg' alt='manita' />
              </Row>
              <Text
                h3
                css={{
                  background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}>
                Flexible
              </Text>
              <Box sx={{ paddingRight: '50px' }}>
                <Text
                  size={20}
                  css={{
                    color: colors.text,
                    '@media screen and (max-width: 1100px)': {
                      fontSize: '1.6rem',
                    },
                  }}>
                  Supports SOL/USDC and tokens from major chains.
                </Text>
              </Box>
            </Box>
          </Grid>
          {/* TRES */}
          <Grid
            xs={12}
            md={4}
            css={{
              padding: '70px 30px',
              '@media screen and (max-width: 1100px)': {
                padding: '30px',
              },
            }}>
            <Box
              sx={{
                gap: '25px',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '70px 30px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}>
              <Row
                css={{ justifyContent: 'start', '&>div': { margin: '0px' } }}>
                <Image src='/assets/section6/mundo.svg' alt='manita' />
              </Row>
              <Text
                h3
                css={{
                  background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}>
                Avalible Worldwide
              </Text>
              <Box sx={{ paddingRight: '50px' }}>
                <Text
                  size={20}
                  css={{
                    color: colors.text,
                    '@media screen and (max-width: 1100px)': {
                      fontSize: '1.6rem',
                    },
                  }}>
                  Can be used in any POS, online sales, and Visa-accepting ATM.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Grid.Container>
        {/* Bolitas */}
        <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
          <Image src='/assets/bolita.svg' alt='bolitas' width={130} />
        </Box>
        <Box sx={{ position: 'absolute', top: '5em', left: '-5em' }}>
          <Image src='/assets/bolita.svg' alt='bolitas' width={130} />
        </Box>
      </Container>
    </Box>
  );
};
