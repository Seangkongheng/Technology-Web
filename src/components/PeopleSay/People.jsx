import React from 'react'
import "./People.css"
import Girl3 from "../../assets/Girl3.jpg"
import Girl5 from "../../assets/Girl5.jpg"
import Girl4 from "../../assets/Girl4.jpg"

const People = () => {
  return (
    <div className='people-container'>
        <div className="people-content">
            <p className='people-sayp'>People say</p>
            <h1 className=''>People Say About Us</h1>
            <div className="people-list-say">
                <div className="people-card-say">
                    <div className="people-card-say-content">
                        <div className="people-card-say-profile-infomation">
                            <div className="people-card-profile">
                                <img src={Girl3} alt="" />
                            </div>
                            <div className="people-card-information">
                                <h5>Seang Jennie</h5>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo vitae doloribus quia quod ducimus, vel accusantium labore cupiditate dolor dolorem odio repellat nostrum! Impedit sed dolores animi vel quas.</p>
                    </div>
                </div>
                <div className="people-card-say">
                    <div className="people-card-say-content">
                        <div className="people-card-say-profile-infomation">
                            <div className="people-card-profile">
                                <img src={Girl5} alt="" />
                            </div>
                            <div className="people-card-information">
                                <h5>Seang Jennie</h5>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo vitae doloribus quia quod ducimus, vel accusantium labore cupiditate dolor dolorem odio repellat nostrum! Impedit sed dolores animi vel quas.</p>
                    </div>
                </div>
                <div className="people-card-say">
                    <div className="people-card-say-content">
                        <div className="people-card-say-profile-infomation">
                            <div className="people-card-profile">
                                <img src={Girl4} alt="" />
                            </div>
                            <div className="people-card-information">
                                <h5>Seang Jennie</h5>
                                <span>Web Developer</span>
                            </div>
                        </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur nemo vitae doloribus quia quod ducimus, vel accusantium labore cupiditate dolor dolorem odio repellat nostrum! Impedit sed dolores animi vel quas.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="number-experience">
            <div className="card-number-experience-list">
                <div className="list-number">
                    <h1>300 +</h1>
                    <p>Experience</p>
                </div>
                <div className="list-number">
                    <h1>15 Years</h1>
                    <p>Experience</p>
                </div>
                <div className="list-number">
                    <h1>2k +</h1>
                    <p>Customer</p>
                </div>
                <div className="list-number">
                    <h1>100 +</h1>
                    <p>Download App</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default People