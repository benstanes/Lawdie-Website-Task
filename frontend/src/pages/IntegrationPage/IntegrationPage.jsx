import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { IoIosCloudy } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import { FaShield } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { IoDocumentText } from "react-icons/io5";
import { FaRegCalendar } from "react-icons/fa6";
import { LuLogOut } from "react-icons/lu";

const IntegrationPage = () => {
  return (
    <div className='px-40 mt-10 pt-5 rounded-xl h-screen bg-[#faf8f6]'>
          <div className='overflow-scroll hide-scrollbar'>
          <div className='flex justify-between items-center p-3 px-5 mb-3 rounded-t-2xl bg-white'>
            <div className='font-medium text-xl'>Integration Hub</div>
            <IoCloseSharp />
    </div>

    <div className='flex-col mx-3 border mb-5 rounded-xl bg-white'>
      <div className='flex justify-between items-center pl-2 border-b-1'>
        <div className='flex items-center gap-4 p-4'>
          <IoIosCloudy className=' text-4xl p-1 border rounded-xl' />
        <div className='flex-col justify-start'>
          <div className='font-bold text-lg'>Google Workspace</div>
          <div className='text-sm'>
            Connect to Google services including Gmail, Drive and Calendar
          </div>
        </div>
        </div>

        <div className='flex-col mr-10'>
          <div className='flex items-center mb-1'>
            <div className='flex gap-1 items-center p-1 px-3 ml-20 rounded-xl bg-green-200'>
              <SiTicktick />
              <div className='text-green-400 text-sm'>Active</div>
            </div>
          </div>

            <div className='flex items-center gap-2'>
              <div className='p-1 px-2 py-0 rounded-4xl text-white bg-green-900'>L</div>
              <div className='text-medium'>lawdieco@gmail.com</div>
            </div>
          </div>
      </div>


      <div className='p-3'>
        <div className='flex gap-1 ml-4 items-center'>
          <FaShield className='text-md' />
          <div className='text-sm font-medium'>Available Services</div>
        </div>
      </div>

      <div className='pl-3 pb-3 ml-6 flex gap-2 mb-2'>
        <div className='min-w-[270px] h-[60px] border rounded-xl'>
          <div className='flex gap-2 items-center p-2'>
            <BiLogoGmail className='text-4xl rounded-xl border p-2 ml-1'/>
            <div className='flex-col justify-start items-center'>
              <div className='font-medium'>Gmail</div>
              <div className='flex items-center'>
                <BsDot className='text-green-500 text-2xl' />
                <div className='text-sm font-medium'>Connected</div> 
              </div>
            </div>
          </div>
        </div>
        <div className='min-w-[270px] h-[60px] border rounded-xl'>
          <div className='flex gap-2 items-center p-2'>
            <IoDocumentText className='text-4xl rounded-xl border p-2 ml-1'/>
            <div className='flex-col justify-start items-center'>
              <div className='font-medium'>Google Drive</div>
              <div className='flex items-center'>
                <BsDot className='text-green-500 text-2xl' />
                <div className='text-sm font-medium'>Connected</div> 
              </div>
            </div>
          </div>
        </div>
        <div className='min-w-[270px] h-[60px] border rounded-xl'>
          <div className='flex gap-2 items-center p-2'>
            <FaRegCalendar className='text-4xl rounded-xl border p-2 ml-1'/>
            <div className='flex-col justify-start items-center'>
              <div className='font-medium'>Google Calendar</div>
              <div className='flex items-center'>
                <BsDot className='text-green-500 text-2xl' />
                <div className='text-sm font-medium'>Connected</div> 
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-end px-3 mr-10'>
        <div className='flex items-center gap-1 px-3 py-1 border rounded-md m-3'>
          <LuLogOut />
        <div className='text-sm font-medium'>Disconnect Google Workspace</div>
        </div>
      </div>
    </div>


{/* second Inactive one */}
    <div className='flex-col mx-3 border mb-5 rounded-xl bg-white'>
      <div className='flex justify-between items-center pl-2 border-b-1'>
        <div className='flex items-center gap-4 p-4'>
          <IoIosCloudy className=' text-4xl p-1 border rounded-xl' />
        <div className='flex-col justify-start'>
          <div className='font-bold text-lg'>Microsoft 365</div>
          <div className='text-sm'>
            Connect to Microsoft services including OneDrive
          </div>
        </div>
        </div>

        <div className='flex-col mr-10'>
          <div className='flex items-center mb-1'>
            <div className='flex gap-1 items-center p-1 px-3 ml-20 rounded-xl bg-gray-200'>
              <SiTicktick />
              <div className='text-black text-sm'>Inactive</div>
            </div>
          </div>

            {/* <div className='flex items-center gap-2'>
              <div className='p-1 px-2 py-0 rounded-4xl text-white bg-green-900'>L</div>
              <div className='text-medium'>lawdieco@gmail.com</div>
            </div> */}
          </div>
      </div>


      <div className='p-3'>
        <div className='flex gap-1 ml-4 items-center'>
          <FaShield className='text-md' />
          <div className='text-sm font-medium'>Available Services</div>
        </div>
      </div>

      <div className='pl-3 pb-3 ml-6 flex gap-2 mb-2'>
        <div className='min-w-[270px] h-[60px] border rounded-xl'>
          <div className='flex gap-2 items-center p-2'>
            <BiLogoGmail className='text-4xl rounded-xl border p-2 ml-1'/>
            <div className='flex-col justify-start items-center'>
              <div className='font-medium'>Onedrive Files</div>
              <div className='flex items-center'>
                <BsDot className='text-gray-500 text-2xl' />
                <div className='text-sm font-medium text-gray-500'>Unavailable</div> 
              </div>
            </div>
          </div>
        </div>
        {/* <div className='min-w-[270px] h-[60px] border rounded-xl'>
          <div className='flex gap-2 items-center p-2'>
            <IoDocumentText className='text-4xl rounded-xl border p-2 ml-1'/>
            <div className='flex-col justify-start items-center'>
              <div className='font-medium'>Google Drive</div>
              <div className='flex items-center'>
                <BsDot className='text-green-500 text-2xl' />
                <div className='text-sm font-medium'>Connected</div> 
              </div>
            </div>
          </div>
        </div> */}
        {/* <div className='min-w-[270px] h-[60px] border rounded-xl'>
          <div className='flex gap-2 items-center p-2'>
            <FaRegCalendar className='text-4xl rounded-xl border p-2 ml-1'/>
            <div className='flex-col justify-start items-center'>
              <div className='font-medium'>Google Calendar</div>
              <div className='flex items-center'>
                <BsDot className='text-green-500 text-2xl' />
                <div className='text-sm font-medium'>Connected</div> 
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div className='flex items-center justify-end px-3 mr-10'>
        <div className='flex items-center gap-1 px-3 py-1 border rounded-md m-3'>
          <LuLogOut />
        <div className='text-sm font-medium'>Connect Microsoft 365</div>
        </div>
        
      </div>

    </div>
    </div>
    </div>
  )
}

export default IntegrationPage