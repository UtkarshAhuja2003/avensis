import React from 'react'
import image1 from '../../../Images/collage-m-color (1).png'
import image2 from '../../../Images/vector5.png'

const index = () => {
  return (
    <div>
      <div class="hero">
        <img class="heroine" src={image1} alt=""/><div id="Br"><br/></div>
        <img class="vector5" src={image2}/>
        <div id="ABout">
            <div class="ABout1">
                <span >A B O U T</span><br/>
                <div class="w-[0px] aboutline"></div>
                <p className='leading-[15px] text-[10px] md:text-[15px] md:leading-[30px]   '>
                AVENSIS, organized by MSIT's faculty and student body, provides a launch-pad for technology enthusiasts to showcase their inventiveness through competitive events, guest lectures, workshops, and exhibitions.</p>
                <a href="#video"><button class="subscribe0 mt-6 ml-12">WATCH TEASER</button></a>
            </div>
            <div class="stats">
                <div class="numbers s1"><div id="Br"><br/><br/></div>
                    <div class="middle">
                        <div className='flex justify-center'><p id="nbr">30</p><span>+</span></div>
                        <h5>SPEAKERS</h5>
                    </div>
                </div>
                <div class="numbers padleft s2"><div id="Br"><br/><br/></div>
                <div class="middle">
                    <div className='flex justify-center'><p id="nbr2">100</p><span>+</span></div>
                    <h5>COMPETITIONS</h5>
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
