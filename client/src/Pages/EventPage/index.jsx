import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import eventImage from '../../Images/unsplash_hgO1wFPXl3I.png'

const index = () => {
  const tabs =[
    {"name": "Home",
  }
  ];
  return (
    <div>
      <Navbar/>
      <div className='w-full'>
        <div className='w-[85%] md:w-[70%] mx-auto md:flex mt-12'>
          <div className='w-full md:w-[30%] text-center'>
            <img className='w-[90%] mx-auto' src={eventImage} alt="" />
            <h1 className='text-[roboto] text-2xl mt-6'>MESHMERISE</h1>
            <h1 className='text-[roboto] text-2xl mt-2'>PRIZE: 80,000 INR</h1>
            <button className='text-2xl w-[80%] mx-[10%] py-[1px] mt-4 border-2 border-white rounded-lg'>Details</button>
          </div>
          <div className='w-[90%] md:w-[70%]'>
            <div className='w-[85%] mx-auto mt-8 border-2 border-white border-r-[8px] p-4'>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, reiciendis quas perspiciatis sunt, officia repellendus illum odio dicta ad dolorem animi commodi obcaecati voluptatem vero maxime aut architecto id rerum! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, cupiditate velit? Voluptate error alias libero vero quia natus? Ducimus delectus illo magni cumque laborum illum voluptatibus commodi vel odit quas?
              </p>
            </div>

          </div>
        </div> 
        </div> 
      <Footer/>
    </div>
  )
}

export default index
