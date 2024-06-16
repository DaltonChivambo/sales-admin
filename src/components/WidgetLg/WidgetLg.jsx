import React from 'react'
import './WidgetLg.css'

const WidgetLg = () => {

  const Button = ({type}) => {
    return <button className={'widget-lg-button ' + type} >{type}</button>
  };
  return (
    <div className='widget-lg'>
      <h3 className="widget-lg-title">Latest transactions</h3>
      <table className="widget-lg-table">
        <tr className="widget-lg-tr">
          <th className="widget-lg-th">Costumer</th>
          <th className="widget-lg-th">Date</th>
          <th className="widget-lg-th">Amount</th>
          <th className="widget-lg-th">Status</th>
        </tr>

        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img src="https://avatars.githubusercontent.com/u/81724288?v=4" alt="" className="widget-lg-img" />
            <span className="widget-lg-name">Dalton Chivambo</span>
          </td>
          <td className="widget-lg-date">2 Jun 2021</td>
          <td className="widget-lg-amount">$122.25</td>
          <td className="widget-lg-status"><Button type="Approved"/></td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img src="https://avatars.githubusercontent.com/u/81724288?v=4" alt="" className="widget-lg-img" />
            <span className="widget-lg-name">Dalton Chivambo</span>
          </td>
          <td className="widget-lg-date">2 Jun 2021</td>
          <td className="widget-lg-amount">$122.25</td>
          <td className="widget-lg-status"><Button type="Pending"/></td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img src="https://avatars.githubusercontent.com/u/81724288?v=4" alt="" className="widget-lg-img" />
            <span className="widget-lg-name">Dalton Chivambo</span>
          </td>
          <td className="widget-lg-date">2 Jun 2021</td>
          <td className="widget-lg-amount">$122.25</td>
          <td className="widget-lg-status"><Button type="Declined"/></td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img src="https://avatars.githubusercontent.com/u/81724288?v=4" alt="" className="widget-lg-img" />
            <span className="widget-lg-name">Dalton Chivambo</span>
          </td>
          <td className="widget-lg-date">2 Jun 2021</td>
          <td className="widget-lg-amount">$122.25</td>
          <td className="widget-lg-status"><Button type="Pending"/></td>
        </tr>
        <tr className="widget-lg-tr">
          <td className="widget-lg-user">
            <img src="https://avatars.githubusercontent.com/u/81724288?v=4" alt="" className="widget-lg-img" />
            <span className="widget-lg-name">Dalton Chivambo</span>
          </td>
          <td className="widget-lg-date">2 Jun 2021</td>
          <td className="widget-lg-amount">$122.25</td>
          <td className="widget-lg-status"><Button type="Approved"/></td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg
