import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FiMessageCircle } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

const History = () => {
  return (
    <div className='px-60 pt-10 bg-[#faf8f6] h-screen'>
      <div className="border rounded-lg bg-white h-[550px]">
      <div className='flex justify-between items-center px-3 p-2'>
        <div className='text-xl font-bold'>Chat History</div>
        <IoCloseSharp className='text-xl'/>
      </div>

      <div className='pt-10'>
        <div className='flex justify-start items-center p-1 border mx-3 mb-3 rounded-lg'>
          <div className='flex gap-1 items-center border p-1 px-30 bg-gray-300 rounded-md'>
            <FiMessageCircle className='text-xl'/>
            <div className='text-md font-medium'>ALL CHATS</div>
            <div className='p-1 py-0 rounded-2xl bg-gray-500'>0</div>
          </div>
          <div className='flex gap-1 items-center pl-35'>
            <FaSave />
            <div className='text-md font-medium'>SAVED</div>
            <div className='p-1 py-0 rounded-2xl bg-gray-300'>0</div>
          </div>
        </div>
      </div>

      <div className='flex items-center'>
        <div className='m-2 border w-180 rounded-lg'>
          <div className=''>
            <div className='flex items-center'>
              <IoSearch className='text-lg mr-2 ml-3'/>
              <input className='p-2 pr-60 outline-hidden w-100 text-md' type="text" placeholder='Search chats...'/></div>
          </div>
        </div>
      <div><LuSend className='p-2 text-4xl rounded-lg border bg-gray-200'/></div>
      </div>

      {/* <div className='flex items-center mt-6 p-2 w-120 border rounded-lg bg-white'>
              <IoSearch className='text-lg mr-2'/>
              <input className='w-100 outline-hidden' type="text" placeholder='Search Projects...' />
      </div> */}


      <div className='p-30 flex-col content-center text-center leading-13'>
        <div className='pl-63 mb-3'><FiMessageCircle className='text-5xl p-2 rounded-full bg-gray-300'/></div>
        <div className='text-xl font-medium'>No chats yet</div>
        <div className='text-md'>Start a new conversation</div>
      </div>

    </div>
    </div>
  )
}

export default History