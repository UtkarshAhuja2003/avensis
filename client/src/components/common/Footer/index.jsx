import React, { useState } from 'react'
import image from "../../../Images/footer-back.png"
import tanay from '../../../Images/team/Tanay.png'
import utkarsh from '../../../Images/team/utkarsh.png'
import uday from '../../../Images/team/uday.jpeg'
import kaif from '../../../Images/team/kaif.jpeg'
import yash from '../../../Images/team/yash.jpeg'
import chutia from '../../../Images/team/chutia.jpg'
import anshita from '../../../Images/team/anshita.jpg'
import kratika from '../../../Images/team/kratika.jpg'
import harsh from '../../../Images/team/harsh.jpg'
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
  const team = [
    {
      name: "Tanay Aggarwal",
      linkedIn:"https://www.tanayaggarwal.com",
      image : tanay,
    },
    {
      name: "Utkarsh Ahuja",
      linkedIn:"https://linktr.ee/ahuja_utkarsh",
      image : utkarsh,
    },
    {
      name: "Uday Sanghwan",
      linkedIn:"https://linktr.ee/uday_sangwan",
      image : uday,
    },
    {
      name: "Mohd Kaif",
      linkedIn:"https://www.linkedin.com/in/mohd-kaif-7ba250228",
      image : kaif,
    },
    {
      name: "Yash Chaudhary",
      linkedIn:"https://www.linkedin.com/in/yash-c88/",
      image : yash,
    },
    {
      name: "Anshita Chaudhary",
      linkedIn:"https://www.linkedin.com/in/kratika-suri-429229228",
      image : anshita,
    },
    {
      name: "Ankit Chaudhary",
      linkedIn:"https://www.linkedin.com/in/anshita-chaudhary-7b0272253",
      image : chutia,
    },
    {
      name: "Kratika Suri",
      linkedIn:"https://www.linkedin.com/in/kratika-suri-429229228",
      image : kratika,
    },{
      name: "Harsh Jain",
      linkedIn:"https://www.linkedin.com/in/harsh-jain-10467a22b",
      image : harsh,
    },
  ];
  function memberCard(member)
  {
    return <div class="mx-[15px] w-[160px]">
                <a href={member.linkedIn} target="_blank"><img src={member.image} className=' mx-auto rounded-[50%] w-36 h-36'/></a>
                <h4 className='text-[18px] text-black font-semibold'>{member.name}</h4>
                <a href={member.linkedIn}><h5 className='font-bold text-[16px] text-blue-600 '>Linkedin</h5></a>
            </div>
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
        <div class="md:flex justify-between m-0 w-[80%] md:w-[80%] mx-auto">
          <div className=' flex'>
              <h4>FOLLOW US </h4>
              <div className='py-1 '>
              <a  href='https://www.instagram.com/avensis_2023/'> <FaInstagram className='fa-brands fa-instagram fa-2 ml-2'></FaInstagram></a> </div>
              <FiMail className='mt-1 ml-2'></FiMail>              
              <a className=' ml-1' href="mailto:avensis2023@msit.in">avensis2023@msit.in</a>
          </div>
                  <div className=''>
               <h4> MSIT C-4 JANAKPURI, Delhi 110058 </h4>
              </div><h4 className="text-[12px] md:text-sm ">Coded with ❤ by <button onClick={displayTeam} className=   'text-[#EBB22D] font-bold text-[13px]'>Tech Team, Avensis</button></h4>
        </div>
          

        

        {count==1 &&
                <div className=' w-[80%] mx-auto bg-white rounded-lg text-black fixed top-[5%] left-[10%]'>
                <h1 className='py-3 ml-[10%] text-3xl font-semibold text-black'>Meet the team</h1>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <div className='w-[90%] flex flex-wrap mx-auto justify-around text-center mt-3'>
                        {team.map((member) => (
                          memberCard(member)
                        ))}

                </div>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <button onClick={hideTeam} type="button" id="closeteam" className='ml-[85%] my-2' data-dismiss="modal">Close</button>
              </div>
                 }





             </div>
      
    </div>
  )
}

export default Footer