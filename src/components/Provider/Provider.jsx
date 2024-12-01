import React from 'react'
import "./Provider.css"
import Mantenance from "../../assets/computer-mantenance.png"
import Graph from "../../assets/graph.png"

const Provider = () => {
  return (
    <div className='provider-container'>
        <div className="provider-content">
            <div className="provider-desc">
                <p>Go to</p>
                <h1>We Will Build App & Provider lifetime Support</h1><br />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor nihil natus repudiandae dicta. Dolores laboriosam, aut rerum labore facilis natus eveniet consectetur mollitia at praesentium cupiditate magnam nesciunt ab officia!</p>
                <div className="provider-button">
                    <button>Get start</button>
                </div>
            </div>
            <div className="provider-card">
                <div className="provide-card-content">
                    <img src={Mantenance} alt="" />
                    <h3>Mantenance Sevice</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
                <div className="provide-card-content">
                    <img src={Graph} alt="" />
                    <h3></h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Provider