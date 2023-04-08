import React from 'react'
import image1 from '../../../Images/shape3.png'
import image2 from '../../../Images/shape2.png'
import image3 from '../../../Images/shape6.png'
import './../../../style.css';
// import { bounce } from 'react-animations';
import { fadeInLeftBig ,fadeInRightBig ,tada ,flash } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const index = () => {

  const styles = StyleSheet.create({
    fadeInLeftBig : {
      animationName: fadeInLeftBig ,
      animationDuration: '2s'
    },

    fadeInRightBig : {
      animationName: fadeInRightBig ,
      animationDuration: '2s'
    },

    tada  : {
      animationName: tada  ,
      animationDuration: '2s'
    },

    tada  : {
      animationName: tada  ,
      animationDuration: '2s'
    },

    flash  : {
      animationName: flash ,
      animationDuration: '3s'
    },
  });

  
  return (
    
    <div  className=''>
        <section id="Head">
            <div id="head">
            <img src={image1} className="shape3"/>
            <div id="Headtitle">
           
                <h1  className={`${css(styles.fadeInLeftBig)}`}>MULTIVERSAL ESCAPADE</h1>
                <h2 class={`${css(styles.fadeInRightBig)}`}>"ticket to a new reality" </h2>
                <p class={`${css(styles.flash)}`}>Step into the next dimension at AVENSIS - The Annual Technical Fest of MSIT </p>
            </div>
            <img src={image2} className="shape2"/>
        </div>
        <div className="buttons">
            <a href='#mainevent'><button className= {`subscribe2 ${css(styles.tada)}`}  >GET STARTED</button></a> 
            <div className='w-[40px]'></div>
            <a href="events.html"><button className= {`subscribe3 ${css(styles.tada)}`} >EXPLORE</button></a> 
        </div>
        <img src={image3} id="shape5"/>
        </section>
    </div>

  )
}

export default index
