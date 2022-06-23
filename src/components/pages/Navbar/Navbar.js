import React from 'react';
import dropicon from '../../../assets/icon/Icon_downArrow.png';
import avatart from '../../../assets/icon/Avatar.png';
import toggleBtn from '../../../assets/icon/Toggle button (1).png';

const Navbar = () => {
  return (
    <section className="ml-[76px] pt-8 bg-light">
      <div className='flex justify-between'>
        <p className="font-bold text-2xl text-lightDark pl-14">Home</p>
        <div className='flex pr-7 items-center'>
          <img src={toggleBtn} alt="" className='w-[83px] h-[40px] mr-6 hover:cursor-pointer'/>
          <img src={avatart} alt="" className='w-12 h-12'/>
          <img src={dropicon} alt="" className='w-4 h-3' />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
