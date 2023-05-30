import React from 'react'
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const UserAgeChart = () => {
  
  const data = {
    labels: ["Mon","Tue","Wen","Thu","Fri","Sat","Sun"],
    datasets: [
        {
            label: ' Price in USD',
            data: [1,3,5,24,48,7],
            fill: false,
            backgroudColor: '#0071bd',
            borderColor: '#0071bd',
        },
    ],
};

const options = { 
    scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
}

return (
     <>
          <h2> notre graphique </h2>
          <Line data={data} height="10"
        width="30%" options={options} />
    </>
      )
}

export default UserAgeChart;
