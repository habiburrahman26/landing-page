import React from 'react';
import uncheck from '../../../assets/icon/Icon_Vector_Uncheck.png';
import check from '../../../assets/icon/Icon_Vector_Check.png';

const TodoList = () => {
  return (
    <section className="w-[718px] mt-9 px-7 bg-white lg:pb-20 pt-4">
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

      <div className="flex gap-4 items-center mt-8">
        <img src={check} alt="check" className="w-6 h-6" />
        <p className="text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </p>
        <p className="text-sm font-medium text-lightText">
          Last Added: 10 sep 2022
        </p>
      </div>
      <div className="flex gap-4 items-center mt-8">
        <img src={uncheck} alt="uncheck" className="w-6 h-6" />
        <p className="text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </p>
        <p className="text-sm font-medium text-lightText">
          Last Added: 10 sep 2022
        </p>
      </div>
      <div className="flex gap-4 items-center mt-8">
        <img src={uncheck} alt="uncheck" className="w-6 h-6" />
        <p className="text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </p>
        <p className="text-sm font-medium text-lightText">
          Last Added: 10 sep 2022
        </p>
      </div>
      <div className="flex gap-4 items-center mt-8">
        <img src={uncheck} alt="uncheck" className="w-6 h-6" />
        <p className="text-sm font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
        </p>
        <p className="text-sm font-medium text-lightText">
          Last Added: 10 sep 2022
        </p>
      </div>
    </section>
  );
};

export default TodoList;
