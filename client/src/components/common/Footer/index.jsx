import React, { useState } from 'react'
import image from "../../../Images/footer-back.png"
import tanay from '../../../Images/team/Tanay.png'
import arjyo from '../../../Images/team/Arjyo.jpeg'
import amar from '../../../Images/team/amar_pro.jpg'
import faiz from '../../../Images/team/faiz.jpeg'

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
    <div id="footer">
        {/* <img class="footerimg absolute z-[-1]" src="Images/footer-back.png" /> */}
        <div class="contacts">
            <div class="contact1">
            <h1>CONTACT US</h1>
            <h4>MSIT C-4, JANAKPURI DELHI-110058</h4><br/><br/>
            </div>
            <div class="vl"></div>
            <div class="contact2">
                <span class="contactname">Pardeep Sangwan</span><span class="contactcoma"> , </span><span class="contactposition"> Chief Advisor</span>
                <h4>+91 99990 26516</h4><br/>    
                <span class="contactname">Tanay Aggarwal</span><span class="contactcoma"> , </span><span class="contactposition">Chief Organizer</span>
                <h4>+91 83768 93416</h4><br/>
                <span class="contactname">Shlok Rana</span><span class="contactcoma"> , </span><span class="contactposition">Chief Organizer</span>
                <h4>+91 96435 66916</h4><br/>
            </div>
        </div>
        <div className='w-[80%] mb-3 mx-auto h-[1px] bg-[#EBB22D]'></div>
        <div class="content">
            <div class="follow">
                <div class="follow1">
                    <h4>FOLLOW US ON</h4>
                   
                        <a href="https://www.instagram.com/iic.msit/"><i class="fa-brands fa-instagram fa-2x"></i></a>
                        <a href="https://www.linkedin.com/company/iic-msit/"><i class="fa-brands fa-linkedin fa-2x"></i></a>
                </div>
                <div class="follow2 mb-4">
                    <h4>Coded with ❤ by <button onClick={displayTeam} className='text-[#EBB22D] font-bold text-[14px]'>Tech Team, Avensis</button></h4>
                </div>
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
                          <h5 className='text-[14px] text-black'>Tech Head</h5>
                        </center>
                      </div>
                      <div class="col-md-6">
                          <center>
                            <a href="https://www.linkedin.com/in/faiz-a-0b7229b0/" target="_blank"><img
                                src={faiz} alt="Frontend - Faiz " height="150px" width="150px"
                                className='rounded-[50%]'/></a>
                            <h4 className='text-[18px] text-black font-semibold'>Faiz Alam</h4>
                            <h5  className='text-[14px] text-black'>Frontend Developer</h5>
                          </center>
                        </div>
                      <div class="col-md-6">
                        <center>
                          <a href="https://www.linkedin.com/in/utkarsh-ahuja-44aa90227" target="_blank"><img
                              src={amar} alt="Backend - Aman " height="150px" width="150px"
                              className='rounded-[50%]'/></a>
                          <h4 className='text-[18px] text-black font-semibold'>Utkarsh Ahuja</h4>
                          <h5  className='text-[14px] text-black '>Frontend Developer</h5>
                        </center>
                      </div>
                      <div class="col-md-6">
                          <center>
                            <a href="https://www.linkedin.com/in/mohd-kaif-7ba250228" target="_blank"><img
                                src={amar} alt="Backend - Aman " height="150px" width="150px"
                                className='rounded-[50%]'/></a>
                            <h4 className='text-[18px] text-black font-semibold'>Mohd Kaif</h4>
                            <h5  className='text-[14px] text-black '>Frontend Developer</h5>
                          </center>
                        </div>
                        <div class="col-md-6">
                          <center>
                            <a href="https://www.linkedin.com/in/web-advisor/" target="_blank"><img
                                src={amar} alt="Backend - Aman " height="150px" width="150px"
                                className='rounded-[50%]'/></a>
                            <h4  className='text-[18px] text-black font-semibold'>Aman Sinha</h4>
                            <h5  className='text-[14px] text-black '>Backend Developer</h5>
                          </center>
                        </div>
                      <div class="col-md-6">
                        <center>
                          <a href="https://www.linkedin.com/in/arjyo-chakraborty-baa9351bb/" target="_blank"><img
                              src={arjyo} alt="Frontend - Arjyo " height="150px" width="150px"
                              className='rounded-[50%]'/></a>
                          <h4  className='text-[18px] text-black font-semibold'>Arjyo Chakraborty</h4>
                          <h5  className='text-[14px] text-black '>Frontend Developer</h5>
                        </center>
                      </div>
                      
                  </div>
                  <div className='w-full border-t-2 border-grey'>
                   <button onClick={hideTeam} type="button" id="closeteam" className='ml-[76%] mt-4' data-dismiss="modal">Close</button>
                  </div>
             </div>}





      
    </div>
  )
}

export default Footer