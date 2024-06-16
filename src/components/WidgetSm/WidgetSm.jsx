import React from 'react'
import './WidgetSm.css'
import { Visibility } from '@mui/icons-material'

const WidgetSm = () => {
  return (
    <div className='widget-sm'>
      <span className="widget-sm-title">New Join Members</span>
      <ul className="widget-sm-list">
        <li className='widget-sm-list-item'>
          <img src="https://avatars.githubusercontent.com/u/81724288?v=4" alt="" className='widget-sm-img'/>
          <div className="widget-sm-user">
            <span className="widget-sm-username">Dalton Chivambo</span>
            <span className="widget-sm-user-title">Software Developer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img src="https://avatars.githubusercontent.com/u/96840112?v=4" alt="" className='widget-sm-img'/>
          <div className="widget-sm-user">
            <span className="widget-sm-username">Edmildo Manuel</span>
            <span className="widget-sm-user-title">QA Enginner</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img src="https://avatars.githubusercontent.com/u/107197809?v=4" alt="" className='widget-sm-img' />
          <div className="widget-sm-user">
            <span className="widget-sm-username">Wellington Macie</span>
            <span className="widget-sm-user-title">Database Admin</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img src="https://avatars.githubusercontent.com/u/81724288?v=4" alt="" className='widget-sm-img'/>
          <div className="widget-sm-user">
            <span className="widget-sm-username">Dalton Chivambo</span>
            <span className="widget-sm-user-title">Software Developer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
        <li className='widget-sm-list-item'>
          <img src="https://avatars.githubusercontent.com/u/81724288?v=4" alt="" className='widget-sm-img'/>
          <div className="widget-sm-user">
            <span className="widget-sm-username">Dalton Chivambo</span>
            <span className="widget-sm-user-title">Software Developer</span>
          </div>
          <button className="widget-sm-button">
            <Visibility className='widget-sm-icon' />
            Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm
