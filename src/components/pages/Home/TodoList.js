import React from 'react';
import uncheck from '../../../assets/icon/Icon_Vector_Uncheck.png';
import check from '../../../assets/icon/Icon_Vector_Check.png';
import TaskItem from './TaskItem';
import small from '../../../assets/icon/small.png';

const TodoList = ({ darkMode }) => {
  return (
    <section
      className={` mt-9 mx-3 px-3 md:mx-0 py-4 lg:py-0 lg:px-7 lg:pb-[74px] rounded-lg pt-4 ${
        darkMode ? 'bg-darkMode3' : 'bg-white'
      }`}
    >
      <p
        className={`mb-2 md:pt-3 font-medium text-base ${
          darkMode ? 'text-darkModeText' : 'text-lightDark'
        }`}
      >
        To-Do List
      </p>
      <div className="flex justify-between pb-6 relative">
        <textarea
          type="text"
          className={`border rounded-md w-full lg:w-[596px] h-[76px] ${
            darkMode ? 'bg-darkInput' : 'bg-white'
          }`}
        ></textarea>
        <img
          src={small}
          alt=""
          className="lg:hidden absolute right-0 bottom-6"
        />
        <button className="hidden md:block ml-4 self-start px-8 py-2 text-white rounded-md  bg-gradient-to-r from-hotpink to-orange">
          Add
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img src={uncheck} alt="uncheck" className="w-7 h-7" />
          <p
            className={`font-medium ${
              darkMode ? 'text-darkModeText' : 'text-lightDark'
            }`}
          >
            Select All
          </p>
        </div>
        <button className="self-start px-8 py-2 text-white rounded-md  bg-gradient-to-r from-hotpink to-orange">
          Done
        </button>
      </div>

      {/* Task Item */}
      <TaskItem image={check} darkMode={darkMode} />
      <TaskItem image={uncheck} darkMode={darkMode} />
      <TaskItem image={uncheck} darkMode={darkMode} />
      <TaskItem image={uncheck} darkMode={darkMode} />
    </section>
  );
};

export default TodoList;
