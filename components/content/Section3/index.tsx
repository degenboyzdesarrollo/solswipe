import { Box } from '@mui/material';
import { Container, Grid, Image, Text } from '@nextui-org/react';
import React, { FC } from 'react';

export const Section3: FC = () => {
  return (
    <Container
      fluid
      display='flex'
      direction='column'
      alignItems='center'
      css={{ gap: '50px', padding: '50px 0px 25px 0px' }}
      id='roadmap'>
      <Text
        h1
        css={{
          background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          '@media screen and (max-width: 1100px)': {
            fontSize: '2.8rem',
            textAlign: 'center',
          },
        }}>
        Solswipe Roadmap
      </Text>
      <Box>
        <Grid.Container justify='center' css={{ gap: '20px' }}>
          <Grid
            xs={12}
            md={2}
            css={{
              alignItems: 'start',
              '@media screen and (max-width: 1100px)': {
                alignItems: 'center',
              },
            }}>
            <Image
              src='/assets/section3/1.svg'
              alt='Logo'
              width={400}
              css={{
                '@media screen and (max-width: 1100px)': {
                  width: '80%',
                  margin: '0px auto',
                },
              }}
            />
          </Grid>
          <Grid xs={12} md={2} css={{ alignItems: 'start' }}>
            <Image
              src='/assets/section3/2.svg'
              alt='Logo'
              width={400}
              css={{
                '@media screen and (max-width: 1100px)': {
                  width: '80%',
                  margin: '0px auto',
                },
              }}
            />
          </Grid>
          <Grid xs={12} md={2} css={{ alignItems: 'start' }}>
            <Image
              src='/assets/section3/3.svg'
              alt='Logo'
              width={400}
              css={{
                '@media screen and (max-width: 1100px)': {
                  width: '80%',
                  margin: '0px auto',
                },
              }}
            />
          </Grid>
          <Grid xs={12} md={2} css={{ alignItems: 'start' }}>
            <Image
              src='/assets/section3/4.svg'
              alt='Logo'
              width={400}
              css={{
                '@media screen and (max-width: 1100px)': {
                  width: '80%',
                  margin: '0px auto',
                },
              }}
            />
          </Grid>
          <Grid xs={12} md={2} css={{ alignItems: 'start' }}>
            <Image
              src='/assets/section3/5.svg'
              alt='Logo'
              width={400}
              css={{
                '@media screen and (max-width: 1100px)': {
                  width: '80%',
                  margin: '0px auto',
                },
              }}
            />
          </Grid>
        </Grid.Container>
      </Box>
    </Container>
  );
};
