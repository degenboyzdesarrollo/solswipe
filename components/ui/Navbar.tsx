import NextLink from 'next/link';
import { Box } from '@mui/material';
import { colors } from '../../const';
import { Container, Image, Link } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const Navbar = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        background: colors.secondary,
        padding: '20px 100px',
        position: 'relative',
        zIndex: 1000,
      }}>
      <Container
        fluid
        display='flex'
        justify='space-between'
        alignItems='center'>
        {/* Logo de la pagina */}
        <Box>
          <Image src='/assets/logoName.svg' alt='Logo' width={250} />
        </Box>
        {/* Menu de navbar */}
        <Box display='flex' sx={{ gap: '30px' }}>
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
      </Container>
    </Box>
  );
};
