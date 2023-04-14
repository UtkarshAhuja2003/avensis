import image1 from '../Images/Events/Technical/Hackavenue/logo.png';
import robowar from '../Images/Events/Robotics/robowar.jpeg'
import robowar2 from '../Images/Events/Robotics/robowar2.jpeg'
import robowar3 from '../Images/Events/Robotics/robowar3.jpeg'
import robowar4 from '../Images/Events/Robotics/robowar4.jpeg'
import robowar5 from '../Images/Events/Robotics/robowar5.jpeg'
import robomaze from '../Images/Events/Robotics/robomaze.jpeg'
import robomaze1 from '../Images/Events/Robotics/robomaze2.png'
import robomaze2 from '../Images/Events/Robotics/robomaze3.jpeg'
import clue from '../Images/Events/fun_crev/clue.jpeg'
import meme from '../Images/Events/fun_crev/meme.jpeg'
import bgmi from '../Images/Events/Gaming/bgmi.jpeg'
import cod from '../Images/Events/Gaming/cod.jpeg'
import stumble from '../Images/Events/Gaming/su,nle.jpeg'
import valo from '../Images/Events/Gaming/valo.jpeg'
import conq from '../Images/Events/literary/conq.jpeg'
import physchs from '../Images/Events/literary/physchs.jpeg'
import threads from '../Images/Events/literary/threads.jpeg'
import image22 from '../Images/Events/Technical/Hackavenue/code_conquer.jpg'
import image23 from '../Images/Events/Technical/Hackavenue/wizard.png'


