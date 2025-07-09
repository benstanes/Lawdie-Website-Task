import React from 'react'
import { MdOutlineMenuOpen } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";
import { FaRegArrowAltCircleUp } from "react-icons/fa";

const SearchBox = () => {
  return (
     <div className='mt-35'>
      <div className='text-black text-3xl mb-7 text-center tracking-tighter'>How can I help you today?</div>
      <div className='ml-75 flex-col justify-center bg-white rounded-lg shadow-sm hover:shadow-lg focus:shadow-2xl  w-150 p-5 text-black'>
        <div className='ml-2 mb-4'><input className='outline-hidden w-130' type="text" placeholder='What do you want to know?'/></div>
        <div className='flex justify-start pl-2 mt-2 items-center gap-2'>
        <MdOutlineMenuOpen className='text-xl'/>
        <div className='flex items-center rounded-3xl border pl-1 border-gray-400'>
          <IoSearch className='text-sm'/>
          <div className='text-[13px] font-medium'>Deep Search</div>
          <select className='text-black' name="" id=""></select>
        </div>
        <div className='flex items-center rounded-3xl border px-2 border-gray-400'>
          <IoDocumentTextOutline />
          <div className='text-[13px] font-medium'>Document Mode</div>
        </div>
         <div className='flex items-center rounded-3xl border px-2 border-gray-400'>
          <LuBrain className='text-sm' />
          <div className='text-[13px] font-medium'>Think</div>
        </div>
        <div className='ml-40'><FaRegArrowAltCircleUp /></div>
        </div>
        
        
      </div>
    </div>
  )
}

export default SearchBox