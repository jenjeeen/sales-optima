import React from 'react'

import { Helmet } from 'react-helmet'

import './forgot-password.css'

const ForgotPassword = (props) => {
  return (
    <div className="forgot-password-container">
      <Helmet>
        <title>ForgotPassword - exported project</title>
        <meta property="og:title" content="ForgotPassword - exported project" />
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="forgot-password-forgot-password">
        <span className="forgot-password-forgot-password1">
          <span>Forgot Password</span>
        </span>
        <div className="forgot-password-email">
          <label className="forgot-password-email1">
            <span>Email</span>
          </label>
          <img
            src="/external/line21943-tbt8.svg"
            className="forgot-password-email-line"
          />
          <span className="forgot-password-email2 input">
            <span>abcde@gmail.com</span>
          </span>
        </div>
        <div className="forgot-password-new-pass">
          <label className="forgot-password-new-password">
            <span>New Password</span>
          </label>
          <img
            alt="Line31943"
            src="/external/line31943-j4qf.svg"
            className="forgot-password-pass-line"
          />
          <span className="forgot-password-new-pass1 input">
            <span>******</span>
          </span>
        </div>
        <div className="forgot-password-confirm-pass">
          <label className="forgot-password-confirm-password">
            <span>Confirm Password</span>
          </label>
          <img
            alt="Line3I194"
            src="/external/line3i194-s4wr.svg"
            className="forgot-password-confirm-pass-line"
          />
          <span className="forgot-password-text06 input">
            <span>******</span>
          </span>
        </div>
        <img
          src="/external/line11943-f1n5.svg"
          className="forgot-password-line1"
        />
        <div className="forgot-password-reset-password button">
          <span className="forgot-password-reset-password1">
            <span>Reset Password</span>
          </span>
        </div>
        <div className="forgot-password-cancel button">
          <span className="forgot-password-cancel1">
            <span>Cancel</span>
          </span>
        </div>
        <img
          alt="logo"
          src="/external/image34111-3e2v-1100h.png"
          className="forgot-password-logo"
        />
      </div>
    </div>
  )
}

export default ForgotPassword
