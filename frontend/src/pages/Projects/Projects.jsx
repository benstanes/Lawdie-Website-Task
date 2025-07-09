import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { IoLockClosed } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

const Projects = () => {
  return (
    <div className='px-40 h-screen pt-10 bg-[#faf8f6]'>
      <div className='flex justify-between'>
      <div className='flex gap-2 items-center'>
        <FaArrowLeft />
        <div className='text-xl font-medium'>Projects</div>
      </div>
      <div className='flex justify-between items-center rounded-lg bg-white border px-2'>
        <IoMdAdd className='pr-1'/>
        <div className='font-bold text-sm '>New Project</div>
      </div>
      </div>

      <div className='flex items-center mt-6 p-2 w-120 border rounded-lg bg-white'>
        <IoSearch className='text-lg mr-2'/>
        <input className='w-100' type="text" placeholder='Search Projects...' />
      </div>

      <div className='flex justify-between items-center mt-5 border-b-1'>
        <div className='flex items-center gap-1'>
          <div className='text-sm font-medium p-2 border-b-2'>Created by you</div>
          <div className='text-sm font-medium p-2'>Your team</div>
        </div>
        <div className='flex gap-2 items-center'>
          <div className='text-sm font-small text-gray-600'>Sort by</div>
          <div className='flex items-center'>
            <div className='text-sm font-medium'>Activity</div>
            <select name="" id=""></select>
          </div>
        </div>
      </div>

       <div className='flex mt-5 gap-2 items-start bg-white rounded-lg shadow-sm hover:shadow-lg focus:shadow-2xl p-3 max-w-[300px] h-[130px]'>
        <div className='flex-col gap-2'>
          <div className='flex items-center gap-1 mb-2'>
            <div className='font-medium text-sm'>case</div>
            <IoLockClosed className='mr-3 text-sm' />
          </div>
          <div className='text-gray-400 text-sm font-medium'>case</div>
          <div className='flex justify-between mt-8'>
            <div className='text-sm text-gray-500 mr-25'>Updated 10 hours ago</div>
            <div className='flex items-center'>
              <IoMdTime className='text-sm' />
              <div className='text-sm text-gray-500'>1m</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects