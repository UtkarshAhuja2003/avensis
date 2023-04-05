import React from 'react'
import image1 from '../../../Images/shape3.png'
import image2 from '../../../Images/shape2.png'
import image3 from '../../../Images/shape6.png'
import './../../../style.css';

const index = () => {
  return (
    <div>
        <section id="Head">
            <div id="head">
            <img src={image1} className="shape3"/>
            <div id="Headtitle">
                <h2 className="pad">UNLEASH YOUR</h2>
                <h2>CREATIVITY WITH QREATE</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. Exercitation veniam</p>
            </div>
            <img src={image2} className="shape2"/>
        </div>
        <div className="buttons">
            <a href="#mainevent"><button className="subscribe2">GET STARTED</button></a> 
            <div className='w-[40px]'></div>
            <a href="events.html"><button className="subscribe3">EXPLORE</button></a> 
        </div>
        <img src={image3} id="shape5"/>
        </section>
    </div>
  )
}

export default index
