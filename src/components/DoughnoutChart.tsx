"use client"

import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);


const DoughnoutChart = ({accounts}:DoughnutChartProps) => {

    const data = {
        datasets:[
            {
                label:"Total balance",
                data:[1200, 1100, 300],
                backgroundColor:["#2E90FA", "#1570EF", "#175CD3"]
            }
        ],
        labels:["Bank-1", "Bank-2", "Bank-3"]
    }

    return (
    <Doughnut
        data={data} 
        options={{
            plugins:{
                legend:{
                    display:false
                }
            }
        }}
    />
    )
}

export default DoughnoutChart