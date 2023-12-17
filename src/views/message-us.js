import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Topbar from '../components/topbar'
import './message-us.css'

const MessageUs = (props) => {
  return (
    <div className="message-us-container">
      <Helmet>
        <title>MessageUs - exported project</title>
        <meta property="og:title" content="MessageUs - exported project" />
      </Helmet>
      <div className="message-us-client-feedback-message-page">
        <img
          alt="Rectangle1976"
          src="/external/rectangle1976-db.svg"
          className="message-us-rectangle1"
        />
        <span className="message-us-text">
          <span>Help Center</span>
        </span>
        <img
          alt="OnlineSupport4078"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/581982be-b3a7-46a8-8c6a-98557d144642/70e7e528-ad30-4ea2-ae5e-d3fb93475b17?org_if_sml=11769&amp;force_format=original"
          className="message-us-online-support"
        />
        <span className="message-us-text02">
          <span className="message-us-text03">SALES</span>
          <span>OPTIMA</span>
        </span>
        <img
          alt="Line49715"
          src="/external/line49715-xm4.svg"
          className="message-us-line4"
        />
        <span className="message-us-text05">
          <span>
            <span>Should you have questions?</span>
            <br></br>
            <span>Reports?</span>
          </span>
        </span>
        <div className="message-us-group6">
          <div className="message-us-desc">
            <span className="message-us-text10">
              <span>Description</span>
            </span>
            <div className="message-us-frame2">
              <textarea
                placeholder="Your message..."
                className="message-us-textarea textarea"
              ></textarea>
            </div>
          </div>
          <div className="message-us-title">
            <span className="message-us-text12">
              <span>Subject</span>
            </span>
            <div className="message-us-frame1">
              <input
                type="text"
                placeholder="Subject"
                className="message-us-textinput input"
              />
            </div>
          </div>
          <div className="message-us-sendbutton">
            <span className="message-us-sendtext">
              <span>Send</span>
            </span>
          </div>
        </div>
      </div>
      <Navbar rootClassName="navbar-root-class-name5"></Navbar>
      <Topbar rootClassName="topbar-root-class-name5"></Topbar>
    </div>
  )
}

export default MessageUs
