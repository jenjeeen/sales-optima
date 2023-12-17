import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Topbar from '../components/topbar'
import './help-center-page.css'

const HelpCenterPage = (props) => {
  return (
    <div className="help-center-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="help-center-page-help-center-page">
        <img
          alt="Line44075"
          src="/external/line44075-vlkwjq.svg"
          className="help-center-page-line"
        />
        <span className="help-center-page-how-can-we-help">
          <span>How can we help?</span>
        </span>
        <div className="help-center-page-searchhcwh">
          <span className="help-center-page-contacts-message-reports">
            Search Contacts, Message, Reports....
          </span>
        </div>
        <div className="help-center-page-pdf">
          <img
            src="/external/rectangle173813-ximg.svg"
            className="help-center-page-pdf-background"
          />
          <span className="help-center-page-handbook-title">
            <span>SalesOptima Handbook</span>
          </span>
          <div className="help-center-page-pdf-logo">
            <img
              alt="Vector3811"
              src="/external/vector3811-dl4d.svg"
              className="help-center-page-vector"
            />
            <img
              alt="Vector3811"
              src="/external/vector3811-eep.svg"
              className="help-center-page-vector1"
            />
            <img
              alt="Vector3811"
              src="/external/vector3811-q6dm.svg"
              className="help-center-page-vector2"
            />
            <img
              src="/external/vector3811-8l8.svg"
              className="help-center-page-vector3"
            />
          </div>
        </div>
        <div className="help-center-page-faqs">
          <img
            alt="Rectangle173811"
            src="/external/rectangle173811-70dg.svg"
            className="help-center-page-faq-background"
          />
          <span className="help-center-page-faq-title">
            <span>Frequently Asked Questions</span>
          </span>
          <span className="help-center-page-faq">FAQ</span>
        </div>
        <div className="help-center-page-youtube">
          <img
            src="/external/rectangle173813-ximg.svg"
            className="help-center-page-yt-background"
          />
          <span className="help-center-page-tutorial-video-title">
            <span>SalesOptima Tutorial Video</span>
          </span>
          <div className="help-center-page-frameiconyoutube">
            <img
              src="/external/vector3811-p13.svg"
              className="help-center-page-vector4"
            />
          </div>
        </div>
        <div className="help-center-page-search-bar">
          <span className="help-center-page-search-text">
            <span>Search</span>
          </span>
          <div className="help-center-page-search-logo">
            <div className="help-center-page-elements">
              <img
                alt="VectorI420"
                src="/external/vectori420-bzoi.svg"
                className="help-center-page-vector5"
              />
              <img
                alt="VectorI420"
                src="/external/vectori420-6d0d.svg"
                className="help-center-page-vector6"
              />
            </div>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name2"></Navbar>
        <Topbar rootClassName="topbar-root-class-name2"></Topbar>
      </div>
    </div>
  )
}

export default HelpCenterPage
