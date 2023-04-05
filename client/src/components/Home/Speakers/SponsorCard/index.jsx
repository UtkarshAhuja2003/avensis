import React from 'react'

const index = (data) => {
  return (
    <div className='opacity-[90%] w-[150px] h-[185px] border-[1px] border-[#BF17C3] bg-[#1f122a]-bg-500/50 rounded-sm md:mx-6 mt-12'>
      <img className='mx-auto w-[120px] mt-4' src={data.image} alt="" />
      <h1 className='text-white text-center font-md mt-2 leading-7'>{data.name}</h1>
    </div>
  )
}

export default index
