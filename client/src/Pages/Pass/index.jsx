import React from 'react'
import Navbar from "../../components/common/Navbar"

const Pass = () => {
  return (
    <div className='w-full bg-[#171221] h-[1200px]'>
      <Navbar/>
      <div className='flex'>
        <a href="https://imgbb.com/"><img src="https://i.ibb.co/pwBCWWK/Untitled.png" alt="Untitled" border="0"/></a><br /><a target='_blank' href='https://emoticoncentral.com/category/exhaust'>  </a><br />
        <div>
        <h1 className='text-3xl text-white mx-[10%] mt-32'>THANKYOU for registering.</h1>
        <h1 className='text-3xl text-white mx-[10%] mt-32'>Pass has been sent to your Email.</h1>
          </div>
      </div>
    
    </div>
  )
}

export default Pass