import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Topbar from '../components/topbar'
import './admin-business-owner-dashboard.css'

const AdminBusinessOwnerDashboard = (props) => {
  return (
    <div id="home_page" className="admin-business-owner-dashboard-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="admin-business-owner-dashboard-admin-business-owner-dashboard">
        <img
          alt="Line44075"
          src="/external/line44075-vlkwjq.svg"
          className="admin-business-owner-dashboard-line"
        />
        <div className="admin-business-owner-dashboard-date-filter">
          <span className="admin-business-owner-dashboard-date">
            <span>Monthly</span>
          </span>
          <img
            alt="Filter-Logo"
            src="/external/vector3901-ls8p.svg"
            className="admin-business-owner-dashboard-vector"
          />
        </div>
        <img
          src="/external/image44013-9aq-500h.png"
          className="admin-business-owner-dashboard-revenue"
        />
        <img
          src="/external/image54043-11dl-400h.png"
          className="admin-business-owner-dashboard-top-selling-products"
        />
        <img
          src="/external/image64064-exi4-400h.png"
          className="admin-business-owner-dashboard-report-analyzation"
        />
        <div className="admin-business-owner-dashboard-filter">
          <div className="admin-business-owner-dashboard-filter2">
            <img
              alt="Filter-Logo"
              src="/external/vector4043-nrx3.svg"
              className="admin-business-owner-dashboard-vector1"
            />
          </div>
        </div>
        <div className="admin-business-owner-dashboard-filter1">
          <div className="admin-business-owner-dashboard-filter21">
            <img
              alt="Filter"
              src="/external/vector4044-xv4o.svg"
              className="admin-business-owner-dashboard-vector2"
            />
          </div>
        </div>
        <span className="admin-business-owner-dashboard-top-selling-products1">
          <span>Top 5 Selling Products</span>
        </span>
        <div className="admin-business-owner-dashboard-search-bar">
          <span className="admin-business-owner-dashboard-search-text">
            <span>Search</span>
          </span>
          <div className="admin-business-owner-dashboard-search-logo">
            <div className="admin-business-owner-dashboard-elements">
              <img
                alt="VectorI420"
                src="/external/vectori420-bzoi.svg"
                className="admin-business-owner-dashboard-vector3"
              />
              <img
                alt="VectorI420"
                src="/external/vectori420-6d0d.svg"
                className="admin-business-owner-dashboard-vector4"
              />
            </div>
          </div>
        </div>
        <img
          src="/external/arrowright02round4573-m5s9.svg"
          className="admin-business-owner-dashboard-arrow1"
        />
        <img
          src="/external/arrowright02round4573-loe.svg"
          className="admin-business-owner-dashboard-arrow2"
        />
        <img
          src="/external/rectangle169019-yuq-200h.png"
          className="admin-business-owner-dashboard-selected-background"
        />
        <Navbar rootClassName="navbar-root-class-name1"></Navbar>
        <Topbar rootClassName="topbar-root-class-name1"></Topbar>
      </div>
    </div>
  )
}

export default AdminBusinessOwnerDashboard
