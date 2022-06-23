import React from 'react';
import dropicon from '../../../assets/icon/Icon_downArrow.png';
import avatart from '../../../assets/icon/Avatar.png';
import toggleBtn from '../../../assets/icon/Toggle button (1).png';
import toggleBtnDark from '../../../assets/icon/Toggle button (2).png';
import darkDrop from '../../../assets/icon/downDark.png';

const Navbar = ({ darkModeHandler, darkMode }) => {
  return (
    <section
      className={`ml-[76px] pt-8 hidden  ${
        darkMode ? 'bg-gradient-to-r from-darkMode1 to-darkMode2' : 'bg-light'
      }`}
    >
      <div className="flex justify-between">
        <p
          className={`font-bold text-2xl text-lightDark pl-14 ${
            darkMode ? 'text-white' : 'text-darkText'
          }`}
        >
          Home
        </p>
        <div className="flex pr-7 items-center">
          {!darkMode && (
            <img
              src={toggleBtn}
              alt=""
              className="w-[83px] h-[40px] mr-6 hover:cursor-pointer"
              onClick={darkModeHandler}
            />
          )}
          {darkMode && (
            <img
              src={toggleBtnDark}
              alt=""
              className="w-[83px] h-[40px] mr-6 hover:cursor-pointer"
              onClick={darkModeHandler}
            />
          )}
          <img src={avatart} alt="" className="w-12 h-12" />
          {!darkMode && <img src={dropicon} alt="" className="w-4 h-4 ml-1" />}
          {darkMode && <img src={darkDrop} alt="" className="w-4 h-2 ml-1" />}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
