import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Provider from './components/Provider/Provider'
import Experience from './components/Experience/Experience'
import Member from './components/Member/Member'
import Agentcy from './components/Agentcy/Agentcy'
import People from './components/PeopleSay/people'
import New from './components/News/New'
import Footer from './components/Footer/Footer'
import FooterBottom from './components/FooterButton/FooterBottom'

function App() {
  

  return (
    
    <div>
        <Navbar />
        <Home />
        <div className="container">
            <Provider />
        </div>
        <Experience />
        <div className="container">
          <Member />
        </div>
          <Agentcy />
          <People />
          <New />
          <Footer />
          <FooterBottom />
    </div>
  )
}

export default App
