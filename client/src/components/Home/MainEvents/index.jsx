import React from 'react'
import image1 from '../../../Images/Sphere-Black-Matte1(1).png'
import image2 from '../../../Images/unsplash_hgO1wFPXl3I.png'
import image3 from '../../../Images/shape5.png'
import image4 from '../../../Images/vector.png'
import image5 from '../../../Images/unsplash_JNuKyKXLh8U.png'
import image6 from '../../../Images/unsplash_w55SpMmoPgE.png'
import image7 from '../../../Images/unsplash_eCktzGjC-iU.png'

const index = () => {
  return (
    <div>
      <section id="mainevents">
        <img src={image1} class="sphere0"/>
        
        <div id="mainevent" >
            
                <div id="event1">
                    <img src={image2} alt="event1"/>
                    <div class="about">
                        <span>EVENT NAME</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam aut aperiam magni facere, vel sit quae cupiditate quas eum rem aliquam culpa corporis consectetur sunt, placeat animi nam eveniet. Maiores.</p>
                    </div>
                </div>
        </div>
        <img src={image3} class="shape5"/>
        <div id="Events"> 
                <img src={image4}/>
                <div id="events">
                
                    <img class="events4 z-[1]" src={image5}  />
                    <img class="events2" src={image6}/>
                    <img class="events3" src={image7}/>
                    <div className='z-[2]' id="aboutevents">
                    <span>EVENTS</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quae molestiae, cum qui ullam consequatur a temporibus nesciunt commodi, eum modi minus vel eligendi sint aspernatur dolor sequi tenetur at totam?</p>
                    </div>
                </div>
        </div>
        </section>
        <div className='h-48'></div>
    </div>
  )
}

export default index
