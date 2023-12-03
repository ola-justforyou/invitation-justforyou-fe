import React from 'react';
import ImageIcon from '@mui/icons-material/Image';
import CoverBackground from '../../../../assets/images/CoverUndangan/template2.png';

const CoverInvitation = () => {
  return (
    <div className='absolute   text-white'>
      <img
        src={CoverBackground}
        className='absolute object-cover z-0 w-screen h-screen  flex'
      />
      <div className='absolute bottom-0 w-screen h-[75vh]  z-0   bg-gradient-to-t from-[#171717] to-transparent'></div>

      <div className='aboslute w-screen h-screen z-30 flex'>
        <div className='container h-100   m-auto'>
          <div className='mx-16 flex flex-col  relative -top-16'>
            {/* <h4 className=' font-bold text-2xl text-center '>The Wedding of</h4> */}
            <h1 className='mx-auto font-semibold text-6xl sm:text-7xl text-center border-b-2 mt-6 pb-2   px-0 sm:px-24'>
              Abi dan Nui
            </h1>
            <div className='flex flex-col w-full absolute left-1/2 transform -translate-x-1/2 top-60  sm:top-52'>
              <h2 className='text-xl sm:text-2xl text-center  font-bold'>
                Ahmad Agus dan Partner
              </h2>
              <h2 className='text-center mt-4 text-teal-400 text-xs sm:text-lg '>
                Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu dan
                Saudara/i untuk menghadiri acara pernikahan kami.
              </h2>
              <button className='text-center text-sm font-medium bg-teal-100 text-teal-600 mx-auto px-4 py-2 rounded-2xl mt-6 w-full sm:w-48'>
                Buka Undangan
              </button>
            </div>

            {/* <div className='text-center flex-col mt-40 absolute top-80 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
              <h5 className='font-bold'>Senin</h5>
              <p>29 / 05 / 2023</p>
              <p>09.00 - 13.00</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverInvitation;
