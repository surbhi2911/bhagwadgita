import React from 'react';
import Landingsec from './Landingsec';
import TransformLife from './TransformLife';
import LifeQue from './LifeQue';
import AdhyatmikQue from './AdhyatmikQue';
import Imagegrid from './Imagegrid';
import Tickets from './Tickets';

import Footer from './Footer';

function Home() {
  return (
    <>
      <Landingsec />
      <TransformLife/>
      <LifeQue/>
      <AdhyatmikQue/>
      <Imagegrid/>
      <Tickets/>
 
      <Footer/>
    </>
  );
}

export default Home;
