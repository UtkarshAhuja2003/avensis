import React from 'react'
import { Link } from 'react-router-dom'

const index = (data) => {
  return (
    <Link to={`/${data.catName}/${data.id}`}><div>
      <div class="event-box my-4"  id="eventstart">
              <div class="flip-cont">
                  
                  <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                  <div class="flipper">
                      <div class="front"><img src={data.image} className='h-[210px] w-[220px]'/></div>
                      <div class="back">
                          <div class="backcontent">
                              <div class="aboutevent">
                                 <p>{data.desc}</p>
                              </div>  
                              <div class="registerevent">
                                  <hr/>
                                  <div class="registerbutton">
                                     <span><a href="register.html">REGISTER</a></span> 
                                  </div>
                              </div>
                          </div>
                      </div>
                    </div>
                  </div>
              </div>
              <div class="event-info">
                 <div class="info">
                     <h1>{data.name}</h1>
                     <h3>{data.date}</h3>
                     <h2>{data.time}</h2>
                 </div>
              </div>
          </div>
    </div></Link>
  )
}

export default index
