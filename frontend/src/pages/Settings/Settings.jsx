import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa"
import { FaGlobe } from "react-icons/fa6";
import { IoIosCloudy } from "react-icons/io";
import { IoLockClosed } from "react-icons/io5";
import { FaShield } from "react-icons/fa6";

const Settings = () => {
  return (
    <div className='px-40 mt-10 pt-5 rounded-xl h-screen bg-[#faf8f6]'>
      <div className='overflow-scroll hide-scrollbar'>
      <div className='flex justify-between items-center p-3 px-5 mb-3 rounded-t-2xl bg-white'>
        <div className='font-medium text-xl'>Settings</div>
        <IoCloseSharp />
      </div>

      <div className='flex-col mx-3 border mb-5 rounded-xl bg-white'>
        <div className='p-3 border-b-1 font-medium'>
          Preferences
        </div>

        <div className='flex justify-between p-2 px-5 items-center border-b-1'>
          <div className='flex items-center'>
            <FaRegMoon className='mr-3 text-2xl border p-1' />
            <div className='flex-col leading-5'>
              <div className='font-medium'>Appearance</div>
              <div className='text-gray-500 text-sm'>Customize look and feel</div>
            </div>
          </div>
          <div>
            <FaChevronRight />
          </div>
        </div>

        <div className='flex justify-between p-2 px-5 items-center'>
          <div className='flex items-center'>
            <FaGlobe className='mr-3 text-2xl border p-1' />
            <div className='flex-col leading-5'>
              <div className='font-medium'>Language</div>
              <div className='text-gray-500 text-sm'>Change interface language</div>
            </div>
          </div>
          <div>
            <FaChevronRight />
          </div>
        </div>
      </div>

      <div className='flex-col mx-3 border rounded-xl bg-white mb-5'>
        <div className='p-3 border-b-1 font-medium'>
          Files Storage & Sync
        </div>

        <div className='flex justify-between p-2 px-5 items-center'>
          <div className='flex items-center'>
            <IoIosCloudy className='mr-3 text-2xl border p-1' />
            <div className='flex-col leading-5'>
              <div className='font-medium'>Sync Files</div>
              <div className='text-gray-500 text-sm'>Manage cloud storage and synchronization</div>
            </div>
          </div>
          <div>
            <FaChevronRight />
          </div>
        </div>
      </div>

      <div className='flex-col mx-3 border mb-5 rounded-xl bg-white'>
        <div className='p-3 border-b-1 font-medium'>
          Privacy & Security
        </div>

        <div className='flex justify-between p-2 px-5 items-center border-b-1'>
          <div className='flex items-center'>
            <IoLockClosed className='mr-3 text-2xl border p-1' />
            <div className='flex-col leading-5'>
              <div className='font-medium'>Privacy</div>
              <div className='text-gray-500 text-sm'>Manage your privacy settings</div>
            </div>
          </div>
          <div>
            <FaChevronRight />
          </div>
        </div>

        <div className='flex justify-between p-2 px-5 items-center'>
          <div className='flex items-center'>
            <FaShield className='mr-3 text-2xl border p-1' />
            <div className='flex-col leading-5'>
              <div className='font-medium'>Security</div>
              <div className='text-gray-500 text-sm'>Configure security options</div>
            </div>
          </div>
          <div>
            <FaChevronRight />
          </div>
        </div>
      </div>

      <div className='flex-col mx-3 border mb-5 rounded-xl bg-white'>
        <div className='p-3 font-medium'>
          Help & Support
        </div>
      </div>
      </div>
    </div>
  )
}

export default Settings