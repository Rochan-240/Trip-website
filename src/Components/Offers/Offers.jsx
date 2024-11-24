import React, {useEffect} from 'react'
import './offers.css'
import { MdAirportShuttle, MdBathtub, MdKingBed, MdLocationOn } from 'react-icons/md'
import { FaWifi } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'



import img6 from '../../assets/hotel1.jpg'
import img7 from '../../assets/hotel2.jpg'
import img8 from '../../assets/hotel3.jpg'
import img9 from '../../assets/hotel4.jpg'
const offer = [
  {
    id:1,
    imgSrc: img6,
    destTitle: 'Meadows Garden',
    location: 'Iceland',
    Price: '$5,300'
  },
  {
    id:2,
    imgSrc: img7,
    destTitle: 'Northern Mountains',
    location: 'Alaska',
    Price: '$4,600'
  },
  {
    id:3,
    imgSrc: img8,
    destTitle: 'Garden Towns',
    location: 'London',
    Price: '$5,400'
  },
  {
    id:4,
    imgSrc: img9,
    destTitle: 'Blue Beach',
    location: 'Venice',
    Price: '$4,000'
  }
]
const Offers = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='offer container section'>
      <div className="secContainer">

        <div  data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 id="offers" className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural spectaculers, come see the world!
          </p>
        </div>
        
        <div className="mainContent grid">

         {
         offer.map(({id,imgSrc,destTitle,location,Price})=>{
          return(
            <div data-aos="fade-up" data-aos-duration="3000" className="singleOffer">
            <div className="destImage">
             <img src={imgSrc} alt="Image" />

             <span className='discount'>
               30% Off
             </span>
             </div>

           <div className="offerBody">
             <div className="price flex">
               <h4>
                 {Price}
               </h4>
               <span className="status">
                 For Rent
               </span>
             </div>

             <div className="amenities flex">
               <div className="singleAmenity flex">
               <MdKingBed className='iconOffer'/>
               <small>2 Beds</small> 
               </div>

               <div className="singleAmenity flex">
               <MdBathtub className='iconOffer'/>
               <small>1 Bath</small> 
               </div>

               <div className="singleAmenity flex">
               <FaWifi className='iconOffer'/>
               <small>Wi-Fi</small> 
               </div>

               <div className="singleAmenity flex">
               <MdAirportShuttle className='iconOffer'/>
               <small>Shuttle</small> 
               </div>
             </div>

             <div className="location flex">
               <MdLocationOn className='iconOffer'/>
               <small>{destTitle}, {location}</small>
             </div>

             <button className='btn flex'>
               View Details
               <BsArrowRightShort className='iconBtn'/>
             </button>
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

export default Offers