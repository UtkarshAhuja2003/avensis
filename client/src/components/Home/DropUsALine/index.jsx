import React, { useState } from 'react'
import image from '../../../Images/dropline-removebg-preview.png'
import response from '../../../Images/response.png'

const Index = () => {

    const [register,setRegister]=useState(0);

    const [user, setUser] = useState({
        name:"",email:"",desc:""
    });

    const handleInputs = (e) => {
        const { name, value } = e.target;
        setUser({...user, [name]: value})
    };
    const postData = async (e) => {
        e.preventDefault();
        const { name,email,desc } = user;
        console.log(desc);
        setRegister(1);
        const res = await fetch("https://avensis-backend.onrender.com/form", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
               name,
               email,
               desc
            }),
        });
        const data = await res.json();
        console.log(data);
    };

  return (
    <div className="bg-[#171221] py-[5%] mx-full mt-12">
        <div className="md:flex justify-between mx-[10%] md:mx-[13%]">
            <div className="w-full md:w-[40%]">
                <h1 className='text-white font-[ultra] text-2xl md:text-[32px] tracking-widest'> DROP US A LINE</h1>
                {register==0 &&
                    <form method='POST'>
                    <input type="string"
                        value={user.name}
                        onChange={handleInputs}
                        name="name"
                        autoComplete="off"
                         className="w-full mt-6 bg-[#171221] border-2 border-b-4 py-2 pl-3 border-[#771EBD] text-[#EBB22D] placeholder:text-[#EBB22D] outline-none text-xl" placeholder="Your Name"/> 
                    <br />
                    <input type="string"
                        value={user.email}
                        onChange={handleInputs}
                        name="email"
                        autoComplete="off" 
                        className="w-full mt-6 bg-[#171221] border-2 border-b-4 py-2 pl-3 border-[#771EBD] text-[#EBB22D] placeholder:text-[#EBB22D] outline-none text-xl" placeholder="Your Email"/>  
                    <br />
                    <input type="string"
                        value={user.desc}
                        onChange={handleInputs}
                        name="desc"
                        autoComplete="off"
                         className="w-full mt-6 bg-[#171221] border-2 border-b-4 py-2 pl-3 border-[#771EBD] text-[#EBB22D] placeholder:text-[#EBB22D] outline-none text-xl h-[140px]" placeholder="Your Message" />  
                    <br />
                    <a href="review.html"><button onClick={postData} className="w-full mt-6 py-4 text-white bg-[linear-gradient(90deg,#771ebd,#be17c3)] hover:bg-[linear-gradient(90deg,#be17c3,#771ebd)] ease-in-out duration-300 rounded-full">SUBMIT</button></a>
                </form>
                }

                {
                register==1 && 
                <div>
                    <img src={response} className='w-48 md:w-[230px] mt-12 md:mt-24 mx-auto' alt="" />
                    <p className='text-white font-[roboto] text-center mt-12 text-grey-200 text-2xl tracking-widest'>Thank You!! for your response</p>
                </div>
                
                }
                
                
            </div>
            <div className="">
                <img className='w-[0%] md:w-full mt-32 md:mt-0' src={image} />
            </div>
        </div>
    </div>
  )
}

export default Index
