import React, { useState ,useEffect } from "react";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo_tri.png"
import cookie from "js-cookie"

const Navbar = () => {


  let Links = [
    { name: "About", link: "#ABout" },
    { name: "Events", link: "/events" },
    { name: "Albums", link: "/" },
    { name: "Contact Us", link: "#footer" },
  ];

  let [open, setOpen] = useState(false);
  const [user,setUser]=useState("REGISTER");
  console.log(user)
  // if(cookie.get("name",{ domain: ''})&&user=="REGISTER"){
  //   console.log(user)
  //   setUser(cookie.get("name",{ domain: ''}));
  // }
  useEffect(() => {
    fetch('https://avensis-backend.msit.in/api/current_user', {
  credentials: 'include'
      })
      .then(response => response.json())
      .then(user => {
        console.log('User info:', user);
        const userName = user.name;
        console.log('User name:', userName);
        setUser(user.name);
      })
      .catch(error => {
        console.error('Error:', error);
      });

  
  }, []);
  




  return (
    <section className=" w-full top-0 left-0 flex justify-between px-20  bg-theme py-4 ">
      <div className="cursor-pointer flex">
          <Link to ="/">
          <div  className="flex">
          <img
            className="w-[65px] md:w-[80px] xl:w-[80px] h-[55px] md:h-[70px]"
            src={Logo}
            alt="Logo"
          />
          <div className="ml-1 md:ml-4">
            <h4 className="font-[ultra] text-xl md:text-[35px] font-[100] tracking-widest md:tracking-[9px] py-0 leading-5 md:leading-10 mt-3 md:mt-1">AVENSIS</h4>
            <p className=" pt-0 mt-0 tracking-wider md:tracking-widest text-[9px] md:text-sm font-[600]">Inspire | Initiate | Innovate</p>
          </div>
          </div>
          </Link>
        </div>
      <div className="md:flex justify-around   ">
        
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute top-6 cursor-pointer md:hidden"
        >
          <FaBars className="text-[20px] ml-12 mt-1" name={open ? "close" : "menu"}></FaBars>
        </div>

        <ul
          className={`md:flex  md:items-center md:pb-0pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 bg-theme " : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="my-6 md:my-2 font-dm mx-[24px] font-medium tracking-wider text-[16px] leading-8 "
            >
              <a
                href={link.link}
                className="hover:underline hover:delay-1000 transition-transform ease-in-out scale-x-0 hover:scale-x-1 underline-offset-8 decoration-[#F9F7F7] text-[#F9F7F7] hover:text-gray-300 duration-500"
              >
                {link.name}
              </a>
            </li>
            
          ))}
          {
            user=="REGISTER"?
            <Link to ="https://avensis-backend.msit.in/auth/google/callback">
            {/* <Link to ="https://avensis-backend.onrender.com/auth/google/callback"> */}
          <li>
          <button
            className="ml-4 font-medium font-dm tracking-wider bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500  border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7]
    duration-500"
          >
           {"REGISTER"}

          </button>
          </li>
          </Link>
:<Link to ="/pass">
          <li>
          <button
            className="ml-4 font-medium font-dm tracking-wider bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500  border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7]
    duration-500"
          >
           {user}

          </button>
          </li>
          </Link>
            
          }
          
        </ul>
      </div>
    </section>
  )
}

export default Navbar