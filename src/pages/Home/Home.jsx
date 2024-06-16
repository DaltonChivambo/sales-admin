import React from 'react'
import './Home.css'
import FeaturedInfo from '../../components/FeaturedInfo/FeaturedInfo'
import Chart from '../../components/Chart/Chart'
import {userData} from "../../dummyData"

const Home = () => {
  return (
    <div className='home'>
      <FeaturedInfo/>
      <Chart title="User Analytics" data={userData} grid dataKey="Active User"/>
    </div>
  )
}

export default Home
