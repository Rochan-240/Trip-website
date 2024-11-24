import React, {useEffect} from 'react'
import './popular.css'
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from 'react-icons/bs'

import Aos from 'aos'
import 'aos/dist/aos.css'

import img from '../../assets/photo10.jpg'
import img2 from '../../assets/photo1.jpg'
import img3 from '../../assets/photo2.jpg'
import img4 from '../../assets/photo3.jpg'
import img5 from '../../assets/photo4.jpg'

const Data = [
  {
   id:1,
   imgSrc: img2,
   destTitle: 'Machu picchu',
   location: 'Peru',
   grade: 'Cultural Relax'
  },
  {
    id:2,
    imgSrc: img3,
    destTitle: 'Northern Mountains',
    location: 'Alaska',
    grade: 'Enjoyment'
   },
   {
    id:3,
    imgSrc: img4,
    destTitle: 'Greek Mountains',
    location: 'Greece',
    grade: 'Free Roam'
   },
   {
    id:4,
    imgSrc: img5,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'Ethnicity'
   },

]
const Popular = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='popular section container'>
      <div className="secContainer">

        <div className="secHeader flex">
           <div data-aos="fade-right" data-aos-duration="2500" className="textDiv">
            <h2 className="secTitle">
              Popular Destination
            </h2>
            <p>
              All the historical cities to natural spectaculars, come see with us.
            </p>
           </div>

           <div data-aos="fade-left" data-aos-duration="2500" className="iconsDiv flex">
            <BsArrowLeftShort className="icon leftIcon"/>
            <BsArrowRightShort className="icon rightIcon"/>
           </div>
        </div>

        <div className="mainContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade})=>{
           return(
            <div data-aos="fade-up" className="singleDestination">
              <div className="destImage">

                 <img src={imgSrc} alt="Image title" />

                <div className="overlayInfo">
                <h3>{destTitle}</h3>
                <p>
                  {location} 
                </p>

                <BsArrowRightShort className="icon"/>
              </div>

            </div>
          

          <div className="destFooter">
            <div className="number">
              0{id}
            </div>

            <div className="destText flex">
               <h6>
                {location}
               </h6>
               <span className="flex">
                  <span className="dot">
                    <BsDot className="icon"/>
                  </span>
                  Dot
               </span>
            </div>
          </div>
        </div>
           )
          })
        }
      </div>
      </div>
    </section>
  )
}

export default Popular