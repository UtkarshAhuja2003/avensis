import React, { useEffect } from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import shape3 from '../../Images/shape3.png'
import shape2 from '../../Images/shape2.png'
import EventCard from '../../components/Events/EventCard'
import image from '../../Images/Speakers/speaker1.png'
import circle from '../../Images/circle.png'
import { fadeInLeftBig ,fadeInRightBig ,tada ,flash } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { Events } from '../../config/events.js'

const Index = () => {
    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);

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

      const literary = Events.slice(6,9);
      const technical = Events.slice(9,12);
      const gaming = Events.slice(2,6);
      const creativity = Events.slice(0,2);
      const robotics = Events.slice(12,14);


  return (
    <div className='bg-[#171221]'>
      <Navbar/> 
            <section id="Head">
                <div id="head">
                <img src={shape3} class="shape3"/>
                <div id="Headtitle">
                <h1  className={`${css(styles.fadeInLeftBig)}`}>MULTIVERSAL ESCAPADE</h1>
                <h2 class={`${css(styles.fadeInRightBig)}`}>"ticket to a new reality" </h2>
                <p class={`${css(styles.flash)}`}>Step into the next dimension at AVENSIS - The Annual Technical Fest of MSIT </p>
                </div>
                <img src={shape2} class="shape2"/>
            </div>
            </section>

            <div class="eventS">
        <div class="event-theme">
        {/* <img src={circle} class="circle1"/>
        <img src={circle} class="circle2"/> */}
          <span class="eventstitle">TECHNICAL</span>
          <div class="event-boxes">
            {
                technical.map(event => (
                    <EventCard
                        catName = {event.catName}
                        id = {event.id}
                        name = {event.name}
                        time = {event.time}
                        image = {event.tabs[0].image}
                        date = {event.date}
                        desc = {event.desc}
                    />
                ))
            }
        </div>
      </div>
        <div class="event-theme">
            {/* <img src={circle} class="circle1"/>
            <img src={circle} class="circle2"/> */}
          <span class="eventstitle">ROBOTICS</span>
          <div class="event-boxes">
            {
                robotics.map(event => (
                    <EventCard
                        catName = {event.catName}
                        id = {event.id}
                        name = {event.name}
                        time = {event.time}
                        image = {event.tabs[0].image}
                        date = {event.date}
                        desc = {event.desc}
                    />
                ))
            }
        </div>
      </div>
      <div class="event-theme">
            {/* <img src={circle} class="circle1"/>
            <img src={circle} class="circle2"/> */}
          <span class="eventstitle">LITERARY</span>
          <div class="event-boxes">
            {
                literary.map(event => (
                    <EventCard
                        catName = {event.catName}
                        id = {event.id}
                        name = {event.name}
                        time = {event.time}
                        image = {event.tabs[0].image}
                        date = {event.date}
                        desc = {event.desc}
                    />
                ))
            }
        </div>
      </div>
      <div class="event-theme">
            {/* <img src={circle} class="circle1"/>
            <img src={circle} class="circle2"/> */}
          <span class="eventstitle">GAMING</span>
          <div class="event-boxes">
            {
                gaming.map(event => (
                    <EventCard
                        catName = {event.catName}
                        id = {event.id}
                        name = {event.name}
                        time = {event.time}
                        image = {event.tabs[0].image}
                        date = {event.date}
                        desc = {event.desc}
                    />
                ))
            }
        </div>
      </div>
      <div class="event-theme">
            {/* <img src={circle} class="circle1"/>
            <img src={circle} class="circle2"/> */}
          <span class="eventstitle">FUN AND CREATIVITY</span>
          <div class="event-boxes">
            {
                creativity.map(event => (
                    <EventCard
                        catName = {event.catName}
                        id = {event.id} 
                        name = {event.name}
                        time = {event.time}
                        image = {event.tabs[0].image}
                        date = {event.date}
                        desc = {event.desc}
                    />
                ))
            }
        </div>
      </div>
      </div>
    
      <Footer/>
    </div>
  )
}

export default Index
