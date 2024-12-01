import React from 'react'
import "./Agentcy.css"
import Image from "../../assets/Image.jpg"

const Agentcy = () => {
  return (
    <div className='agentcy-container'>
        <div className="agentcy-content">
            <div className="agentcy-content-blog">
                <div className="agentcy-content-blog-content">
                    <div className="agency-content-image">
                        <img src={Image} alt="" />
                    </div>
                    <div className="agency-content-description">
                        <h1>We're Successfull Agentcy for App Development</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque necessitatibus iure mollitia eum, error placeat adipisci quas optio inventore voluptatibus temporibus praesentium, quam quaerat eligendi ducimus doloremque excepturi doloribus recusandae.</p>
                        <button>See more</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Agentcy