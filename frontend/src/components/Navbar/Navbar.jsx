import React from 'react'
import { LuHistory } from "react-icons/lu";
import { FaRegFolder } from "react-icons/fa";
const Navbar = () => {
  return (
        <div className='flex justify-between items-center'>
          <div className='text-lg font-medium'>
            Lawdie Kiwi AI 
          </div>
          <div className='flex justify-between items-center gap-5'>
            <div className='flex items-center mt-1 gap-5'>
              <LuHistory />
            <FaRegFolder />
            </div>
            
            <div className='text-[#db8d12] text-sm font-medium'>Upgrade Subscription</div>
            <div className='text-sm font-medium'>Docs</div>
            <div className='flex items-center'>
              <div className='rounded-full p-1 px-3 bg-[#e5e7eb] text-black'>S</div>
              <select  name="" id="">
                <option value="SETTINGS"></option>
              </select>
            </div>
          </div>
        </div>
  )
}

export default Navbar