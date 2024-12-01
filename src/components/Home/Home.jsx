import React from 'react'
import "./Home.css"
import Background from "../../assets/Background.jpg"
import HomeBackground from "../../assets/homeBackground.jpg"
import LaptopBackground from "../../assets/laptopbackground.png"

const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-content">
            <div className="home-title">
                <h1>We Build Apps That Get Trending On Appworld</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus cupiditate voluptatum reprehenderit incidunt, aliquid ex nam esse hic.</p>
                <button>Get Start</button>
                <button className='btn-contact'>Contact Us</button>
            </div>
            <div className="home-image">
                <img src={LaptopBackground} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home