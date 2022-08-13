import Head from 'next/head';
import React, { FC } from 'react';
import Resize from '../../utils/resize';
import { Footer } from '../ui/Footer';
import { Navbar } from '../ui/Navbar';
import { NavbarMobile } from '../ui/NavbarMobile';

type MainLayoutProps = {
  title?: string;
  children: React.ReactNode;
};

export const MainLayout: FC<MainLayoutProps> = ({
  title = 'SOLSWIPE',
  children,
}) => {
  const width = Resize();
  return (
    <>
      <Head>
        <title> {title} </title>
      </Head>
      {width > 768 ? <Navbar /> : <NavbarMobile />}
      <main>{children}</main>
      {/* <Footer /> */}
      <Footer />
    </>
  );
};
