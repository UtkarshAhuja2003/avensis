import React, { useRef, useState, useEffect } from 'react';
import image1 from '../../../Images/Sphere-Black-Matte1(1).png'
import image2 from '../../../Images/unsplash_hgO1wFPXl3I.png'
import image3 from '../../../Images/shape5.png'
import image5 from '../../../Images/vector.png'
import image4 from '../../../Images/Asset 1.png'
import image6 from '../../../Images/events1.png'
import image7 from '../../../Images/unsplash_eCktzGjC-iU.png'
import { StyleSheet, css } from 'aphrodite';
import { fadeInLeft, fadeInRight } from 'react-animations';
import { useInView } from 'react-intersection-observer';

const Index = () => {

  const styles = StyleSheet.create({
    fadeInLeft: {
      animationName: fadeInLeft,
      animationDuration: '1s',
    },
    fadeInRight: {
      animationName: fadeInRight,
      animationDuration: '1s',
    },
  });

  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  });
  const [animation, setAnimation] = useState('');

  useEffect(() => {
    if (inView) {
      setAnimation(`${css(styles.fadeInLeft)} ${css(styles.fadeInRight)}`);
    }
  }, [inView, styles]);
  return (
    <div>
      <section id="mainevents">
        <img src={image1} class="sphere0"/>
        
        <div id="mainevent">
      <div id="event1" ref={ref} className={animation}>
        <img src={image2} alt="event1" className={`${css(styles.fadeInRight)}`}/>
        <div className={`about ${css(styles.fadeInRight)}`}>
          <span>COMING SOON</span>
          <p className='blur-[5px]'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Laboriosam aut
            aperiam magni facere, vel sit quae cupiditate quas eum rem aliquam
            culpa corporis consectetur sunt, placeat animi nam eveniet.
            Maiores.
          </p>
        </div>
      </div>
    </div>
        {/* <img src={image3} class="shape5"/>
        <div id="Events" > 
                {/* <img src={image4}/> */}
                {/* <div id="events" > */}
                
                    {/* <img class="events4 z-[1]" src={image5}  /> */}
                    {/* <img class="events2" src={image6}/>
                    <img class="events3" src={image7}/> */}
                    {/* <div className='z-[2]' id="aboutevents"> */}
                    {/* <span>EVENTS</span> */}
                    {/* <p className={`${css(styles.fadeInRight)}`}>A must-attend event for tech enthusiasts with coding challenges, workshops, exhibitions, guest lectures, and networking opportunities, it's the perfect platform to showcase skills, learn new ones, and connect with like-minded individuals in the tech community.</p> */}
                    {/* </div> */}
                {/* </div> */}
        {/* </div> */}
        </section>
        <div className='md:h-48'></div>
    </div>
  )
}

export default Index
