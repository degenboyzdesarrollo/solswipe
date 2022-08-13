import { Box } from '@mui/material';
import { NextPage } from 'next';
import React from 'react';
import { Section1 } from '../../components/content/Utility/Section1';
import { Section2 } from '../../components/content/Utility/Section2';
import { MainLayout } from '../../components/layout/MainLayout';

const UtilityPage: NextPage = () => {
  return (
    <MainLayout>
      <Section1 />
      <Section2 />
    </MainLayout>
  );
};

export default UtilityPage;
