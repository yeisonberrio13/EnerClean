import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Title, Tooltip, Legend);

const LinesChart = () => {
  // Etiquetas para el eje X (años)
  const labels = [
    1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980,
    1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996,
    1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
  ];

  // Valores de consumo (kWh)
  const dataValues = [
    11.788209, 12.017394, 12.580107, 13.300462, 14.526139, 14.817516, 15.987799, 15.767954, 17.170427, 
    17.39551, 19.235607, 19.407125, 19.36701, 20.862885, 21.545105, 23.044971, 22.218885, 22.697723, 
    21.790188, 23.639833, 24.441961, 27.276325, 27.310854, 28.748077, 29.793999, 32.640934, 31.6998, 
    24.605455, 27.847397, 29.809082, 29.331577, 31.475914, 27.334064, 26.691463, 31.378248, 29.556067, 
    30.604485, 32.692554, 33.389133, 34.505455, 35.05353, 34.14272, 35.182762, 33.94141, 31.377745, 
    30.092037, 34.515675, 31.746134, 29.385107, 28.364685, 28.021618, 27.708813, 32.82906, 31.99955, 
    29.890343, 30.772787, 33.02041
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Consumo Energético (kWh)',
        data: dataValues,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
      title: {
        display: true,
        text: 'Historial de Consumo Energético en Colombia (1965-2021)',
      },
    },
    scales: {
      x: { display: true, title: { display: true, text: 'Años' } },
      y: { display: true, title: { display: true, text: 'Consumo (kWh)' } },
    },
  };

  return <Line data={data} options={options} />;
};

export default LinesChart;


