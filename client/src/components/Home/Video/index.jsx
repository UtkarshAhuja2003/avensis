import React from 'react'
import video from '../../../Images/avensis1.M4V'
import image from "../../../Images/april.png"

const index = () => {
  return (
    <div className='bg-theme mb-24'>

      <section className="video bg-no-repeat bg-center  bg-[url(https://i.ibb.co/y04dbzV/april-01.png)]" id='video'>
          <video className='w-[70%] mx-auto border-8  border-white' autoPlay loop muted>
              <source src={video} type="video/mp4"/>
              <source src="Images/movie.ogg" type="video/ogg"/>
              Your browser does not support the video tag.
            </video>
      </section>
    </div>
  )
}

export default index



