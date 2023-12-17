import React from 'react'

import { Helmet } from 'react-helmet'

import './login.css'

const Login = (props) => {
  return (
    <div className="login-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-login">
        <img src="/external/line1712-fyv.svg" className="login-line1" />
        <div className="login-signin button">
          <span className="login-sign-in">
            <span>Sign In</span>
          </span>
        </div>
        <label className="login-password">
          <span>Password</span>
        </label>
        <span className="login-register">
          <span>Register</span>
        </span>
        <span className="login-forgot-password">
          <span>Forgot Password?</span>
        </span>
        <label className="login-email-label">
          <span>Email</span>
        </label>
        <img src="/external/line2713-zi6o.svg" className="login-email-line" />
        <img
          src="/external/line3714-syzd.svg"
          className="login-password-line"
        />
        <span className="login-email input">
          <span>abcde@gmail.com</span>
        </span>
        <span className="login-password1 input">
          <span>******</span>
        </span>
        <img
          alt="image21542"
          src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/581982be-b3a7-46a8-8c6a-98557d144642/0fcff2f5-6cfd-4ce9-8baf-9a364c108239?org_if_sml=1128573&amp;force_format=original"
          className="login-logo"
        />
      </div>
    </div>
  )
}

export default Login
