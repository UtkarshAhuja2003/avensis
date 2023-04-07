import React from 'react'
import image1 from '../../../Images/img295.png'
import image2 from '../../../Images/vector5.png'

const index = () => {
  return (
    <div>
      <div class="hero">
        <img class="heroine" src={image1} alt=""/><div id="Br"><br/></div>
        <img class="vector5" src={image2}/>
        <div id="ABout">
            <div class="ABout1">
                <span>A B O U T</span><br/>
                <div class="aboutline"></div>
                <p className='text-sm leading-4 md:leading-12'>
                AVENSIS is organized by the faculty and the student body of MSIT serves as a perfect launch-pad for technology enthusiasts to showcase their intelligence and inventiveness and is a massive platform for various activities, organized in the form of competitive events, guest lectures, technical workshops, and exhibition to develop and showcase their technical prowess.</p>
                <a href="https://youtu.be/dQw4w9WgXcQ"><button class="subscribe0 mt-6 ml-12">WATCH TEASER</button></a>
            </div>
            <div class="stats">
                <div class="numbers s1"><div id="Br"><br/><br/></div>
                    <div class="middle">
                        <div className='flex justify-center'><p id="nbr">100</p><span>+</span></div>
                        <h5>COMPETITIONS</h5>
                    </div>
                </div>
                <div class="numbers padleft s2"><div id="Br"><br/><br/></div>
                <div class="middle">
                    <div className='flex justify-center'><p id="nbr2">150</p><span>+</span></div>
                    <h5>SPEAKERS</h5>
                </div>
                </div>
                <div class="numbers s3"><div id="Br"><br/></div>
                <div className='flex justify-center'><p id="nbr3">50</p><span>+</span></div>
                    <h5>EVENTS</h5>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default index
