import React from 'react'
import "./Experience.css"
import Bussiness from "../../assets/bussiness.jpg"

const Experience = () => {
  return (
    <div className='experience-container'>
        <div className="experience-content">
            <div className="experience-image">
                <img src={Bussiness} alt="" />
            </div>
            <div className="experience-description">
                <span>Why choose this choice?</span>
                <h1>We Are Working With 15 Year Experience</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusantium voluptates sequi quos at eaque ex veniam itaque corporis,</p>
                <ul>
                    <li>| Lorem ipsum dolor sit amet consectetur</li>
                    <li>| Lorem ipsum dolor sit amet consectetur</li>
                    <li>| Lorem ipsum dolor sit amet consectetur</li>
                </ul>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem accusantium voluptates </p>
                <button>Contact</button>
            </div>
           
        </div>
    </div>
  )
}

export default Experience