import NextLink from 'next/link';
import { Box } from '@mui/material';
import { Container, Image, Link } from '@nextui-org/react';
import { colors } from '../../const';
import { Dropdown } from '@nextui-org/react';
import { useRouter } from 'next/router';

export const NavbarMobile = () => {
  const router = useRouter();
  return (
    <Box
      sx={{
        background: colors.secondary,
        padding: '20px 0px',
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
          <Image src='/assets/logoName.svg' alt='Logo' width={150} />
        </Box>
        {/* Menu de navbar */}
        <Box>
          <Dropdown>
            <Dropdown.Button light color='secondary'>
              <Image src='/assets/hamburgerMenu.svg' alt='menu' />
            </Dropdown.Button>
            <Dropdown.Menu
              color='secondary'
              variant='flat'
              aria-label='Static Actions'
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                alignItems: 'end',
                width: '100%',
              }}>
              {/* //* 1 */}
              <Dropdown.Item key='Card Tiers' textValue='Card Tiers'>
                <NextLink href='/#cardTiers'>
                  <Link color='text'>Card Tiers</Link>
                </NextLink>
              </Dropdown.Item>
              <Dropdown.Item key='Advantages' textValue='Advantages'>
                {/* //* 2 */}
                <NextLink href='/#advantages'>
                  <Link color='text'>Advantages</Link>
                </NextLink>
              </Dropdown.Item>
              <Dropdown.Item key='Get Cards' textValue='Get Cards'>
                {/* //* 3 */}
                <NextLink href='/#getCards'>
                  <Link color='text'>Get Cards</Link>
                </NextLink>
              </Dropdown.Item>
              <Dropdown.Item key='nft' textValue='nft'>
                {/* //* 5 */}
                <NextLink href='/nft'>
                  <Link color='text'>NFT</Link>
                </NextLink>
              </Dropdown.Item>
              <Dropdown.Item key='Partnership' textValue='Partnership'>
                {/* //* 4 */}
                <NextLink href='/#partnership'>
                  <Link color='text'>Partnership</Link>
                </NextLink>
              </Dropdown.Item>
              <Dropdown.Item key='Whitepaper' textValue='Whitepaper'>
                {/* //* 6 */}
                <NextLink href='/assets/whitepaper.pdf'>
                  <Link color='text'>Whitepaper</Link>
                </NextLink>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Box>
      </Container>
    </Box>
  );
};
