import React from 'react'
import "./New.css"
import Girl1 from "../../assets/Girl1.jpg"
import Girl5 from "../../assets/Girl5.jpg"
import Girl4 from "../../assets/Girl4.jpg"
const New = () => {
  return (
    <div className='news-container'>
        <div className="new-content">
            <p className='blog-text'>Blog</p>
            <h1 className='last-news'>Last Published News</h1>
            <div className="list-card-news">
                <div className="card-news">
                    <div className="news-image">
                        <img src={Girl1} alt="" />
                    </div>
                    <div className="news-description">
                        <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                        <div className="news-date">
                            <div className="date">
                                <p>1 month | 2h: 33 min</p> 
                            </div>
                            <div className="learn-more">
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="card-news">
                    <div className="news-image">
                        <img src={Girl1} alt="" />
                    </div>
                    <div className="news-description">
                    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h3>
                        <div className="news-date">
                            <div className="date">
                            <p>1 month | 2h: 33 min</p> 
                            </div>
                            <div className="learn-more">
                                <button>Learn More</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default New