import React from 'react';
import uncheck from '../../../assets/icon/Icon_Vector_Uncheck.png';
import check from '../../../assets/icon/Icon_Vector_Check.png';
import TaskItem from './TaskItem';

const TodoList = ({ darkMode }) => {
  return (
    <section
      className={`w-[718px] mt-9 px-7 lg:pb-20 pt-4 ${
        darkMode ? 'bg-darkMode3' : 'bg-white'
      }`}
    >
      <p className="mb-2 font-medium text-base">To-Do List</p>
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
          <p className="font-medium">Select All</p>
        </div>
        <button className="self-start px-8 py-2 text-white rounded-md  bg-gradient-to-r from-hotpink to-orange">
          Done
        </button>
      </div>

      {/* Task Item */}
      <TaskItem image={check} />
      <TaskItem image={uncheck} />
      <TaskItem image={uncheck} />
      <TaskItem image={uncheck} />
    </section>
  );
};

export default TodoList;
