import React from 'react'
import Loading from '../../components/Loading/Loading';
import { FaCube } from "react-icons/fa";
import { BiCubeAlt } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { FaWordpressSimple } from "react-icons/fa";

const AnswerPage = () => {
  return (
    <div className='px-30 pt-15 h-screen bg-[#faf8f6]'>
      <div className='flex justify-start items-center gap-2'>
        <BiCubeAlt viewBox="0 0 24 24" className='text-4xl animate-spin'/>
        <IoSearch className='text-2xl'/>
        <div className='text-lg font-medium'>Found 5 results for "Social impact of Y Combinator startups on local communities"</div>
      </div>

      <div className='flex-col gap-2 text-black mt-10 overflow-scroll hide-scrollbar pb-5 border-b-2 border-gray-400'>
        <div className='text-[11px] font-bold text-gray-500'>SEARCH</div>
        <div className='font-medium'>Found 5 results</div>
        <div className='flex gap-2 items-center text-sm'>
          <div className='text-gray-400'>Source:</div>
          <div className='text-gray-500'>Web Search</div>
        </div>
        <div className='text-sm font-medium text-gray-400'>
          Completed search on Web Search and Found 5 sources. Analyzing relevances and extracting key information.
        </div>
      </div>

      <div className='flex justify-between mt-7 items-center'>
        <div>
          Research Sources
          <select name="" id=""></select>
        </div>
        <div className='bg-gray-300 rounded-2xl px-3 text-sm font-medium text-gray-500'>50 sources</div>
      </div>

      <div className='flex gap-3 mt-5 overflow-scroll hide-scrollbar'>
        <div className='flex gap-2 items-start bg-white rounded-lg border shadow-sm hover:shadow-lg focus:shadow-2xl p-3 min-w-[300px] h-[130px]'>
        <FaWordpressSimple className='mt-1 text-xl' />
        <div className='flex-col gap-2'>
          <div className='font-bold'>List of Recently Y C..</div>
          <div className='text-gray-400 text-sm font-medium'>revli.com</div>
          <div className='text-sm mb-1'>Our list is updated to provide the latest insights into Y..</div>
          <div className='px-1 rounded-2xl text-sm bg-gray-300 mr-30 text-gray-600'>Medium Relevance</div>
        </div>
      </div>

      <div className='flex gap-2 items-start bg-white rounded-lg border shadow-sm hover:shadow-lg focus:shadow-2xl p-3 min-w-[300px] h-[130px]'>
        <FaWordpressSimple className='mt-1 text-xl' />
        <div className='flex-col gap-2'>
          <div className='font-bold'>List of Recently Y C..</div>
          <div className='text-gray-400 text-sm font-medium'>revli.com</div>
          <div className='text-sm mb-1'>Our list is updated to provide the latest insights into Y..</div>
          <div className='px-1 rounded-2xl text-sm bg-gray-300 mr-30 text-gray-600'>Medium Relevance</div>
        </div>
      </div>

      <div className='flex gap-2 items-start bg-white rounded-lg border shadow-sm hover:shadow-lg focus:shadow-2xl p-3 min-w-[300px] h-[130px]'>
        <FaWordpressSimple className='mt-1 text-xl' />
        <div className='flex-col gap-2'>
          <div className='font-bold'>List of Recently Y C..</div>
          <div className='text-gray-400 text-sm font-medium'>revli.com</div>
          <div className='text-sm mb-1'>Our list is updated to provide the latest insights into Y..</div>
          <div className='px-1 rounded-2xl text-sm bg-gray-300 mr-30 text-gray-600'>Medium Relevance</div>
        </div>
      </div>

      <div className='flex gap-2 items-start bg-white rounded-lg border shadow-sm hover:shadow-lg focus:shadow-2xl p-3 min-w-[300px] h-[130px]'>
        <FaWordpressSimple className='mt-1 text-xl' />
        <div className='flex-col gap-2'>
          <div className='font-bold'>List of Recently Y C..</div>
          <div className='text-gray-400 text-sm font-medium'>revli.com</div>
          <div className='text-sm mb-1'>Our list is updated to provide the latest insights into Y..</div>
          <div className='px-1 rounded-2xl text-sm bg-gray-300 mr-30 text-gray-600'>Medium Relevance</div>
        </div>
      </div> 
      
      </div>
      <div className='h-screen'><Loading/></div>
      
      
    </div>

  )
}

export default AnswerPage