import { Box } from '@mui/material';
import { Container, Grid, Image, Row, Text } from '@nextui-org/react';
import React from 'react';
import { colors } from '../../../../const';

export const Section2 = () => {
  return (
    <Box sx={{ position: 'relative' }}>
      <Container
        fluid
        display="flex"
        direction="column"
        alignItems="center"
        css={{
          gap: '25px',
          padding: '100px 0px',
        }}
      >
        {/* Arriba */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '30px',
            width: '50%',
          }}
        >
          <Text
            h1
            css={{
              textAlign: 'center',
              background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
              '-webkit-background-clip': 'text',
              '-webkit-text-fill-color': 'transparent',
              '@sm': {
                fontSize: '4rem',
              },
              fontSize: '2rem',
            }}
          >
            Solswipe NFT Utility
          </Text>
          {/* <Box sx={{ paddingInline: '50px' }}>
            <Text
              size={20}
              css={{
                color: colors.text,
                textAlign: 'center ',
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              cursus erat quis urna consectetur,
            </Text>
          </Box> */}
        </Box>
        {/* abajo */}
        <Grid.Container
          css={{
            padding: '0px 0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '@sm': {
              padding: '0px 50px',
            },
          }}
        >
          {/* UNO */}
          <Grid
            xs={12}
            md={4}
            css={{
              padding: '70px 30px',
              '@media screen and (max-width: 1100px)': {
                padding: '10px 30px',
              },
            }}
            justify="center"
          >
            <Box
              sx={{
                width: '100%',
                gap: '25px',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '60px 30px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <Row
                css={{ justifyContent: 'start', '&>div': { margin: '0px' } }}
              >
                <Image src="/assets/utility/utility-icon-1.svg" alt="manita" />
              </Row>
              <Text
                h3
                css={{
                  background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}
              >
                Holder’s Benefit
              </Text>
              <Box
                sx={{
                  paddingRight: '50px',
                }}
              >
                <Text
                  size={20}
                  css={{
                    color: colors.text,
                  }}
                >
                  All holders will have Holder’s Rewards + Rebates
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
                padding: '10px 30px',
              },
            }}
            justify="center"
          >
            <Box
              sx={{
                width: '100%',
                gap: '25px',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '60px 30px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <Row
                css={{ justifyContent: 'start', '&>div': { margin: '0px' } }}
              >
                <Image src="/assets/utility/utility-icon-2.svg" alt="manita" />
              </Row>
              <Text
                h3
                css={{
                  background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}
              >
                Deduction Fees
              </Text>
              <Box sx={{ paddingRight: '50px' }}>
                <Text
                  size={20}
                  css={{
                    color: colors.text,
                  }}
                >
                  Special deduction of loading fees for all NFT
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
                padding: '10px 30px',
              },
            }}
            justify="center"
          >
            <Box
              sx={{
                width: '100%',
                gap: '25px',
                display: 'flex',
                alignItems: 'start',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '60px 30px',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            >
              <Row
                css={{ justifyContent: 'start', '&>div': { margin: '0px' } }}
              >
                <Image src="/assets/utility/utility-icon-3.svg" alt="manita" />
              </Row>
              <Text
                h3
                css={{
                  background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}
              >
                Rewards
              </Text>
              <Box sx={{ paddingRight: '50px' }}>
                <Text
                  size={20}
                  css={{
                    color: colors.text,
                  }}
                >
                  Rewards will come from Royalties & % of the loading fees
                </Text>
              </Box>
            </Box>
          </Grid>
        </Grid.Container>
        {/* Bolitas */}
        <Box sx={{ position: 'absolute', bottom: 0, right: 0 }}>
          <Image src="/assets/bolita.svg" alt="bolitas" width={130} />
        </Box>
        <Box sx={{ position: 'absolute', top: '5em', left: '-5em' }}>
          <Image src="/assets/bolita.svg" alt="bolitas" width={130} />
        </Box>
      </Container>
    </Box>
  );
};
