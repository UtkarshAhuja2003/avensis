import React from 'react'
import video from '../../../Images/dj_-_1257 (Original)_Trim.mp4'

const index = () => {
  return (
    <div className='bg-theme mb-24'>
      <section className="video">
          <video className='w-full' autoPlay loop>
              <source src={video} type="video/mp4"/>
              <source src="Images/movie.ogg" type="video/ogg"/>
              Your browser does not support the video tag.
            </video>
      </section>
    </div>
  )
}

export default index
