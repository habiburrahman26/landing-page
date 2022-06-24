import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import SideBar from './SideBar';
import sample from '../../../assets/icon/Svg_sample1.png';
import heart from '../../../assets/icon/Icon_Heart.png';
import bloodPresure from '../../../assets/icon/Icon_Blood_pressure.png';
import bloodSugar from '../../../assets/icon/Icon_Blood_sugar.png';
import bubble from '../../../assets/icon/Icon_bubble.png';
import vector from '../../../assets/icon/Vector (1).png';
import darkHeart from '../../../assets/icon/darkHert.png';
import darkBloodPresure from '../../../assets/icon/darkBloodPresure.png';
import darkBubble from '../../../assets/icon/darkBubble.png';
import darkBloodSugar from '../../../assets/icon/bloodDark.png';
import TodoList from './TodoList';
import UpcommingAppoinment from './UpcommingAppoinment';
import CovidUpdates from './CovidUpdates';
import Service from './Service';

const Home = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const changeShowHandler = () => {
    setShowSideBar((prevState) => !prevState);
  };

  const darkModeHandler = () => {
    setDarkMode((prevState) => !prevState);
  };

  return (
    <>
      <Navbar darkMode={darkMode} darkModeHandler={darkModeHandler} />
      <SideBar
        changeShowHandler={changeShowHandler}
        showSideBar={showSideBar}
        darkMode={darkMode}
      />
      <div
        className={`overflow-hidden md:ml-[45px] xl:ml-[76px] pl-0 md:pl-14 pb-[70px] font-poppins ${
          darkMode ? 'bg-gradient-to-r from-darkMode1 to-darkMode2' : 'bg-light'
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-5 xl:grid-cols-5 lg:gap-2 xl:gap-16 2xl:gap-40 pt-0 md:pt-4">
          <div className="md:row-start-1 md:row-end-2 md:col-span-5 lg:col-span-3 xl:col-span-3 md:mr-5 mr-0">
            <div className="pb-10 lg:h-[213px] bg-gradient-to-r from-hotpink to-orange px-4 md:rounded-lg flex flex-col items-center md:flex-row md:justify-between md:items-center gap-8 md:gap-6">
              <img
                src={sample}
                alt=""
                className="w-[216px] h-[216px] lg:w-[230px] lg:h-[230px]"
              />
              <div className="text-white text-center">
                <p className="text-xl lg:text-2xl font-semibold mb-3">
                  Hello, Mary Jane!
                </p>
                <p className="leading-8 text-sm md:text-base">
                  Stay Up-to-Date with your appointments. You Have No pending
                  Reports
                </p>
              </div>
            </div>
            {/* Services */}
            <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-3 xl:gap-8 pt-7 px-4 lg:px-0">
              <Service
                darkMode={darkMode}
                name="Pulse Count"
                bpm="60 bpm"
                image1={heart}
                image2={darkHeart}
                image3={vector}
                condition="Normal"
              />

              <Service
                darkMode={darkMode}
                name="Blood Pressure"
                bpm="110/70 mmHg"
                image1={bloodPresure}
                image2={darkBloodPresure}
                image3={vector}
                condition="lightly higher"
              />
              <Service
                darkMode={darkMode}
                name="Oxygen Saturation"
                bpm="97 %"
                image1={bubble}
                image2={darkBubble}
                image3={vector}
                condition="Slightly higher"
              />
              <Service
                darkMode={darkMode}
                name="Glucose Count"
                bpm="100 mm/dL"
                image1={bloodSugar}
                image2={darkBloodSugar}
                image3={vector}
                condition="Normal"
              />
            </div>
            {/* Todo list */}
            <TodoList darkMode={darkMode} />
          </div>
          {/* upcomming appoinment */}
          <section className="md:col-span-5 lg:col-span-2 mx-3 mt-4 md:-ml-1 md:mr-4 md:mt-4 lg:mr-6">
            <div
              className={`p-4 rounded-lg ${
                darkMode ? 'bg-darkMode3' : 'bg-white'
              }`}
            >
              <p
                className={`font-medium font-poppins ${
                  darkMode ? 'text-darkModeText' : 'text-lightDark'
                }`}
              >
                Upcoming Appointments
              </p>
              <UpcommingAppoinment darkMode={darkMode} />
              <UpcommingAppoinment darkMode={darkMode} />
              <UpcommingAppoinment darkMode={darkMode} />
              <UpcommingAppoinment darkMode={darkMode} />
            </div>
            <CovidUpdates darkMode={darkMode} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Home;
