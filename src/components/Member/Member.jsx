import React from 'react'
import "./Member.css"
import Girl1 from "../../assets/Girl1.jpg"
import Girl2 from "../../assets/Girl2.jpg"
import Girl3 from "../../assets/Girl3.jpg"
import Girl4 from "../../assets/Girl4.jpg"
import Girl5 from "../../assets/Girl5.jpg"

const Member = () => {
  return (
    <div className='member-container'>
        <div className="member-content">
            <p>Our Team's</p>
            <h1>Meet Ours Export Team Members</h1>
            <div className="member-list">
                <div className="member-card">
                    <img src={Girl5} alt="" />
                </div>
                <div className="member-card">
                    <img src={Girl2} alt="" />
                </div>
                <div className="member-card">
                    <img src={Girl3} alt="" />
                </div>
                <div className="member-card">
                    <img src={Girl4} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member