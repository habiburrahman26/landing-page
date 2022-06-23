import React from 'react';
import serviceDrop from '../../../assets/icon/serviceDrop.png'

const Service = ({
  image1,
  image2,
  image3,
  bpm,
  name,
  condition,
  darkMode,
}) => {
  return (
    <div
      className={`shadow-lg rounded-lg p-3 flex flex-col gap-0 md:gap-2 ${
        darkMode ? 'bg-darkMode3' : 'bg-white'
      }`}
    >
      {!darkMode && (
        <img src={image1} alt="bloodPresure" className="w-10 h-10" />
      )}
      {darkMode && (
        <img src={image2} alt="bloodPresure" className="w-10 h-10" />
      )}
      <p
        className={`font-semibold text-[11px] lg:tex-xs ${
          darkMode ? 'text-darkModeText' : 'text-lightDark'
        }`}
      >
        {name}
      </p>
      <p className={`text-xs md:text-sm ${darkMode ? 'text-darkModeText' : 'text-lightDark'}`}>
        {bpm}
      </p>
      <p className="text-xs text-green-400 font-medium flex items-center gap-2">
       {!darkMode && <img src={image3} alt="" />}
       {darkMode && <img src={serviceDrop} alt="" />}
        <span className={`text-[11px] ${darkMode ? 'text-darkModeText' : 'text-green-400'}`}>{condition}</span>
      </p>
    </div>
  );
};

export default Service;
