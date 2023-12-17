import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <div className={`navbar-navbar ${props.rootClassName} `}>
      <Link to="/admin-business-owner-dashboard" className="navbar-navlink">
        <div id="home_button" className="navbar-homebutton button">
          <h4 className="navbar-hometext">
            <span className="">Home</span>
          </h4>
          <img src={props.home_logo_src} className="navbar-homelogo" />
        </div>
      </Link>
      <div id="customers_page" className="navbar-customersbutton">
        <h4 className="navbar-customerstext">
          <span className="">Customers</span>
        </h4>
        <img src={props.customers_logo_src} className="navbar-customerslogo" />
      </div>
      <div id="product_page" className="navbar-productbutton">
        <Link to="/product" className="navbar-navlink1">
          <p className="navbar-producttext">
            <span className="">Product</span>
          </p>
        </Link>
        <img src={props.product_logo_src} className="navbar-productlogo" />
      </div>
      <Link to="/login" className="navbar-navlink2">
        <div className="navbar-logoutbutton">
          <img src={props.logout_logo_src} className="navbar-logoutlogo" />
          <h4 className="navbar-logouttext">
            <span className="">Logout</span>
          </h4>
        </div>
      </Link>
      <Link to="/message-us" className="navbar-navlink3">
        <div className="navbar-messagepage">
          <img src={props.message_logo_src} className="navbar-messagelogo" />
          <h4 className="navbar-messagetext">
            <span className="">Message Us</span>
          </h4>
        </div>
      </Link>
      <Link to="/binding" className="navbar-navlink4">
        <div className="navbar-dbrbutton">
          <svg viewBox="0 0 1024 1024" className="navbar-dbrlogo">
            <path
              d="M512 768q88 0 151-63t63-151-63-150-151-62q-116 0-180 98l-54-56v170h170l-68-68q16-32 55-56t77-24q62 0 106 43t44 105-44 106-106 44q-78 0-122-64h-74q24 58 77 93t119 35zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"
              className=""
            ></path>
          </svg>
          <span className="navbar-dbrtext">
            <span className="">
              <span className="">Data Backup &amp;</span>
              <br className=""></br>
              <span className="">Restore</span>
            </span>
          </span>
        </div>
      </Link>
    </div>
  )
}

Navbar.defaultProps = {
  customers_logo_src: '/external/vector4095-7a54.svg',
  customers_logo_alt: 'Vector4095',
  logout_logo_src: '/external/comboshape4095-f33bg.svg',
  home_logo_src: '/external/vector4095-fu8o.svg',
  message_logo_alt: 'Subtract4095',
  message_logo_src: '/external/subtract4095-p8nq.svg',
  product_logo_src: '/external/subtract4095-0me.svg',
  product_logo_alt: 'Subtract4095',
  rootClassName: '',
  logout_logo_alt: 'comboshape4095',
  home_logo_alt: 'Vector4095',
}

Navbar.propTypes = {
  customers_logo_src: PropTypes.string,
  customers_logo_alt: PropTypes.string,
  logout_logo_src: PropTypes.string,
  home_logo_src: PropTypes.string,
  message_logo_alt: PropTypes.string,
  message_logo_src: PropTypes.string,
  product_logo_src: PropTypes.string,
  product_logo_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  logout_logo_alt: PropTypes.string,
  home_logo_alt: PropTypes.string,
}

export default Navbar
