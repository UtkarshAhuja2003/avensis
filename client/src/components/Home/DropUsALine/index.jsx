import React from 'react'
import image from '../../../Images/dropline-removebg-preview.png'

const index = () => {
  return (
    <div className="bg-[#171221] py-[5%] mx-full mt-12">
        <div className="md:flex justify-between mx-[10%] md:mx-[13%]">
            <div className="">
                <p className='text-white font-[ultra] text-4xl tracking-widest'> DROP US A LINE</p>
                
                <form className="">
                    <input className="w-full mt-6 bg-[#171221] border-2 border-b-4 py-2 pl-3 border-[#771EBD] text-[#EBB22D] placeholder:text-[#EBB22D] outline-none text-xl" type="search" name="search2" placeholder="Your Name"/> 
                    <br />
                    <input className="w-full mt-6 bg-[#171221] border-2 border-b-4 py-2 pl-3 border-[#771EBD] text-[#EBB22D] placeholder:text-[#EBB22D] outline-none text-xl" type="search" name="search2" placeholder="Your Email"/>  
                    <br />
                    <input className="w-full mt-6 bg-[#171221] border-2 border-b-4 py-2 pl-3 border-[#771EBD] text-[#EBB22D] placeholder:text-[#EBB22D] outline-none text-xl h-[140px]" type="search" name="search2" placeholder="Your Message" />  
                    <br />
                    <a href="review.html"><button className="w-full mt-6 py-4 text-white bg-[linear-gradient(90deg,#771ebd,#be17c3)] hover:bg-[linear-gradient(90deg,#be17c3,#771ebd)] ease-in-out duration-300 rounded-full">SUBMIT</button></a>
                </form>
            </div>
            <div className="">
                <img className='w-[0%] md:w-full mt-32 md:mt-0' src={image} />
            </div>
        </div>
    </div>
  )
}

export default index
