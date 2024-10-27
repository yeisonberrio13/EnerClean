import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const TrendLineChart = () => {
  const data = {
    labels: [
      'Energía Eléctrica',
      'Energía Solar',
      'Energía Hidroeléctrica',
      'Energía Eólica',
      'Energía Geotérmica',
      'Energía Biomasa'
    ],
    datasets: [
      {
        label: 'Capacidad Instalada (MW)',
        data: [17326, 1193.03, 27766.25, 18.4, 170, 17],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.1 // Para suavizar la línea y darle un estilo de tendencia
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Tendencia de la Capacidad Instalada por Tipo de Energía (MW)'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Capacidad Instalada (MW)'
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default TrendLineChart;
