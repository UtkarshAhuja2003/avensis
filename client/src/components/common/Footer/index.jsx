import React, { useState } from 'react'
import image from "../../../Images/footer-back.png"
import tanay from '../../../Images/team/Tanay.png'
import arjyo from '../../../Images/team/Arjyo.jpeg'
import amar from '../../../Images/team/amar_pro.jpg'
import faiz from '../../../Images/team/faiz.jpeg'
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaFirefoxBrowser } from "react-icons/fa";

const Footer = () => {
  const [count, setCount] = useState(0);
  function displayTeam()
  {
    setCount(1);
  }
  function hideTeam()
  {
    setCount(0);
  }
  return (
    <div id="footer"  className='m-0 bg-[url(https://i.ibb.co/vhQq6hM/footer-back.png)] '>
      <div className='pb-8'>

      
        <div className="contacts m-0">
            <div class="contact2 w-[80%] md:flex justify-between mb-12">
                <div className=''>
                  <span className="contactname  ">
                  Pardeep Sangwan</span><span class="contactcoma"><br/> </span><span>Convener </span><br/>
                  <span>+91 99990 26516 </span></div>
                <div>
                  <span class="contactname">Tanay Aggarwal</span><span class="contactcoma"><br/> </span><span >Chief Organizer </span><br/>
                <span>+91 83768 93416</span>  
                </div>
                <div>
                  <span class="contactname">Shlok Rana</span><span class="contactcoma"><br/> </span><span>Chief Organizer </span><br/>
                  <span>+91 96435 66916</span> 
                </div>
            </div>
        </div>


        <div className='w-[80%] mb-3 mx-auto h-[1px] bg-[#EBB22D]'></div>



        {/* <div className='grid grid-cols-1 md:grid-cols-4 ml-4 '> */}
        <div class="flex-wrap md:flex m-0 w-[80%] md:w-[90%] mx-auto md:ml-0">
          <div className='flex '>
             <div className='md:ml-[140px] text-[13px] mt-[2px] md:text-sm  flex'>

              {/* follow */}

                <div className=' flex  '>
                    <h4>FOLLOW US </h4>
                  </div>
                    <div className='py-1 '>
                    <a  href='https://www.instagram.com/avensis_2023/'> <FaInstagram className='fa-brands fa-instagram fa-2 ml-2'></FaInstagram></a> </div>
                     </div>


                     {/* mail */}
               <div className='flex ml-4'>
              <FiMail className='mt-1 '></FiMail>              
              <a className=' ml-1' href="mailto:avensis2023@msit.in">avensis2023@msit.in</a>
            </div> 
            </div>


              <div className='md:ml-32 ml-4 '>
               <h4> MSIT C-4 JANAKPURI, Delhi 110058 </h4>
              </div>

                <div class="follow2  mb-4 flex ">
                   <h4 className="md:ml-[125px] text-[12px] md:text-sm ">Coded with ❤ by <button onClick={displayTeam} className=   'text-[#EBB22D] font-bold text-[13px]'>Tech Team, Avensis</button></h4>
                </div>
            </div>
          

        

        {count==1 &&
                 <div className='modal fade top-0 sticky text-black mx-auto w-[80%] lg:w-[40%] bg-white rounded-lg' id="exampleModal">
                 <div className='w-full py-4 border-b-2 border-gray mb-2'>
                    <h5 className='text-black font-[roboto] font-medium text-2xl ml-12' >Meet the team</h5>
                  </div>
                  <div className='w-[90%] mx-auto grid grid-cols-2 md:grid-cols-3 my-2'>
                  <div class="col-md-6">
                        <center>
                          <a href="https://www.tanayaggarwal.com" target="_blank"><img src={tanay}
                              alt="Tech head - Tanay " className='rounded-[50%]'/></a>
                          <h4 className='text-[18px] text-black font-semibold'>Tanay Aggarwal</h4>
                          <h5 style={{color:"#0077B5"}} className='text-[14px] text-blue-500 '>Linkedin</h5>
                        </center>
                      </div>
                      <div class="col-md-6">
                          <center>
                            <a href="https://www.linkedin.com/in/faiz-a-0b7229b0/" target="_blank"><img
                                src={faiz} alt="Frontend - Faiz " height="150px" width="150px"
                                className='rounded-[50%]'/></a>
                            <h4 className='text-[18px] text-black font-semibold'>Faiz Alam</h4>
                            <h5 style={{color:"#0077B5"}} className='text-[14px] text-blue-500'>Linkedin</h5>
                          </center>
                        </div>
                      <div class="col-md-6">
                        <center>
                          <a href="https://www.linkedin.com/in/utkarsh-ahuja-44aa90227" target="_blank"><img
                              src={amar} alt="Backend - Aman " height="150px" width="150px"
                              className='rounded-[50%]'/></a>
                          <h4 className='text-[18px] text-black font-semibold'>Utkarsh Ahuja</h4>
                          <h5 style={{color:"#0077B5"}} className='text-[14px] text-blue-50 0'>Linkedin</h5>
                        </center>
                      </div>
                      <div class="col-md-6">
                          <center>
                            <a href="https://www.linkedin.com/in/mohd-kaif-7ba250228" target="_blank"><img
                                src={amar} alt="Backend - Aman " height="150px" width="150px"
                                className='rounded-[50%]'/></a>
                            <h4 className='text-[18px] text-black font-semibold'>Mohd Kaif</h4>
                            <h5 style={{color:"#0077B5"}} className='text-[14px] text-blue-500'>Linkedin</h5>
                          </center>
                        </div>
                        <div class="col-md-6">
                          <center>
                            <a href="https://www.linkedin.com/in/web-advisor/" target="_blank"><img
                                src={amar} alt="Backend - Aman " height="150px" width="150px"
                                className='rounded-[50%]'/></a>
                            <h4  className='text-[18px] text-black font-semibold'>Aman Sinha</h4>
                            <h5 style={{color:"#0077B5"}} className='text-[14px] text-blue-500'>Linkedin</h5>
                          </center>
                        </div>
                      <div class="col-md-6">
                        <center>
                          <a href="https://www.linkedin.com/in/arjyo-chakraborty-baa9351bb/" target="_blank"><img
                              src={arjyo} alt="Frontend - Arjyo " height="150px" width="150px"
                              className='rounded-[50%]'/></a>
                          <h4  className='text-[18px] text-black font-semibold'>Arjyo Chakraborty</h4>
                          <h5 style={{color:"#0077B5"}} className='text-[14px] text-blue-500'>Linkedin</h5>
                        </center>
                      </div>
                      
                  </div>
                  <div className='w-full border-t-2 border-grey'>
                   <button onClick={hideTeam} type="button" id="closeteam" className='ml-[76%] mt-4' data-dismiss="modal">Close</button>
                  </div>
             </div>}




             </div>
      
    </div>
  )
}

export default Footer