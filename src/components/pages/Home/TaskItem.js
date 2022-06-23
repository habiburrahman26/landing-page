import React from 'react';


const TaskItem = ({image,darkMode}) => {
  return (
    <div className="flex gap-4 items-center mt-8">
      <img src={image} alt="check" className="w-6 h-6" />
      <p className={`text-sm font-medium ${darkMode ? 'text-darkModeText':'text-lightDark'}`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
      </p>
      <p className= {`text-sm font-medium text-lightText ${darkMode ? 'opacity-60':""}`}>
        Last Added: 10 sep 2022
      </p>
    </div>
  );
};

export default TaskItem;
