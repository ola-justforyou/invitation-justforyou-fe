import { Box, Skeleton } from '@mui/material';
import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import ImageWireframe from '../../../assets/images/img-wireframe.png';
// import 'styles.css';

const CoverInvitation = () => {
  return (
    <div className='w-screen h-screen text-gray-600 flex flex-col relative'>
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0'>
        <ImageIcon sx={{ fontSize: '10em', color: 'grey', opacity: '0.5' }} />
      </div>
      {/* <div className='absolute w-screen h-screen bg-black z-10 opacity-40'></div> */}
      <div className='aboslute w-screen h-screen z-20 flex'>
        <div className='container h-100   m-auto'>
          <div className='mx-16 flex flex-col gap-y-8 relative -top-16'>
            {/* <Skeleton
              width={'23em'}
              height={'12em'}
              sx={{ margin: '0 auto ' }}
            /> */}
            <h4 className=' font-bold text-2xl text-center '>The Wedding of</h4>
            <h1 className=' font-semibold text-4xl text-center border-b-4 mt-6'>
              Abi dan Nui
            </h1>
            <h2 className=' text-3xl text-center '>
              JL. Di Lampung Tengah No.1 Mungkin
            </h2>
            <div className='text-center flex-col mt-40 absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <h5 className='font-bold'>Senin</h5>
              <p>29 / 05 / 2023</p>
              <p>09.00 - 13.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverInvitation;
