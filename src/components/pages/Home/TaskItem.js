import React from 'react';

const TaskItem = ({ image, darkMode }) => {
  return (
    <div className="flex flex-row gap-4 items-start mt-8">
      <img src={image} alt="check" className="w-6 h-6" />
      <div className='flex flex-col gap-2 md:gap-0  md:flex-row'>
        <p
          className={`text-sm font-medium ${
            darkMode ? 'text-darkModeText' : 'text-lightDark'
          }`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </p>
        <p
          className={`md:ml-8 text-sm font-medium text-lightText ${
            darkMode ? 'opacity-60' : ''
          }`}
        >
          Last Added: 10 sep 2022
        </p>
      </div>
    </div>
  );
};

export default TaskItem;
