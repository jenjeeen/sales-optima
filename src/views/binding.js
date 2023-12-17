import React from 'react'

import { Helmet } from 'react-helmet'

import './binding.css'

const Binding = (props) => {
  return (
    <div className="binding-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="binding-binding">
        <div className="binding-register button">
          <img
            src="/external/rectangle154111-p8k-200h.png"
            className="binding-register-background"
          />
          <span className="binding-register1">
            <span>Register</span>
          </span>
        </div>
        <div className="binding-bind-container">
          <img
            src="/external/rectangle514111-su6a.svg"
            className="binding-background"
          />
          <span className="binding-integration">
            Bind Ecommerce Website to SalesOptima
          </span>
          <div className="binding-bind-frame">
            <span className="binding-select-platform-to-bind">
              <span>Select Platform to bind</span>
            </span>
            <img
              src="/external/vector4111-m45l.svg"
              className="binding-vector"
            />
          </div>
        </div>
        <span className="binding-integration1">
          <span>Integration</span>
        </span>
        <img
          src="/external/image34111-3e2v-1100h.png"
          className="binding-logo"
        />
      </div>
    </div>
  )
}

export default Binding
