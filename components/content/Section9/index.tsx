import React, { FC } from 'react';
import { Box, TextField } from '@mui/material';
import { colors } from '../../../const';
import { Button, Container, Text } from '@nextui-org/react';

import { InputText } from 'primereact/inputtext';

export const Section9: FC = () => {
  return (
    <Container
      display='flex'
      direction='column'
      alignItems='center'
      css={{
        gap: '25px',
        padding: '200px 0px',
        '@media screen and (max-width: 1100px)': {
          padding: '150px 0px',
        },
      }}>
      {/* Arriba */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '30px',
          width: '60%',
          '@media screen and (max-width: 1100px)': {
            width: '100%',
          },
        }}>
        <Text
          h1
          css={{
            textAlign: 'center',
            background: 'linear-gradient(to right, #7c49f1, #c9aa24)',
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
            '@media screen and (max-width: 1100px)': {
              fontSize: '2rem',
            },
          }}>
          Join Our Newsletter
        </Text>
        <Box
          sx={{
            paddingInline: '150px',
            '@media screen and (max-width: 1100px)': {
              padding: '0 2rem',
            },
          }}>
          <Text
            css={{
              color: colors.text,
              textAlign: 'center ',
            }}>
            Join now and receive latest news and updates on our partnerships and
            deals!
          </Text>
        </Box>
      </Box>
      {/* abajo */}
      <Box
        sx={{
          background: ' rgba(255, 255, 255, 0.2)',
          width: '50%',
          display: 'flex',
          alignItems: 'center',
          paddingInline: '10px',
          '.p-inputtext': {
            width: '100%',
            height: '55px',
            background: 'rgba(255, 255, 255, 0.0)',
            border: 'none',
            borderRadius: '0px',
            color: 'white',
          },
          // focus
          '.p-inputtext:enabled:focus': {
            boxShadow: 'none',
          },
          '@media screen and (max-width: 1100px)': {
            width: '90%',
          },
        }}>
        <InputText placeholder='write your email here' />

        <Button
          size='sm'
          css={{
            background:
              'linear-gradient(91.83deg, #9164FB -1.18%, #D0B450 143.13%)',
            borderRadius: '6px',
            // height: '55px',
          }}>
          Subscribe
        </Button>
      </Box>
    </Container>
  );
};
