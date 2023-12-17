import React from 'react'

import { Helmet } from 'react-helmet'

import './business-owner.css'

const BusinessOwner = (props) => {
  return (
    <div className="business-owner-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="business-owner-business-owner">
        <div className="business-owner-first-name-container">
          <label className="business-owner-first-name">
            <span>First name</span>
          </label>
          <img
            src="/external/line51867-kr7c.svg"
            className="business-owner-line5"
          />
          <span className="business-owner-first-name1 input">
            <span>Erica Joy</span>
          </span>
        </div>
        <div className="business-owner-last-name-container">
          <label className="business-owner-last-name">
            <span>Last name</span>
          </label>
          <img
            src="/external/line61872-ygqq.svg"
            className="business-owner-line6"
          />
          <span className="business-owner-last-name1 input">
            <span>Cavaneyro</span>
          </span>
        </div>
        <div className="business-owner-email-address-container">
          <label className="business-owner-email-address">
            <span>Email Address</span>
          </label>
          <img
            src="/external/line71871-i4i.svg"
            className="business-owner-line7"
          />
          <span className="business-owner-email-address1 input">
            <span>ericacavaneyro@gmail.com</span>
          </span>
        </div>
        <div className="business-owner-password">
          <label className="business-owner-password1">
            <span>Password</span>
          </label>
          <img
            src="/external/line91870-ftwd.svg"
            className="business-owner-line9"
          />
          <span className="business-owner-password2 input">
            <span>***********</span>
          </span>
        </div>
        <div className="business-owner-business-certificate-container">
          <label className="business-owner-business-certificate">
            <span>Business Certificate</span>
          </label>
          <span className="business-owner-upload-file button">
            Upload a file
          </span>
        </div>
        <div className="business-owner-confirm-password-container">
          <label className="business-owner-confirm-password">
            <span>Confirm Password</span>
          </label>
          <img
            src="/external/line101869-fug.svg"
            className="business-owner-line10"
          />
          <span className="business-owner-confirm-password1 input">
            <span>***********</span>
          </span>
        </div>
        <div className="business-owner-phone-number-container">
          <label className="business-owner-phone-number">
            <span>Phone Number</span>
          </label>
          <img
            src="/external/line81868-3nhh.svg"
            className="business-owner-line8"
          />
          <span className="business-owner-phone-number1 input">
            <span>
              +63 908 123 4567
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <div className="business-owner-company-container">
          <label className="business-owner-company">
            <span>Company</span>
          </label>
          <img
            src="/external/line111884-yrs.svg"
            className="business-owner-line11"
          />
          <span className="business-owner-company1 input">
            <span>WeebDev</span>
          </span>
        </div>
        <div className="business-owner-terms-condition-container">
          <span className="business-owner-terms-and-conditions">
            <span>I agree with the Terms and Conditions</span>
          </span>
          <input type="checkbox" className="business-owner-checkbox" />
        </div>
        <img
          src="/external/next4171-q2gs.svg"
          className="business-owner-next button"
        />
        <img
          alt="logo"
          src="/external/image34111-3e2v-1100h.png"
          className="business-owner-logo"
        />
        <img
          src="/external/line11943-f1n5.svg"
          className="business-owner-line1"
        />
      </div>
    </div>
  )
}

export default BusinessOwner
