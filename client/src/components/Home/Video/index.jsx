import React from 'react'
import video from '../../../Images/avensis1.M4V'

const index = () => {
  return (
    <div className='bg-theme mb-24'>
      <section className="video" id='video'>
          <video className='w-full' autoPlay loop muted>
              <source src={video} type="video/mp4"/>
              <source src="Images/movie.ogg" type="video/ogg"/>
              Your browser does not support the video tag.
            </video>
      </section>
    </div>
  )
}

export default index
