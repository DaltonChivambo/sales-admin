import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import {userData} from "../../dummyData"
import WidgetSm from '../../components/WidgetSm/WidgetSm'
import WidgetLg from '../../components/WidgetLg/WidgetLg'

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart title="User Analytics" data={userData} grid dataKey="Active User"/>
      <div className="home-widget">
        <WidgetSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}

export default Home
