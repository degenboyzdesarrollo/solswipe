import { FC } from 'react';
import NextLink from 'next/link';
import { Box } from '@mui/material';
import { Container, Image, Link, Text } from '@nextui-org/react';
import { colors } from '../../const';
import { useRouter } from 'next/router';

export const Footer: FC = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        gap: '25px',
        padding: '50px 0px 25px 0px',
        background: colors.secondary,
        overflow: 'hidden',
      }}>
      <Container fluid display='flex' direction='column'>
        {/* Arriba */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingInline: '50px',
            '@media screen and (max-width: 1100px)': {
              flexDirection: 'column',
            },
          }}>
          {/* izquierda */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Image src='/assets/logoName.svg' alt='Logo' width={200} />
            <Text size='20px' css={{ textAlign: 'center' }}>
              {' '}
              Solana’s First Ever Debit Card{' '}
            </Text>
            {/* iconos */}
            <Box sx={{ display: 'flex', gap: '5px' }}>
              <NextLink href='https://discord.com/invite/solswipe'>
                <Image
                  src='/assets/footer/discord.svg'
                  alt='Logo'
                  width={30}
                  css={{ cursor: 'pointer' }}
                />
              </NextLink>
              <NextLink href='#'>
                <Image
                  src='/assets/footer/instagram.svg'
                  alt='Logo'
                  width={30}
                  css={{ cursor: 'pointer' }}
                />
              </NextLink>
              <NextLink href='https://twitter.com/solswipecard'>
                <Image
                  src='/assets/footer/twitter.svg'
                  alt='Logo'
                  width={30}
                  css={{ cursor: 'pointer' }}
                />
              </NextLink>
            </Box>
          </Box>
          {/* Derecha */}
          <Box
            sx={{
              display: 'flex',
              gap: '20px',

              '@media screen and (max-width: 1100px)': {
                flexWrap: 'wrap',
                marginTop: '25px',
              },
              '@media screen and (max-width: 1200px)': {
                flexWrap: 'wrap',
                marginTop: '50px',
              },
            }}>
            {/* //* 1 */}
            <NextLink href='/#cardTiers'>
              <Link color='text'>Card Tiers</Link>
            </NextLink>
            {/* //* 2 */}
            <NextLink href='/#advantages'>
              <Link color='text'>Advantages</Link>
            </NextLink>
            {/* //* 3 */}
            <NextLink href='/#getCards'>
              <Link color='text'>Get Cards</Link>
            </NextLink>
            {/* //* 4 */}
            <NextLink href='/nft'>
              <Link color='text'>NFT</Link>
            </NextLink>
            {/* //* 5 */}
            <NextLink href='/#partnership'>
              <Link color='text'>Partnership</Link>
            </NextLink>
            {/* //* 6 */}
            <NextLink href='/assets/whitepaper.pdf'>
              <Link color='text'>Whitepaper</Link>
            </NextLink>
          </Box>
        </Box>
        {/* Abajo    */}
        <Box
          sx={{
            gap: '10px',
            display: 'flex',
            padding: '0px 50px ',
            alignItems: 'center',
            flexDirection: 'column',
            marginTop: '25px',
          }}>
          <Box
            sx={{
              background: 'rgba(255, 255, 255, 0.1) ',
              width: '100%',
              height: '2px',
            }}></Box>
          <Text> Copyright 2022 Solswipe. All rights reserved. </Text>
        </Box>
      </Container>
    </Box>
  );
};
