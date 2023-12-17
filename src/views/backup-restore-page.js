import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Topbar from '../components/topbar'
import './backup-restore-page.css'

const BackupRestorePage = (props) => {
  return (
    <div className="backup-restore-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="backup-restore-page-backup-restore-page">
        <img
          src="/external/rectangle169019-yuq-200h.png"
          className="backup-restore-page-selected-background"
        />
        <div className="backup-restore-page-data-backupcontainer">
          <img
            src="/external/rectangle504095-is5.svg"
            className="backup-restore-page-data-backup-background"
          />
          <span className="backup-restore-page-from">
            <span>From</span>
          </span>
          <h1 className="backup-restore-page-data-backup">
            <span>Data Backup</span>
          </h1>
          <div className="backup-restore-page-from-dropdown list-item">
            <div
              data-thq="thq-dropdown"
              className="backup-restore-page-thq-dropdown list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="backup-restore-page-dropdown-toggle"
              >
                <span className="backup-restore-page-select-month">
                  Select Month
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="backup-restore-page-dropdown-arrow"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="backup-restore-page-icon"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="backup-restore-page-to-dropdown list-item">
            <div
              data-thq="thq-dropdown"
              className="backup-restore-page-thq-dropdown1 list-item"
            >
              <div
                data-thq="thq-dropdown-toggle"
                className="backup-restore-page-dropdown-toggle1"
              >
                <span className="backup-restore-page-select-month1">
                  Select Month
                </span>
                <div
                  data-thq="thq-dropdown-arrow"
                  className="backup-restore-page-dropdown-arrow1"
                >
                  <svg
                    viewBox="0 0 1024 1024"
                    className="backup-restore-page-icon2"
                  >
                    <path d="M426 726v-428l214 214z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <span className="backup-restore-page-to">
            <span>To</span>
          </span>
          <div className="backup-restore-page-download-data-button button">
            <span className="backup-restore-page-download-text">
              Download Data
            </span>
          </div>
        </div>
        <div className="backup-restore-page-restore-datacontainer">
          <img
            src="/external/rectangle514095-r3y8.svg"
            className="backup-restore-page-restore-data-background"
          />
          <h1 className="backup-restore-page-restore-data">
            <span>Restore Data</span>
          </h1>
          <div className="backup-restore-page-process"></div>
          <div className="backup-restore-page-upload-container">
            <img
              alt="Upload"
              src="/external/uploadfile4095-bm7.svg"
              loading="eager"
              className="backup-restore-page-upload-logo"
            />
            <span className="backup-restore-page-upload">
              <span>Upload</span>
            </span>
          </div>
          <div className="backup-restore-page-import-button button">
            <span className="backup-restore-page-import-text">Import</span>
          </div>
        </div>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <Topbar rootClassName="topbar-root-class-name"></Topbar>
        <div className="backup-restore-page-container1"></div>
      </div>
      <img
        alt="Line44075"
        src="/external/line44075-vlkwjq.svg"
        className="backup-restore-page-line"
      />
    </div>
  )
}

export default BackupRestorePage
