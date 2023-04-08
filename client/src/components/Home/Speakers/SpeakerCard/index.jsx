import React from 'react'

const index = (data) => {
  return (
    <div className='w-[270px]  rounded-md mx-auto bg-[#1D1332] blur-[3px] my-8 lg:my-12'>
      <img  src={data.image} alt=""/>
      <div>
      <h1 className='text-white text-2xl font-bold tracking-widest ml-2 mt-2'>{data.name}</h1>
      <h1 className='text-white text-sm font-[100]  tracking-widest ml-2'>{data.designation}</h1>
      <p className='text-[12px] text-[#EBB22D] ml-2 mt-2'>{data.desc}</p>
      <div className='bg-[#EBB22D] h-[3px] w-[70px] ml-3 my-4'></div>
      </div>
    </div> 
  )
}

export default index
