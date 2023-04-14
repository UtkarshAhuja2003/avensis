import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import eventImage from "../../Images/unsplash_hgO1wFPXl3I.png"
import { useState, useEffect } from 'react';
import image1 from '../../Images/shape3.png'
import image2 from '../../Images/shape2.png'
import image3 from '../../Images/circle.png'
import image4 from '../../Images/Sphere-Black-Matte1(1).png'
import image5 from '../../Images/DecorativeLine.png'
import './../../style.css';
import parse from 'html-react-parser';
import { useParams } from 'react-router-dom';
import { Events } from '../../config/events.js';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);
  
  const { id } = useParams();

  let technical = Events.filter((event) => (event.id == id));
  console.log(technical)

  const [currentTab, change] = useState(0);
  const handleCategoryClick = (e) => {
    change(e.target.id);
  }


  function cat(tab,i) {
    if (currentTab == tab.id) {
      return <button key={i} id={tab.id} className='px-4 py-1 mx-1 skew-x-[23deg] text-sm md:text-base bg-[#347080] italic ease-in-out duration-300'>{tab.name}</button>
    }
    return <button key={i} id={tab.id} onClick={(handleCategoryClick)} className='px-4 py-1 text-sm md:text-base  bg-[#4a9fa0] mx-1 skew-x-[23deg] hover:bg-[#347080] ease-in-out duration-100 italic'>{tab.name}</button>
  }
  
  function display3(tab,i) {
    if (currentTab == 0) {
      return <div className='w-[40px] h-[32px] absolute bg-[#347080] text-[#347080]'>asdsd</div>
    }
    return <div className='w-[40px] h-[32px] absolute bg-[#4a9fa0] text-[#4a9fa0]'>asdsd</div>
  }

  return (
    <div>
      <Navbar/>
      <img src={image2} className="shape2 absolute w-36 right-0 top-[150px] z-[-1]"/>
      {/* <img src={image1} className="shape3 absolute w-20 top-[150px] z-[-1]"/> */}
      {/* <img src={image3} className="absolute w-[35%] top-[200px] left-[200px] z-[-1] opacity-30"/> */}
      <img src={image4} className="absolute w-[20%] top-[110px] left-[160px] z-[-1]"/>
      {/* <img src={image5} className="absolute w-full z-[-1] opacity-50"/> */}
      <div className='w-full mb-12'>
        <div className='w-full md:w-[70%] mx-auto md:flex mt-12'>
          <div className='w-[95%] md:w-[30%] text-center'>
            <img className='w-[90%] mx-auto' src={technical[0].tabs[currentTab].image} alt="" />
            <h1 className='text-[roboto] text-2xl mt-6'>{technical[0].name}</h1>
            <h1 className='text-[roboto] text-2xl mt-2'>{technical[0].desc}</h1>
            {/* <button className='text-2xl w-[80%] mx-[10%] py-[1px] mt-4 border-2 border-white rounded-lg'>Details</button> */}
            { technical[0].link && <a href={technical[0].link}><button className='text-2xl w-[80%] mx-[10%] py-[1px] mt-4 border-2 border-white rounded-lg'>Register</button></a> }
          </div>
          <div className='w-[100%] md:w-[70%] pl-2 md:pl-16'>
            <h1></h1>
          <div className='flex mt-8'>
                  {display3()}
                  <div className='w-[4px]'></div>
                    {
                        technical[0].tabs.map((tab,i)=>(
                          cat(tab,i)
                        ))
                    }
                </div>
            <div className='border-2 border-white border-r-[8px] p-4 text-lg rounded-r-lg'>
              <p>
                {/* {tabs[currentTab].content} */}
                {parse( technical[0].tabs[currentTab].content)}
              </p>
            </div>

          </div>
        </div> 
        </div> 
      <Footer/>
    </div>
  )
}

export default Index