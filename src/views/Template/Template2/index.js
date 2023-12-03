import { Box, Skeleton } from '@mui/material';
import React from 'react';

import CoverInvitation from '../Template2/CoverInvitation';
import '../Template2/style.css';
const Template2 = () => {
  return (
    <div className='w-screen h-min-screen    flex flex-col relative'>
      <CoverInvitation />
      <h1 className='m-auto'>HELLOWORLD</h1>
    </div>
  );
};

export default Template2;
