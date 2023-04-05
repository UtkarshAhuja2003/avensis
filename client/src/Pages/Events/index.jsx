import React from 'react'
import Navbar from '../../components/common/Navbar'
import Footer from '../../components/common/Footer'
import shape3 from '../../Images/shape3.png'
import shape2 from '../../Images/shape2.png'
import EventCard from '../../components/Events/EventCard'
import image from '../../Images/Speakers/speaker1.png'
import circle from '../../Images/circle.png'

const index = () => {
    const robotics = [
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },{
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        }
    ];

    const literary = [
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
    ];
    const technical = [
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
    ];
    const gaming = [
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        }
    ];
    const creativity = [
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        },
        {
            "name": "Elon Musk",
            "date": "MAY 13th",
            "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "image": image,
            "time": "11:00am - 1:00pm"
        }
    ];
  return (
    <div className='bg-[#171221]'>
      <Navbar/> 
            <section id="Head">
                <div id="head">
                <img src={shape3} class="shape3"/>
                <div id="Headtitle">
                    <h2 class="pad">UNLEASH YOUR</h2>
                    <h2>CREATIVITY WITH QREATE</h2>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                        Velit officia consequat duis enim velit mollit. Exercitation veniam</p>
                </div>
                <img src={shape2} class="shape2"/>
            </div>
            </section>

            <div class="eventS">
        <div class="event-theme">
            <img src={circle} class="circle1"/>
            <img src={circle} class="circle2"/>
          <span class="eventstitle">ROBOTICS</span>
          <div class="event-boxes">
            {
                robotics.map(event => (
                    <EventCard
                        name = {event.name}
                        time = {event.time}
                        image = {event.image}
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
                        name = {event.name}
                        time = {event.time}
                        image = {event.image}
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
          <span class="eventstitle">TECHNICAL</span>
          <div class="event-boxes">
            {
                technical.map(event => (
                    <EventCard
                        name = {event.name}
                        time = {event.time}
                        image = {event.image}
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
                        name = {event.name}
                        time = {event.time}
                        image = {event.image}
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
                        name = {event.name}
                        time = {event.time}
                        image = {event.image}
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

export default index
