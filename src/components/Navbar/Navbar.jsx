import React, { Component } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  state = {
    categories: {
      Smartphones: [
        'Xiaomi',
        'Samsung',
        'Poco',
        'Iphone'
      ],
      Computers: [
        'Acer',
        'Asus',
        'Hp',
        'Immer'
      ],
      SmartWatches: [
        'Apple',
        'Samsung'
      ],
      Items: [
        'Airpods'
      ]
    }
  }



  render() {
    return (
      <nav>
        <div className="container row justify_content_between align_items_center">
          <div className="logo_div">
            <Link to='/'><h2 className='logo'>Nur<span>B</span></h2></Link>
          </div>
          <form action='#' className="search_nav">
            <input type="text" placeholder='Search...' />
            <button className="search_div">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </button>
          </form>
          <div className="like_and_backet">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
            <div className="shop_cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-handbag" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
              </svg>
              <span>01</span>
            </div>
          </div>
        </div>
        <div className="container navigation" >
          <ul className='row navigation_menu align_items_center'>
            <li className='li'>Home</li>
            <li className='li'>About</li>
            <li className='btn_drop li'><p className='dropdown_btn'>Shop
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-down" viewBox="0 0 16 16">
                <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z" />
              </svg>
            </p>
              <div className="dropdown_menu">
                {
                  Object.entries(this.state.categories).map((entry, index) => {
                    const [key, value] = entry
                    return (
                      <NoDiv keys={key} key={index} value={value} />
                    )
                  })
                }
              </div>
            </li>
            <li className='li'>Blog</li>
            <li className='li'>Contact</li>
          </ul>
        </div>
      </nav>
    )

    function NoDiv(props) {
      return (
        <>
          <ul>
            <li key={props.keys}>{props.keys}</li>

            {
              props.value.map((item, index) => {
                return (
                  <li key={index}>{item}</li>
                )
              })
            }
          </ul>
          <div className="line"></div>
        </>
      )
    }
  }
}

