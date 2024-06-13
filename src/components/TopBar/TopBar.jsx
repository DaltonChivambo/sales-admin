import React from 'react'
import './TopBar.css'
import {NotificationsNone, Language, Settings} from '@mui/icons-material'

function TopBar() {
  return (
    <div className='topbar'>
      <div className="topbar-wrapper">
        <div className="top-left"><span className='logo'>IBSHOP</span></div>
        <div className="top-right">
            <div className="topbar-icon-container">
                <NotificationsNone/>
                <span className="top-icon-badge">2</span>
            </div>
            <div className="topbar-icon-container">
                <Language/>
            </div>
            <div className="topbar-icon-container">
                <Settings/>
            </div>
            <img src="https://avatars.githubusercontent.com/u/81724288?v=4" alt="" className="top-avatar" />
        </div>
      </div>
    </div>
  )
}

export default TopBar
