import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CombinedEnergyChart = () => {
  const data = {
    labels: ['Capacidad Instalada de Energías'],
    datasets: [
      {
        label: 'Energía Eléctrica',
        data: [17326],
        backgroundColor: 'rgba(255, 99, 132, 0.7)'
      },
      {
        label: 'Energía Solar',
        data: [1193.03],
        backgroundColor: 'rgba(54, 162, 235, 0.7)'
      },
      {
        label: 'Energía Hidroeléctrica',
        data: [27766.25],
        backgroundColor: 'rgba(75, 192, 192, 0.7)'
      },
      {
        label: 'Energía Eólica',
        data: [18.4],
        backgroundColor: 'rgba(255, 206, 86, 0.7)'
      },
      {
        label: 'Energía Geotérmica',
        data: [170],
        backgroundColor: 'rgba(153, 102, 255, 0.7)'
      },
      {
        label: 'Energía Biomasa',
        data: [17],
        backgroundColor: 'rgba(255, 159, 64, 0.7)'
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
        text: 'Capacidad Instalada de Diferentes Tipos de Energía (MW)'
      }
    },
    scales: {
      x: {
        stacked: true,
        title: {
          display: true,
          text: 'Tipo de Energía'
        }
      },
      y: {
        stacked: true,
        beginAtZero: true,
        title: {
          display: true,
          text: 'Capacidad Instalada (MW)'
        }
      }
    }
  };

  return <Bar data={data} options={options} />;
};

export default CombinedEnergyChart;
