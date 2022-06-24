import React from 'react';

const UpcommingAppoinment = ({ darkMode }) => {
  return (
    <div className={`flex flex-col gap-6`}>
      <div className="text-darkText flex justify-center pt-6 relative">
        <div className='w-[48px] lg:w-[63px]  bg-white pb-1  text-darkText rounded-xl border border-["#EDEBEB"] flex flex-col items-center justify-center -mr-4 z-10'>
          <p className="font-medium text-[10px] lg:text-[13px] opacity-60">
            2022
          </p>
          <p className="font-semibold text-sm lg:text-xl opacity-60">13</p>
          <p className="font-medium text-sm lg:text-xl opacity-60">Sep</p>
        </div>
        <div
          className={`pb-1 lg:w-[342px] rounded-lg border border-petch flex flex-col gap-1 px-6 z-0 pt-2 ${
            darkMode ? 'bg-darkMode4' : 'bg-lightPetch'
          }`}
        >
          <p
            className={`font-medium text-sm lg:text-lg ${
              darkMode ? 'text-darkModeText' : 'text-lightDark'
            }`}
          >
            Dr. Muhammad Abdul Hussein
          </p>
          <p
            className={`text-[13px] ${
              darkMode ? 'text-darkModeText' : 'text-lightDark'
            }`}
          >
            Cardiologist
          </p>
          <div className="flex gap-[10px]">
            <p className="px-2 py-1 bg-white rounded-md text-xs md:text-sm">
              <span className="opacity-60">Slot</span>{' '}
              <span className="font-medium">Morning</span>{' '}
            </p>
            <p className="px-2 py-1 bg-white rounded-md text-xs  md:text-sm">
              <span className="opacity-60 ">Time: </span>{' '}
              <span className="font-medium">10.00AM</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingAppoinment;