export const Events = [
  {
    id: 0,
    name:"Clue minati",
    catName:"fun_crev",
    desc:"prize-3000 INR",
    date: "APRIL 19th",
    time: "11:00am - 1:00pm",
    tabs: [
      {
        name:"ABOUT",
        image: clue,
        id:0,
        content: "Each team will be given hurdles along with a treasure map for the initial round based , this round will be time based and if the team has completed hurdles within that time frame. That team will move forward to the final round. We will be dividing the slots based on number of teams that have registered. In the last round, we will be conducting some fun tasks which will help us decide our winner.  "
      },
      {
        name:"SIZE",
        image: clue,
        id:1,
        content: " 3 members"
                   
      },
      {
        name:"EXPECTED FOOTFALL",
        image: clue,
        id:2,
        content: " 10 teams "
      },
      {
        name:"RULES",
        image: clue,
        id:3,
        content: " <div className='text-2xl'>	We will keep track of time. <br/>The team which will complete the task within the time frame will proceed to the last round. <br/>The top 2 teams will be announced as winners at the end of the day. <br/></div>"
      },
      {
        name:"VENUE",
        image: clue,
        id:4,
        content: "Infront of Boy’s Hostel"
      }
    ],
  },
  {
    id: 1,
    name:"Meme and you",
    catName:"fun_crev",
    date: "APRIL 19th",
    time: "11:00am - 1:00pm",
    desc:"prize-3000 INR",
    tabs: [
      {
        name:"ABOUT",
        id:0,
        image: meme,
        content: "<div className=''>   <span className=' text-[#4A9FA0] font-bold '> ROUND 1: </span>  Make each team caption a funny meme related image in 5 minutes and only about half of the total teams will qualify for the next round. <br/>   <span className=' text-[#4A9FA0] font-bold '> ROUND 2: </span>   Make each team enact a given meme and only half of those teams will qualify for the next round. <br/>ROUND 3- Make them create a funny meme on their friends funny picture and the top two funny memes will get prices.(will create it on their phone or laptops and email it to us) <br/> </div>"
      },
      {
        name:"SIZE",
        id:1,
        image: meme,
        content: " <span className=' text-[#4A9FA0] font-bold '> Team Size: </span>  4-5 members"
                  
      },
      {
        name:"EXPECTED FOOTFALL",
        id:2,
        image: meme,
        content: " 9-10 teams "
      },
      {
        name:"RULES",
        id:3,
        image: meme,
        content: " <div className='text-2xl'>	-	We will keep track of time for each round. <br/>-	The teams would be marked based on how funny memes they make and their meme knowledge <br/>-	Each round will be elimination round and only the winner + runner-up will get prices. <br/></div>"
      },
      {
        name:"VENUE",
        id:4,
        image: meme,
        content: "Ground beside boys hostel"
      },
    ],
  },
      {
        id: 2,
        name:"BGMI",
        catName:"gaming",
        date: "APRIL 19th",
        time: "11:00am - 1:00pm",
        desc:"",
        tabs: [
        {
          name:"ABOUT",
          id:0,
          image: bgmi,
          content: "There will be 100 students fighting against each other in team of four inside a server room to be declared as champions. The last team standing will be the champions . "
        },
        {
          name:"SIZE",
          id:1,
          image: bgmi,
          content: "   <span className=' text-[#4A9FA0] font-bold '> Team Size: </span>  maximum 4"
                    
        },
        {
          name:"EXPECTED FOOTFALL",
          id:2,
          image: bgmi,
          content: " 300-400 "
        },
        {
          name:"REQIREMENT",
          id:3,
          image: bgmi,
          content: "<div className='text-2xl'>A LAB <br/>MOBILE PHONES (to be arranged by students) <br/>Wi-Fi connection <br/></div>"
        },
      ],
    },
    {
      id: 3,
      name:"STUMBLE GUYS",
      catName:"gaming",
      date: "APRIL 19th",
      time: "11:00am - 1:00pm",
      desc:"",
      tabs: [
        {
          name:"ABOUT",
          id:0,
          image: stumble,
          content: "32 PLAYERS WILL BE PLAYING AGAINST EACH OTHER THE FIRST ON TO REACH THE FINISH LINE WILL BE THE WINNER."
        },
        {
          name:"EXPECTED FOOTFALL",
          id:1,
          image: stumble,
          content: " 300-400 "
        },
        {
          name:"REQIREMENT",
          id:2,
          image: stumble,
          content: " <div className='text-2xl'>Venue:LAB <br/>EQUIPMENTS: WIFI, EXTENSION CORDS, MOBILE PHONES(PLAYER WILL CARRY THIER OWN) <br/></div>"
        },
      ],
    },
    {
      id: 4,
      name:"VALORANT",
      catName:"gaming",
      date: "APRIL 19th",
       time: "11:00am - 1:00pm",
      desc:"",
      tabs: [
        {
          name:"ABOUT",
          id:0,
          image: valo,
          content: "EACH TEAM WILL BE CONSISTING OF 5 PLAYERS EACH. THE TEAMS WILL BE PLAYING AGAINST EACH OTHER IN 5 V 5 GAME. THE FIRST TEAM TO WIN 13 ROUNDS WINS THE GAME AND WILL BE QUALIFIED FOR THE NEXT ROUND."
        },
        {
          name:"SIZE",
          id:1,
          image: valo,
          content: "  <span className=' text-[#4A9FA0] font-bold '> Team Size: </span>  maximum 4"
                    
        },
        {
          name:"EXPECTED FOOTFALL",
          id:2,
          image: valo,
          content: " 15 teams "
        },
        {
          name:"REQIREMENT",
          id:3,
          image: valo,
          content: "<div className='text-2xl'> <span className=' text-[#4A9FA0] font-bold '> Venue: </span> LAB <br/>EQUIPMENTS: WIFI, EXTENSION CORDS, MOBILE PHONES(PLAYER WILL CARRY THIER OWN) <br/></div>"
        },
      ],
    },
    {
      id: 5,
      name:"COD",
      catName:"gaming",
      date: "APRIL 19th",
       time: "11:00am - 1:00pm",
      desc:"",
      tabs: [
        {
          name:"ABOUT",
          id:0,
          image: cod,
          content: "There will be 10 student playing against each other in a server .The last student surviving against all will be declared as winner"
        },
        {
          name:"SIZE",
          id:1,
          image: cod,
          content: " individual"
                    
        },
        {
          name:"EXPECTED FOOTFALL",
          id:2,
          image: cod,
          content: " around 300-400 "
        },
        {
          name:"REQIREMENT",
          id:3,
          image: cod,
          content: " <div className='text-2xl'>   <span className=' text-[#4A9FA0] font-bold '> Venue: </span>  LAB <br/>Mobile phone <br/>wifi-connections</div>"
        },
      ],
    },{
      id: 6,
      name:"Pick up the thread",
      catName:"literary",
      date: "APRIL 19th",
     
      desc:"PRIZE-3000 ",
      tabs: [
        {
          name:"ABOUT",
          id:0,
          image: threads,
          content: "There will be 100 students fighting against each other in team of four inside a server room to be declared as champions. The last team standing will be the champions . "
        },
        {
          name:"SIZE",
          id:1,
          image: threads,
          content: " 5-6 members "
                    
        },
        {
          name:"EXPECTED FOOTFALL",
          id:2,
          image: threads,
          content: " 10 teams"
        },
        {
          name:"REQIREMENT",
          id:3,
          image: threads,
          content: " <div className='text-2xl'>We will keep track of time till the last player on the team is left.<br/>The team which kept the discussion going on for the longest wins.<br/>The top 2 teams will be announced as winners at the end of the day.<br/><div className='flex'><div className='font-bold'>WARNING:</div><p> If the player takes more than 5 seconds to speak then a penalty of 15 seconds will be added to the total time.</p></div></div>"
        },
        {
          name:"THEME",
          id:4,
          image: threads,
          content: "Related to technology"
        },
      ],
    },

    {
      id: 7,
      name:"The Conquerors",
      catName:"literary",
      date: "APRIL 19th",
      // time: "11:00am - 1:00pm",
      desc:"Prizes - 3500 and 1500",
      tabs: [
        {
          name:"ABOUT",
          id:0,
          image: conq,
          content: "Each participant will be made to represent a buyer and a seller, they will be given a product at some base price and both have to negotiate on that base price. Buyer will target to buy the product at lowest possible price in accordance with the base price and seller will negotiate to sell the product as high as possible. Event will consist of multiple rounds at increasing difficulty level."
        },
        {
          name:"SIZE",
          id:1,
          image: conq,
          content: " Individual Participation "
                    
        },
        {
          name:"EXPECTED FOOTFALL",
          id:2,
          image: conq,
          content: " 30+"
        },
        {
          name:"REQIREMENT",
          id:3,
          image: conq,
          content: " <div className='text-2xl'>Preference 1: Common room Preference <br/> 2: Any classroom </div>"
        },
        {
          name:"THEME",
          id:4,
          image: conq,
          content: "Related to corporate meeting"
        },
      ],
    },



    {
      id: 8,
      name:"Sike the Psych",
      catName:"literary",
      date: "APRIL 19th",
      // time: "11:00am - 1:00pm",
      desc:"Prizes - 0500 and 1500",
      tabs: [
        {
          name:"ABOUT",
          id:0,
          image: physchs,
          content: "<div className='text-2xl'>This Event has two rounds: <br/>Round 1: Follow the Tale Each team will be shown 4 pictures. They have to explain the situation shown and keep connecting the situations together as the pictures are shown.<br/>Round 2: Defend the devil Each team will be given a controversial statement and they have to defend the  statements with proper arguments.</div> "
        },
        {
          name:"SIZE",
          id:1,
          image: physchs,
          content: " 3 "
                    
        },
        {
          name:"EXPECTED FOOTFALL",
          id:2,
          image: physchs,
          content: " 15 teams"
        },
        {
          name:"REQIREMENT",
          id:3,
          image: physchs,
          content: " <div className='text-2xl'> <h1 className='font-bold'>Venue:</h1> Any classroom with projector<br/><h1 className='font-bold'>Coordinators Required:</h1> 4-5 <br/><h1 className='font-bold'> Equipment: </h1> Mic, Scorecard, Posters, Decorative Material<br/></div>"
        },
        {
          name:"RULE",
          id:4,
          image: physchs,
          content: "<div className=''> Use of foul language is prohibited. <br/>Vulgar content will not be appreciated. <br/>Each team will be scored by every other team and the judges. After round 1, 5 teams will be selected based on the scores scored.</div>"
        },
      ],
    },{
        id: 9,
        name:"Hackavenue",
        desc:"PRIZE: Worth 15,000 ",
        date: "APRIL 19th",
        // time: "11:00am - 1:00pm",
        link:"https://forms.gle/DRYqRjoQXjMwWgSR8",
        catName:"technical",
        tabs: [
          {
            name:"ABOUT",
            image: image1,
            id:0,
            content: "Hack Avenue is a 2-day long-running hackathon, which will be held on the 17th and 18th of April 2023 calls for hackers, artists, coders, designers, tech evangelists, creatives, and developers from all disciplines to take part to win awesome prizes and collaborate with other developers . Throughout the 2 days hackers at Hack Avenue will have unique opportunities to learn from each other trying hands in new technologies We are determined to have an all-inclusive and diverse group of students attending."
          },
          {
            name:"TRACKS",
            image: image1,
            id:1,
            content: " <span className=' text-[#4A9FA0] font-bold '> Finance: </span> <p>The application of technology to financial services,including banking,investing and payments.</p> <br/> <span className='text-[#4A9FA0] font-bold '>HealtCare:</span> <p>The use of technology to improve healthcare outcomes, including medical devices , telemedicine , and data analytics</p>  <br/> <span className='text-[#4A9FA0] font-bold' >Sustainablity:</span><p> innovation are creative and wild ideas that solve any environmental problem </p>  <br/>   <span className='text-[#4A9FA0] font-bold'>Social Impact:</span> <p>Everything has a cause in this rapid growing world </p>"
                      
          },
          { 
            name:"PRIZES",
            image: image1,
            id:2,
            content: " <div className= 'font-bold text-white'>  First prize -6000rs    <br/>      Second Prize-3000rs     <br/>    Third Prize-1000rs</div>"
          },
          {
            name:"SPEAKERS",
            image: image1,
            id:3,
            content: " Coming Soon "
          },
          {
            name:"GUIDELINES DAY-2",
            image: image1,
            id:4,
            content: "There is no restriction on the type of hack you build or who the hack is for software , prototypes abd ideas hack are all allowed <br/> Participants are not allowed to start their project before the hackathon starts <br/> you are not allowed to reuse code from exicting projects <br/> Usage of open-source libraries/packages is allowed <br/> Participants must bring their own laptop"
          },
      
      ],
    },
    {
      id: 10,
      name:"CODE-CONQUER",
      desc:"PRIZE: 6,000 INR",
      date: "APRIL 19th",
      time: "11:00am - 1:00pm",
      catName:"technical",
      tabs: [
        {
          name:"ABOUT",
          image: image22,
          id:0,
          content: "Welcome to the Labyrinth of programming residing coding challengers with various hit points, defeat the challenger and heal yourself as well as win existing rewards.<br/><br/>Once you enter the Labyrinth you will be given HP of 300s and facing the 1st coding challenger, once you beat the challenger you will get extra HP of 300s, similarly for beating the 2nd challenger you will be given the same amount of HP, but the excitement begins as you beat the 3rd challenger, this time you will be winning a reward as well and gain HP of 420s, and for beating the 4th challenger you will be getting a HP of 600s, bigger rewards and a gateway to beat the ultimate challenger, defeat him you shall be known as “THE CONQUEROR”."
        },
        {
          name:"NOTE",
          image: image22,
          id:1,
          content: " The Labyrinth is considered as one of the most lethal places by the scholars, which is yet to be conquered, so it’s essential to enter it with your partner.<br/>Once your HP reaches zero you won’t be able to respawn.<br/>Each health point is equal to 1 second of life."
                    
        },
        { 
          name:"TIPS",
          image: image22,
          id:2,
          content: " <div className= 'font-bold text-white'> Try to beat the challengers as fast as possible as it will help you to gain a chance to beat the ultimate challenger.</div>"
        }    
    ],
  },
  {
    id: 11,
    name:"Hackavenue",
    desc:"  ",
    date: "APRIL 19th-20th",
    time: "11:00am - 1:00pm",
    catName:"technical",
    tabs: [
      {
        name:"ABOUT",
        image: image23,
        id:0,
        content: "<span className='text-[#4A9FA0] font-semibold' >What is the WIX platform,<span/><br/><br/>Welcome to Web Wizard and Join us for an exciting event where you'll learn how to design your stunning website using the user-friendly WIX platform, with absolutely no coding required! Whether you're a fresher, aspiring to be a web developer, or just someone who wants to create a professional-looking website, this event is for you.<br/><br/>No coding experience is required, making this event accessible to everyone, from beginners to those with some web design knowledge. WIX is a popular website design platform known for its intuitive interface and flexibility, making it a great choice for anyone looking to create a professional website without the need for coding skills.<br/><br/>Don't miss this opportunity to unlock your creativity and design a website that truly represents you or your business. Join us for an empowering event and take the first step towards building your dream website with WIX!"
      },
      {
        name:"THEMES",
        image: image23,
        id:1,
        content: " <div className='font-bold '><ul><li>Sustainable Fashion and Beauty Blog.</li><li>Pet Adoption and Rescue/Secure.</li><li>Virtual Fitness Studio.</li><li>Meditation for a Healthy Mind.</li></ul></div>"
                  
      },
      { 
        name:"DESCRIPTION",
        image: image23,
        id:2,
        content: " <div className= 'font-bold text-white'>What is in the Event:<br/><br/>1. After Registration, the Participants get allotted 1 desktop.<br/><br/>2. On choosing a favourable topic they have 1 hour to design their website to compete with other participants to secure their points.<br/><br/>3.Participants or the team selected by our judges is pronounced as the winner.</div>"
      }  
  ],
},
    {
      id: 12,
  name:"Robo_war",
  catName:"robotics",
  date: "APRIL 19th",
  time: "1:30pm Onwards",
  desc:"prize-4000 , 2500 , 1500",
  link:"https://forms.gle/fF9MAEarfxnX5v2H8",
  tabs: [
    {
      name:"ABOUT",
      image: robowar,
      id:0,
      content: " ROBOWAR is a combat competition. The only way to win the fight is that you have to pin down  or destroy the opponent robot. The fittest one will survive in this event. Robots may be equipped  with mechanical weapons such as blades, saws, cutters, claws etc.  "
    },
    {
      name:"WINNING CRITERIA",
      image: robowar,
      id:1,
      content: "<div className=''>1.	The competition will be played on a knock-out basis consisting of 2 players at a time.  <br/>2.	The maximum duration of each War/Fight will be 5 minutes.  <br/>3.	The robot will win if the robot pushes the opponent to the ditch successfully or  successfully immobilizes the opponent or out of the arena.  <br/>4.	Match will be interrupted if crossings of wire take place.  <br/>5.	No member will be allowed to enter the war zone without permission of coordinators.  <br/>6.	The organizers reserve the rights to change any or all of the above rules as they deem  fit.  <br/>7.	Violation of any of the above rules will lead to disqualification.  <br/></div>"
                 
    },
    {
      name:"SPECIFICATION",
      image: robowar2,
      id:2,
      content: " <div className=''> <span className=' text-[#4A9FA0] font-bold '>ROBOT SPECIFICATION :  <br/> </span> 1.	Maximum permissible volume. Fully unfolded robot must be within the limits of 40 cm X  55 cm (l x b). There is no maximum height for a robot (dictated by the design and weight  constraints).  <br/>2.	Robots can have weapons such as cutters, flippers, saws, lifting devices, spinning  hammers etc. Use of liquid projectiles, any kind of inflammable liquid, flame-based  weapons, radio jamming devices, high power magnets or electromagnets, are not  permitted  <br/> 3.	Both AC and DC controlled voltage systems are allowed.  </div> "
    },
    {
      name:"RULES",
      image: robowar3,
      id:3,
      content: " <div className='text-2xl'>	1.	Each team can have a maximum of four members. Students from different institutes can form  a team .  <br/>2.	Robots will be inspected for safety and reliability before being allowed to compete.  <br/>3.	Disrupting an opponent's power is not allowed.   <br/></div>"
    },
    {
      name:"VENUE",
      image: robowar4,
      id:4,
      content: "  <span className=' text-[#4A9FA0] font-bold '> SEMINAR HALL 4TH FLOOR  </span>   "
    },

   
  ],
},



{
  id: 13,
name:"Robo_maze",
date: "APRIL 19th ",
  time: "10:30pm Onwards",
catName:"robotics",
desc:"prize-2000 , 1200 , 800",
link:"https://forms.gle/wpzQ4XNEYC7nZaFD9",
tabs: [
{
  name:"ABOUT",
  image: robomaze,
  id:0,
  content: "Robo Maze game is to challenge participants to develop their programming and robotics skills by designing a robot that can successfully navigate through a complex maze, using sensors and advanced algorithms to make quick decisions and reach the end point within the shortest possible time.  "
},
{
  name:"WINNING CRITERIA",
  image: robomaze,
  id:1,
  content: "<div className=''>1.	The victory criteria for a robot maze game involve successfully navigating the robot through the maze to a specific endpoint or goal. <br/>2.	The robot must complete the maze within a certain amount of time while following any specified rules, such as staying within the bounds of the maze or avoiding certain obstacles. <br/>3.	The robot that successfully completes the maze within the designated time limit while meeting all criteria will be declared the winner. <br/></div>"
             
},
{
  name:"SPECIFICATION",
  image: robomaze,
  id:2,
  content: " <div className=''> <span className=' text-[#4A9FA0] font-bold '>ROBOT SPECIFICATION : </span> <br/>  1.	The maze will have dead-ends and false paths, creating additional challenges for the robot to navigate through. <br/>2.	The maze will have only one entry and exit point, providing a clear objective for the robot to work towards. <br/>3.	The maze will be visually appealing and include clear markings to help the robot identify the path and navigate through the maze. <br/>4.	The maze will be designed with precision and accuracy, ensuring that the robot relies solely on its sensors and programming to navigate through the maze. <br/></div> "
},
{
  name:"RULES",
  image: robomaze,
  id:3,
  content: " <div className='text-2xl'>1.	Contesting machines must be submitted to the organizers at the time of registration. <br/>2.	The micromouse handler is given time to adjust and calibrate the sensors after the maze is unveiled. <br/>3.	No selection of strategies or capturing of maze configuration is allowed. Violation of this rule will lead to instant disqualification. <br/> 4.	Each micromouse is allocated a total of 7 minutes of access to the maze after the 3minute sensor adjustment time. <br/>5.	Manual assistance to the micromouse during the contest is considered a disqualification. <br/>6.	Scoring is based on three parameters: run time, maze time, and the number of times the micromouse is touched. </div>"
},
{
  name:"VENUE",
  image: robomaze,
  id:4,
  content: "<span className=' text-[#4A9FA0] font-bold '> SEMINAR HALL 4TH FLOOR  </span>   "
},


],
},

{
  id: 14,
name:"Clue minati",
catName:"fun_crev",
desc:"prize-3000",
date: "APRIL 19th",
time: "11:00am - 1:00pm",
link:"https://forms.gle/y1ENMVrmZVaNFjdq7",
tabs: [
{
  name:"ABOUT",
  image: clue,
  id:0,
  content: "Each team will be given hurdles along with a treasure map for the initial round based , this round will be time based and if the team has completed hurdles within that time frame. That team will move forward to the final round. We will be dividing the slots based on number of teams that have registered. In the last round, we will be conducting some fun tasks which will help us decide our winner.  "
},
{
  name:"CHARGE",
  image: clue,
  id:1,
  content: " 50 Rs per Team "
             
},
{
  name:"EXPECTED FOOTFALL",
  image: clue, 
  id:2,

  content: " 10 teams "
},
{
  name:"RULES",
  image: clue,
  id:3,
  content: " <div className='text-2xl'>	We will keep track of time. <br/>The team which will complete the task within the time frame will proceed to the last round. <br/>The top 2 teams will be announced as winners at the end of the day. <br/></div>"
},
{
  name:"VENUE",
  image: clue,
  id:4,
  content:    "  <span className=' text-[#4A9FA0] font-bold '>Infront of Boy’s Hostel   </span>   "
},


],
},

];