import { Box } from '@mui/material';
import { Container, Grid, Image, Text } from '@nextui-org/react';
import React from 'react';
import { colors } from '../../../const';
import { dataTable1, dataTable2 } from '../../../data/dataTable';

export const Section5 = () => {
  return (
    <Container
      display='flex'
      direction='column'
      css={{
        gap: '30px',
        justifyContent: 'center',
        padding: '50px 0px',
      }}>
      <Box>
        <Text h2 css={{}}>
          Card Features
        </Text>
      </Box>
      <Box>
        {/* Header */}
        <Grid.Container css={{ justifyContent: 'center' }}>
          <Grid
            xs={6}
            css={{ background: 'rgb(255, 255, 255,0.3)', padding: '40px 0px' }}>
            <Image src='/assets/section5/simbolo.svg' alt='simbolo' />
          </Grid>
          <Grid
            xs={2}
            css={{
              background: colors.secondary,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}>
            <Text>Premium Black Plastic</Text>
            <Image src='/assets/section5/blackCard.svg' alt='tarjeta' />
          </Grid>
          <Grid
            xs={2}
            css={{
              background: colors.secondary,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}>
            <Text>Silver Metal</Text>
            <Image src='/assets/section5/whiteCard.svg' alt='tarjeta' />
          </Grid>
          <Grid
            xs={2}
            css={{
              background: colors.secondary,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}>
            <Text>Gold Metal</Text>
            <Image src='/assets/section5/goldCard.svg' alt='tarjeta' />
          </Grid>
        </Grid.Container>
        {/* Content */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '50px' }}>
          <Grid.Container css={{ justifyContent: 'center' }}>
            {dataTable1.map((item, index) => {
              return (
                <>
                  <Grid
                    xs={6}
                    css={{
                      background: colors.secondary,
                      borderRight: '1px solid rgb(255,255,255,0.3)',
                      borderBottom: '2px solid rgb(255,255,255,0.3)',
                      padding: '50px 50px 15px 20px',
                    }}>
                    <Text size={20}>{item.title}</Text>
                  </Grid>
                  <Grid
                    xs={2}
                    css={{
                      background: 'rgb(255,255,255,0.03)',
                      borderLeft: '1px solid rgb(255,255,255,0.3)',
                      borderRight: '1px solid rgb(255,255,255,0.3)',
                      borderBottom: '2px solid rgb(255,255,255,0.3)',
                      padding: '50px 50px 15px 50px',
                    }}>
                    <Box sx={{ width: '100%' }}>
                      <Text css={{ textAlign: 'center' }}>{item.data1}</Text>
                    </Box>
                  </Grid>
                  {/* SEGUNDO */}
                  <Grid
                    xs={2}
                    css={{
                      width: '100%',
                      background: 'rgb(255,255,255,0.03)',
                      borderLeft: '1px solid rgb(255,255,255,0.3)',
                      borderBottom: '2px solid rgb(255,255,255,0.3)',
                      padding: '50px 50px 15px 50px',
                      '@media screen and (max-width: 957px)': {
                        fontSize: '14px',
                        padding: '50px 20px 15px 20px',
                      },
                    }}>
                    <Box sx={{ width: '100%' }}>
                      <Text css={{ textAlign: 'center' }}>{item.data3}</Text>
                    </Box>
                  </Grid>
                  {/* TERCERO */}
                  <Grid
                    xs={2}
                    css={{
                      background: 'rgb(255,255,255,0.03)',
                      borderLeft: '1px solid rgb(255,255,255,0.3)',
                      borderRight: '1px solid rgb(255,255,255,0.3)',
                      borderBottom: '2px solid rgb(255,255,255,0.3)',
                      padding: '50px 50px 15px 50px',
                      '@media screen and (max-width: 957px)': {
                        fontSize: '14px',
                        padding: '50px 20px 15px 20px',
                      },
                    }}>
                    <Box sx={{ width: '100%' }}>
                      <Text css={{ textAlign: 'center' }}>{item.data2}</Text>
                    </Box>
                  </Grid>
                </>
              );
            })}
            <Grid
              xs={12}
              css={{
                width: '100%',
                background: colors.secondary,
                padding: '20px 0px',
              }}>
              <Box sx={{ width: '100%' }}>
                <Text size={18} css={{ textAlign: 'center' }}>
                  Fees includes card, freight charges and opening of offshore
                  bank account (No bank book).
                </Text>
              </Box>
            </Grid>
          </Grid.Container>
          <Grid.Container css={{ justifyContent: 'center' }}>
            {dataTable2.map((item, index) => {
              if (item.data2 && item.data3) {
                return (
                  <>
                    <Grid
                      xs={6}
                      css={{
                        background: colors.secondary,
                        borderRight: '1px solid rgb(255,255,255,0.3)',
                        borderBottom: '2px solid rgb(255,255,255,0.3)',
                        padding: '50px 50px 15px 20px',
                      }}>
                      <Text size={20}>{item.title}</Text>
                    </Grid>
                    <Grid
                      xs={2}
                      css={{
                        background: 'rgb(255,255,255,0.03)',
                        borderLeft: '1px solid rgb(255,255,255,0.3)',
                        borderRight: '1px solid rgb(255,255,255,0.3)',
                        borderBottom: '2px solid rgb(255,255,255,0.3)',
                        padding: '50px 50px 15px 50px',
                        '@media screen and (max-width: 957px)': {
                          padding: '50px 0px 15px 0px',
                        },
                      }}>
                      <Box sx={{ width: '100%' }}>
                        <Text
                          css={{
                            textAlign: 'center',
                            '@media screen and (max-width: 957px)': {
                              fontSize: '14px',
                            },
                          }}>
                          {item.data1}
                        </Text>
                      </Box>
                    </Grid>
                    {/* SEGUNDP */}
                    <Grid
                      xs={2}
                      css={{
                        width: '100%',
                        background: 'rgb(255,255,255,0.03)',
                        borderLeft: '1px solid rgb(255,255,255,0.3)',
                        borderBottom: '2px solid rgb(255,255,255,0.3)',
                        padding: '50px 50px 15px 50px',
                        '@media screen and (max-width: 957px)': {
                          padding: '50px 0px 15px 0px',
                        },
                      }}>
                      <Box
                        sx={{
                          width: '100%',
                          '@media screen and (max-width: 957px)': {
                            fontSize: '14px',
                          },
                        }}>
                        <Text css={{ textAlign: 'center' }}>{item.data3}</Text>
                      </Box>
                    </Grid>
                    {/* TERCERo */}
                    <Grid
                      xs={2}
                      css={{
                        background: 'rgb(255,255,255,0.03)',
                        borderLeft: '1px solid rgb(255,255,255,0.3)',
                        borderRight: '1px solid rgb(255,255,255,0.3)',
                        borderBottom: '2px solid rgb(255,255,255,0.3)',
                        padding: '50px 50px 15px 50px',
                        '@media screen and (max-width: 957px)': {
                          padding: '50px 0px 15px 0px',
                        },
                      }}>
                      <Box sx={{ width: '100%' }}>
                        <Text
                          css={{
                            textAlign: 'center',
                            '@media screen and (max-width: 957px)': {
                              fontSize: '14px',
                            },
                          }}>
                          {item.data2}
                        </Text>
                      </Box>
                    </Grid>
                  </>
                );
              } else {
                return (
                  <>
                    <Grid
                      xs={6}
                      css={{
                        background: colors.secondary,
                        borderRight: '1px solid rgb(255,255,255,0.3)',
                        borderBottom: '2px solid rgb(255,255,255,0.3)',
                        padding: '50px 50px 15px 20px',
                      }}>
                      <Text size={20}>{item.title}</Text>
                    </Grid>
                    <Grid
                      xs={6}
                      css={{
                        background: 'rgb(255,255,255,0.03)',
                        borderLeft: '1px solid rgb(255,255,255,0.3)',
                        borderBottom: '2px solid rgb(255,255,255,0.3)',
                        padding: '50px 50px 15px 50px',
                      }}>
                      <Box sx={{ width: '100%' }}>
                        <Text css={{ textAlign: 'center' }}>{item.data1}</Text>
                      </Box>
                    </Grid>
                  </>
                );
              }
            })}
            <Grid
              xs={12}
              css={{
                width: '100%',
                background: colors.secondary,
                padding: '20px 0px',
              }}>
              <Box sx={{ width: '100%' }}>
                <Text size={18} css={{ textAlign: 'center' }}>
                  All fees with * are normal fees chargeable by the bank / atm.
                </Text>
              </Box>
            </Grid>
          </Grid.Container>
        </Box>
      </Box>
    </Container>
  );
};
