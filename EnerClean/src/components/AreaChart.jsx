import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

export const AreaChart = () => {

  const years = [
    1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976,
    1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988,
    1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
    2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,
    2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021
  ];
  const renewableData = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.189, 0.202, 0.192, 0.206, 0.216, 0.227,
    0.212, 0.231, 0.234, 0.255, 0.267, 0.266, 0.268, 0.274, 0.274, 0.274,
    0.269, 0.34, 0.389, 0.444, 0.477, 0.496, 0.483, 0.532, 0.457, 0.496,
    0.496, 0.491, 0.495, 0.467, 0.503, 0.5197261, 0.5071364, 0.50934935,
    1.0032873, 1.1099824, 1.3783877, 1.4760586, 1.3464338, 1.728923, 1.8229002,
    1.9938043, 1.9912593, 2.1187904, 2.4441278, 2.820657, 2.8208168
  ];
  const conventionalData = [
    3.5439494, 3.9372194, 4.3892536, 4.8910117, 5.4379735, 6.05274, 6.4234085,
    7.115021, 7.7433486, 8.7920685, 9.7323, 10.22642, 10.451812, 12.07144,
    13.2593, 14.44702, 14.26534, 15.238536, 15.365776, 17.14022, 18.440771,
    21.332952, 23.24756, 24.5194, 26.78212, 27.495852, 27.72608, 22.280584,
    27.856392, 32.05839, 31.9894, 35.287624, 31.47576, 30.781685, 33.700657,
    30.815718, 31.632658, 33.968037, 36.17636, 38.33006, 39.220886, 42.55789,
    44.24198, 46.16088, 40.837364, 40.55746, 48.42748, 47.58171, 44.36279,
    44.741962, 44.681904, 46.787926, 57.32773, 56.65124, 54.437, 49.83735,
    59.858196
  ];

  // Configuración de los datos para el gráfico
  const data = {
    labels: years,
    datasets: [
      {
        label: "Energía Renovable",
        data: renewableData,
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.4
      },
      {
        label: "Energía Convencional",
        data: conventionalData,
        fill: true,
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        tension: 0.4
      }
    ]
  };

  // Opciones para el gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            return `${context.dataset.label}: ${context.raw.toFixed(2)} TWh`;
          }
        }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Consumo de Energía (TWh)"
        }
      },
      x: {
        title: {
          display: true,
          text: "Año"
        }
      }
    }
  };

  return (
    <div >
      <Line data={data} options={options} />
    </div>
  );
};
