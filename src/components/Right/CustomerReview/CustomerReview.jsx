import React from 'react'
import { reviewData } from '../../../Data/Data'
import Chart from "react-apexcharts";

const CustomerReview = () => {

  return (
    <div className="CustomerReview">
        <Chart options={reviewData.options} series={reviewData.series} type="area" />
  </div>
  )
}

export default CustomerReview