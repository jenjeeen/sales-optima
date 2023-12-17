import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './topbar.css'

const Topbar = (props) => {
  return (
    <div className={`topbar-topbar ${props.rootClassName} `}>
      <Link to="/admin-business-owner-dashboard" className="topbar-navlink">
        <img
          alt={props.SaleOptimaiconremovebgpreview1_alt}
          src={props.SaleOptimaiconremovebgpreview1_src}
          className="topbar-sale-optimaiconremovebgpreview1"
        />
      </Link>
      <Link to="/help-center-page" className="topbar-navlink1">
        <img
          alt={props.OnlineSupport_alt}
          src={props.OnlineSupport_src}
          className="topbar-online-support"
        />
      </Link>
      <Link
        to="/admin-business-owner-dashboard"
        className="topbar-sales-optima-text"
      >
        <span className="topbar-text">SALES</span>
        <span className="topbar-text1">OPTIMA</span>
      </Link>
      <Link to="/help-center-page" className="topbar-help-center-text">
        {props.HelpCenter_Text}
      </Link>
    </div>
  )
}

Topbar.defaultProps = {
  OnlineSupport_src: '/external/onlinesupport4094-kl9-200h.png',
  rootClassName: '',
  SaleOptimaiconremovebgpreview1_src:
    '/external/saleoptimaiconremovebgpreview1383-4qea-200h.png',
  OnlineSupport_alt: 'OnlineSupport',
  HelpCenter_Text: 'Help Center',
  SaleOptimaiconremovebgpreview1_alt: 'SaleOptimaiconremovebgpreview1383',
}

Topbar.propTypes = {
  OnlineSupport_src: PropTypes.string,
  rootClassName: PropTypes.string,
  SaleOptimaiconremovebgpreview1_src: PropTypes.string,
  OnlineSupport_alt: PropTypes.string,
  HelpCenter_Text: PropTypes.string,
  SaleOptimaiconremovebgpreview1_alt: PropTypes.string,
}

export default Topbar
