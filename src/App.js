import React from 'react'
import './app.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import Popular from './Components/Popular/Popular'
import Offers from './Components/Offers/Offers'
import About from './Components/About/about'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <Popular/>
    <Offers/>
    <About/>
    <Blog/>
    <Footer/>
    </>
  )
}

export default App