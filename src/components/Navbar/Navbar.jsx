import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav>
        <div className="container row justify_content_between align_items_center">
          <div className="logo_div">
            <Link to='/'><h2 className='logo'>Nur<span>B</span></h2></Link>
          </div>
          <form action='#' className="search_nav">
            <input type="text" placeholder='Search'/>
            <button className="search_div">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
          <div className="like_and_backet">
            <i className="far fa-heart"></i>
            <i className="fas fa-shopping-bag" data-count="01"></i>
          </div>
        </div>
        <div className="container navigation">
          
        </div>
      </nav>
    )
  }
}

