import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
export const data = {
    labels: ['Teste', 'Teste', 'Teste', 'Teste'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(148, 84, 98, 1.0)',
          'rgba(54, 162, 235, 1.0)',
          'rgba(255, 206, 86, 1.0)',
          'rgba(75, 192, 192, 1.0)',
          'rgba(153, 102, 255, 1.0)',
          'rgba(255, 159, 64, 1.0)',
        ],
        borderWidth: 1,
      },     
    ],
  };
export const PieChart = () => {
    return <Pie data={data}  />
}