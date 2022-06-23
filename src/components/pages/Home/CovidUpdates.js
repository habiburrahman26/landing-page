import React from 'react';
import covidImage from '../../../assets/icon/Svg_sample2.png';

const CovidUpdates = () => {
  return (
    <div className="px-5 py-4 bg-white mt-2 rounded-lg">
      <div className="flex justify-between">
        <h3>Covid-19 Updates</h3>
        <div className="flex flex-col gap-1">
          <p>10 September 2022</p>
          <p className="text-lightDark opacity-60">Thursday 10:00:00 AM</p>
        </div>
      </div>
      <div className="flex gap-3 pt-7">
        <img src={covidImage} alt="covid" />
        <div className="bg-gradient-to-r from-hotpink to-orange w-full rounded-lg flex flex-col py-3 justify-center">
          <div className="text-white font-medium">
            <div className='text-center flex flex-col gap-4 mb-4'>
              <p className="text-sm">Infection Number </p>
              <p className="text-4xl ">500</p>
            </div>
            <div className='text-center flex flex-col gap-4'>
              <p className="text-sm">Infection Rate </p>
              <p className="text-4xl ">10%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidUpdates;
