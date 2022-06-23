import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SideBar from './SideBar';
import sample from '../../../assets/icon/Svg_sample1.png';
import heart from '../../../assets/icon/Icon_Heart.png';
import bloodPresure from '../../../assets/icon/Icon_Blood_pressure.png';
import bloodSugar from '../../../assets/icon/Icon_Blood_sugar.png';
import bubble from '../../../assets/icon/Icon_bubble.png';
import vector from '../../../assets/icon/Vector (1).png';
import TodoList from './TodoList';
import UpcommingAppoinment from './UpcommingAppoinment';

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
      <div className="ml-[76px] pl-14 bg-light  pb-[70px] font-poppins">
        <div className=" grid lg:grid-cols-2 pt-4">
          <div>
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-[718px] pt-7">
              <div className="shadow-lg rounded-lg p-3 flex flex-col gap-2 bg-white">
                <img src={heart} alt="heart" className="w-10 h-10" />
                <p className="font-semibold text-[12.42px]">Pulse Count</p>
                <p className="text-base">60 bpm</p>
                <p className="text-xs text-green-400 font-medium flex items-center gap-2">
                  <img src={vector} alt="" />
                  <span>Normal</span>
                </p>
              </div>
              <div className="shadow-lg rounded-lg p-3 flex flex-col gap-2 bg-white">
                <img
                  src={bloodPresure}
                  alt="bloodPresure"
                  className="w-10 h-10"
                />
                <p className="font-semibold text-[12.42px]">Blood Pressure</p>
                <p>110/70 mmHg</p>
                <p className="text-xs text-green-400 font-medium flex items-center gap-2">
                  <img src={vector} alt="" />
                  <span> Slightly higher</span>
                </p>
              </div>
              <div className="shadow-lg rounded-lg p-3 flex flex-col gap-2 bg-white">
                <img src={bubble} alt="bubble" className="w-10 h-10" />
                <p className="font-semibold text-[12.42px]">
                  Oxygen Saturation
                </p>
                <p>97 %</p>
                <p className="text-xs text-green-400 font-medium flex items-center gap-2">
                  <img src={vector} alt="" />
                  <span> Slightly higher</span>
                </p>
              </div>
              <div className="shadow-lg rounded-lg p-3 flex flex-col gap-2 bg-white">
                <img src={bloodSugar} alt="bloodSugar" className="w-10 h-10" />
                <p className="font-semibold text-[12.42px]">Glucose Count</p>
                <p>100 mm/dL</p>
                <p className="text-xs text-green-400 font-medium flex items-center gap-2">
                  <img src={vector} alt="" />
                  <span>Normal</span>
                </p>
              </div>
            </div>
            <TodoList />
          </div>
          {/* upcomming appoinment */}
          <div className="bg-white p-4 ml-40 rounded-lg mr-6 h-[570px]">
            <p className="font-medium font-poppins">Upcoming Appointments</p>
            <UpcommingAppoinment />
            <UpcommingAppoinment />
            <UpcommingAppoinment />
            <UpcommingAppoinment />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 w-[718px] pt-7"></div>
      </div>
    </>
  );
};

export default Home;
