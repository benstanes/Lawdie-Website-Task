import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import SearchBox from '../../components/SearchBox/SearchBox'
const home = () => {
  return (
    <div className='bg-[#faf8f6] h-screen px-3 m-2 items-center'>
      <Navbar/>
      <SearchBox/>
    </div>
  )
}

export default home