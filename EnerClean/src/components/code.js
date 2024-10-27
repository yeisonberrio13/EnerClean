import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, Line } from 'chart.js';
import { Chart } from 'react-chartjs-2';

const data = {
    labels: ['Enero', 'Febrero', 'Marzo'],
    datasets: [{
      label: 'Ventas',
      data: [12, 19, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  };


function MyChart() {
  const [data, setData] = useState({
    // ... datos iniciales
  });

  // Puedes actualizar los datos de forma dinámica usando useEffect

  return (
    <div>
      <h2>Gráfico de Línea</h2>
      <Chart
        type='line'
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              text: 'Ventas mensuales'
            }
          }
        }}
      />
    </div>
  );
}

export default MyChart;