import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SideBar from './SideBar';
import sample from '../../../assets/icon/Svg_sample1.png';
import heart from '../../../assets/icon/Icon_Heart.png';
import bloodPresure from '../../../assets/icon/Icon_Blood_pressure.png';
import bloodSugar from '../../../assets/icon/Icon_Blood_sugar.png';
import bubble from '../../../assets/icon/Icon_bubble.png';
import vector from '../../../assets/icon/Vector (1).png';
import uncheck from '../../../assets/icon/Icon_Vector_Uncheck.png';
import check from '../../../assets/icon/Icon_Vector_Check.png';

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  const changeShowHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };

  return (
    <>
      <Navbar />
      <SideBar
        changeShowHandler={changeShowHandler}
        showSideBar={showSideBar}
      />
      <div className="ml-[76px] pl-14 bg-light  pb-[70px]">
        <div className=" grid lg:grid-cols-2 gap-40 pt-4">
          <div className="w-[718px] h-[213px] bg-gradient-to-r from-hotpink to-orange px-4 rounded-lg flex md:flex-row flex-col justify-between items-center lg:gap-28">
            <img src={sample} alt="" className="w-[230px] h-[230px]" />
            <div className="text-white ">
              <p className="text-2xl font-semibold mb-3">Hello, Mary Jane!</p>
              <p className="leading-8">
                Stay Up-to-Date with your appointments. You Have No pending
                Reports
              </p>
            </div>
          </div>
          <div>2</div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-[718px] pt-7">
          <div className="shadow-lg rounded-lg p-3 flex flex-col gap-2 bg-white">
            <img src={heart} alt="heart" className="w-10 h-10" />
            <p className="font-bold text-sm">Pulse Count</p>
            <p className="text-base">60 bpm</p>
            <p className="text-xs text-green-400 font-semibold flex items-center gap-2">
              <img src={vector} alt="" />
              <span>Normal</span>
            </p>
          </div>
          <div className="shadow-lg rounded-lg p-3 flex flex-col gap-2 bg-white">
            <img src={bloodPresure} alt="bloodPresure" className="w-10 h-10" />
            <p className="font-bold text-sm">Blood Pressure</p>
            <p>110/70 mmHg</p>
            <p className="text-xs text-green-400 font-semibold flex items-center gap-2">
              <img src={vector} alt="" />
              <span> Slightly higher</span>
            </p>
          </div>
          <div className="shadow-lg rounded-lg p-3 flex flex-col gap-2 bg-white">
            <img src={bubble} alt="bubble" className="w-10 h-10" />
            <p className="font-bold text-sm">Oxygen Saturation</p>
            <p>97 %</p>
            <p className="text-xs text-green-400 font-semibold flex items-center gap-2">
              <img src={vector} alt="" />
              <span> Slightly higher</span>
            </p>
          </div>
          <div className="shadow-lg rounded-lg p-3 flex flex-col gap-2 bg-white">
            <img src={bloodSugar} alt="bloodSugar" className="w-10 h-10" />
            <p className="font-bold text-sm">Glucose Count</p>
            <p>100 mm/dL</p>
            <p className="text-xs text-green-400 font-semibold flex items-center gap-2">
              <img src={vector} alt="" />
              <span>Normal</span>
            </p>
          </div>
        </div>
        <div className="w-[718px] mt-9 px-7 bg-white lg:pb-20">
          <p className="mb-2 font-semibold text-base">To-Do List</p>
          <div className="flex justify-between pb-6">
            <textarea
              type="text"
              className="border lg:w-[596px] h-[76px]"
            ></textarea>
            <button className="ml-4 self-start px-8 py-2 text-white rounded-md  bg-gradient-to-r from-hotpink to-orange">
              Add
            </button>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-4">
              <img src={uncheck} alt="uncheck" className="w-7 h-7" />
              <p className="font-semibold">Select All</p>
            </div>
            <button className="self-start px-8 py-2 text-white rounded-md  bg-gradient-to-r from-hotpink to-orange">
              Done
            </button>
          </div>

          <div className='flex gap-4 items-center mt-8'>
            <img src={check} alt="check" lassName="w-6 h-6"/>
            <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p className='text-sm font-semibold text-lightText'>Last Added: 10 sep 2022</p>
          </div>
          <div className='flex gap-4 items-center mt-8'>
            <img src={uncheck} alt="uncheck" lassName="w-6 h-6"/>
            <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p className='text-sm font-semibold text-lightText'>Last Added: 10 sep 2022</p>
          </div>
          <div className='flex gap-4 items-center mt-8'>
            <img src={uncheck} alt="uncheck" lassName="w-6 h-6"/>
            <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p className='text-sm font-semibold text-lightText'>Last Added: 10 sep 2022</p>
          </div>
          <div className='flex gap-4 items-center mt-8'>
            <img src={uncheck} alt="uncheck" lassName="w-6 h-6"/>
            <p className='text-sm font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            <p className='text-sm font-semibold text-lightText'>Last Added: 10 sep 2022</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
