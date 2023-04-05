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
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni necessitatibus numquam commodi! Nemo sunt, earum iure autem aliquam placeat qui? Expedita quas, nemo dicta et dolor magnam blanditiis cumque iusto!</p>
                <a href="https://youtu.be/dQw4w9WgXcQ"><button class="subscribe0">WATCH TEASER</button></a>
            </div>
            <div class="stats">
                <div class="numbers s1"><div id="Br"><br/><br/></div>
                    <div class="middle">
                        <div className='flex justify-center'><p id="nbr">100</p><span>+</span></div>
                        <h5>EVENTS</h5>
                    </div>
                </div>
                <div class="numbers padleft s2"><div id="Br"><br/><br/></div>
                <div class="middle">
                    <div className='flex justify-center'><p id="nbr2">150</p><span>+</span></div>
                    <h5>SPESKERS</h5>
                </div>
                </div>
                <div class="numbers s3"><div id="Br"><br/></div>
                <div className='flex justify-center'><p id="nbr3">50</p><span>+</span></div>
                    <h5>SOME</h5>
                    </div>
                </div>
            </div>
    </div>
    </div>
  )
}

export default index
