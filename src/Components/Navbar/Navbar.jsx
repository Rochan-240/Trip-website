import React, {useState} from 'react'
import './navbar.css'
import { MdTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from 'react-icons/ai';
import { TbGridDots } from 'react-icons/tb';
const Navbar = () => {

  const[active, setActive] = useState('navBar')
  const showNav =()=>{
    setActive('navBar activeNavbar')
  }
  const removeNav =()=>{
    setActive('navBar')
  }

  const[transparent,setTransparent] = useState('header')
  const addBg = ()=>{
    if(window.scrollY >= 10){
      setTransparent('header activeHeader')
    }
    else{
      setTransparent('header')
    }
  }
  window.addEventListener('scroll',addBg)


  return (
    <section className='navBarSection'>
      <div className={transparent}>
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className='NavFlex'>< MdTravelExplore className="navIcon"/>
            Roch
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            
            <li className="nav item">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="nav item">
              <a href="#offers" className="navLink">Products</a>
            </li>

            <li className="nav item">
              <a href="#blog" className="navLink">Blog</a>
            </li>

            <li className="nav item">
              <a href="#contact" className="navLink">Contact</a>
            </li>

            <div className="headerBtns flex">
              <button className='btn loginBtn'>
                <a href="#">Login</a>
              </button>
              <button className='btn'>
                <a href="#">Sign Up</a>
              </button>
            </div>

          </ul>

          <div onClick={removeNav} className="closeNavbar">
          <AiFillCloseCircle className='icon'/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
        <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  )
}

export default Navbar