import React from 'react'
import './FeaturedInfo.css'
import {ArrowDownward, ArrowUpward} from '@mui/icons-material'

const FeaturedInfo = () => {
  return (
    <div className='featured'>
        <div className="featured-item">
            <span className="featured-title">Revanue</span>
            <div className="featured-money-container">
                <span className="featured-money">$2,415</span>
                <span className="featured-money-rate">-11.4 <ArrowDownward className='featured-icon negative' /> </span>
            </div>
            <div className="featured-sub">Compared to last month</div>
        </div>

        <div className="featured-item">
            <span className="featured-title">Sales</span>
            <div className="featured-money-container">
                <span className="featured-money">$4,415</span>
                <span className="featured-money-rate">-2.4 <ArrowDownward className='featured-icon negative' /> </span>
            </div>
            <div className="featured-sub">Compared to last month</div>
        </div>

        <div className="featured-item">
            <span className="featured-title">Cost</span>
            <div className="featured-money-container">
                <span className="featured-money">$2,225</span>
                <span className="featured-money-rate">-2.4 <ArrowUpward className='featured-icon'/> </span>
            </div>
            <div className="featured-sub">Compared to last month</div>
        </div>
    </div>
  )
}

export default FeaturedInfo
