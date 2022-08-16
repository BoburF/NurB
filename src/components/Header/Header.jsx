import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Header.css'

export const Header = () => {
  return (
    <header>
      <Navbar/>
      <div className="hero">
        <div className="container row justify_content_between">
          <div className="hero_left">
            <p>Welcome to NurB</p>
            <h1>Your Home <br /> Smart Devices &#38; <br /> Best Solution</h1>
            <button>Shop All Devices</button>
          </div>
          <div className="hero_right">
            <img src="/img/device.webp" alt="" />
          </div>
        </div>
      </div>
    </header>
  )
}
