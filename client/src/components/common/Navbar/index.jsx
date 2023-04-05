import React, { useState } from "react";
import { FaBars, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo.png"
import cookie from "js-cookie"

const Navbar = () => {


  let Links = [
    { name: "About", link: "/" },
    { name: "Events", link: "/events" },
    { name: "Albums", link: "/" },
    { name: "Contact Us", link: "/" },
  ];

  let [open, setOpen] = useState(false);
  const [user,setUser]=useState("REGISTER");
  if(cookie.get("name")&&user=="REGISTER"){
    setUser(cookie.get("name"));
  }



  return (
    <section className=" w-full top-0 left-0 flex justify-between px-20  bg-theme py-4 ">
      <div className="cursor-pointer">
          <Link to ="/">
          <img
            className="w-[170px] md:w-[180px] xl:w-[250px] h-auto"
            src={Logo}
            alt="Logo"
          />
          </Link>
        </div>
      <div className="md:flex justify-around   ">
        
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl text-white absolute top-6 cursor-pointer md:hidden"
        >
          <FaBars name={open ? "close" : "menu"}></FaBars>
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
            <Link to ="http://localhost:5000/auth/google/callback">
          <li>
          <button
            className="ml-4 font-medium font-dm tracking-wider bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500  border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7]
    duration-500"
          >
           {user}

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