import React, {useEffect} from 'react'
import './blog.css'
import { BsArrowRightShort } from 'react-icons/bs'

import img1 from "../../assets/photo6.jpg"
import img2 from "../../assets/photo9.jpg"
import img3 from "../../assets/photo10.jpg"
import img4 from "../../assets/photo5.jpg"

import Aos from 'aos'
import 'aos/dist/aos.css'

const Posts = [
  {
  id:1,
  postImage:img1,
  title:'Beautiful, Let us travel',
  desc:'The kingdom of morocco is a muslim country in western north africa, with coastlines on the Atlantic ocean '
  },
  {
  id:2,
  postImage:img2,
  title:'Beautiful, Let us travel',
  desc:'The kingdom of morocco is a muslim country in western north africa, with coastlines on the Atlantic ocean '
  },
  {
  id:3,
  postImage:img3,
  title:'Beautiful, Let us travel',
  desc:'The kingdom of morocco is a muslim country in western north africa, with coastlines on the Atlantic ocean '
  },
  {
  id:4,
  postImage:img4,
  title:'Beautiful, Let us travel',
  desc:'The kingdom of morocco is a muslim country in western north africa, with coastlines on the Atlantic ocean '
  }
]

const Blog = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='blog container section'>
       <div className="secContainer">

        <div className="secIntro">
          <h2 id="blog" data-aos="fade-up" data-aos-duration="2000" className='secTitle'>
            Our Best Blog?
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">
            An insight to the incredible experience from the world.
          </p>
        </div>

        <div className="mainContainer grid">
          {
            Posts.map(({id,postImage,title,desc})=>{
              return(
                <div data-aos="fade-up" data-aos-duration="2000" className="singlePost grid">
            <div className="imageDiv">
              <img src={postImage} alt={title} />
            </div>

            <div className='postDetails'>
              <h3 data-aos="fade-up" data-aos-duration="3000">
                {title}
              </h3>
              <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>
            </div>

            <a href="#" className='flex' data-aos="fade-up" data-aos-duration="4500">
              
              Read More
              <BsArrowRightShort className='blogIcon'/>
            </a>
          </div>
              )
            })
          }
        </div>
       </div>
    </section>
  )
}

export default Blog