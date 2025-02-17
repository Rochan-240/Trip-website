import React,{useEffect} from 'react'
import './footer.css'
import { MdTravelExplore } from "react-icons/md";
import { ImFacebook } from 'react-icons/im';
import { BsTwitter } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <div className='footer'>
      <div className="secContainer container grid">
        <div data-aos="fade-up" data-aos-duration="2000" className="logoDiv">

          <div data-aos="fade-up" data-aos-duration="2000" className="footerLogo">
            <a href="" className='logo flex'>
             <h1 id="contact"> <MdTravelExplore className='brandIcon'/>
             Roch</h1>
            </a>
          </div>

          <div data-aos="fade-up" data-aos-duration="3000" className="socials flex">
          <ImFacebook className='socialIcon'/>
          <BsTwitter className='socialIcon'/>
          <AiFillInstagram className='socialIcon'/>
        </div>

        </div>

       <div data-aos="fade-up" data-aos-duration="3000" className="footerLinks">
        <span className="linkTitle">
         Infromation
        </span>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Explore</a>
        </li>
        <li>
          <a href="#">Travel</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
       </div>

       <div data-aos="fade-up" data-aos-duration="4000" className="footerLinks">
        <span className="linkTitle">
         Helpful Links
        </span>
        <li>
          <a href="#">Destination</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
        <li>
          <a href="#">Travel & Conditions</a>
        </li>
        <li>
          <a href="#">Privacy</a>
        </li>
       </div>

       <div data-aos="fade-up" data-aos-duration="5000" className="footerLinks">
        <span className="linkTitle">
          Contact Us
        </span>
        <span className='phone'>+999 222 333</span>
        <span className='email'>Rochan@gmail.com</span>
       </div>

      </div>
    </div>
  )
}

export default Footer