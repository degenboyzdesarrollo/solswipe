import type { NextPage } from 'next';
import Section1 from '../components/content/Section1';
import { Section2 } from '../components/content/Section2';
import { Section3 } from '../components/content/Section3';
import { Section4 } from '../components/content';
import { Section5 } from '../components/content/Section5';
import { Section6 } from '../components/content/Section6';
import { Section7 } from '../components/content/Section7';
import { Section8 } from '../components/content/Section8';
import { Section9 } from '../components/content/Section9';
import { MainLayout } from '../components/layout/MainLayout';
import { TableSlider } from '../components/ui/TableSlider';
import Resize from '../utils/resize';
import { RoadmapSlider } from '../components/ui/RoadmapSlider';

const Home: NextPage = () => {
  const width = Resize();
  return (
    <MainLayout>
      <Section1 />
      <Section2 />
      {width > 1100 ? <Section3 /> : <RoadmapSlider />}
      <Section4 />
      {width > 768 ? <Section5 /> : <TableSlider />}
      {/* <Section5 /> */}
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
    </MainLayout>
  );
};

export default Home;
