import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  // Datos originales
  const labels = [
    "Energía Eléctrica",
    "Energía Solar",
    "Energía Hidroeléctrica",
    "Energía Eólica",
    "Energía Geotérmica",
    "Energía Biomasa"
  ];
  const originalDataValues = [6, 7, 70, 0.1, 30.5, 17];

  // Calcular el total y los porcentajes con el símbolo %
  const total = originalDataValues.reduce((sum, value) => sum + value, 0);
  const dataValues = originalDataValues.map(value => ((value / total) * 100).toFixed(2) + "%");

  // Configuración de los datos para el gráfico de torta
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Porcentaje de Energías",
        // Utiliza los valores numéricos para el gráfico
        data: originalDataValues, 
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(255, 205, 86, 0.6)",
          "rgba(201, 203, 207, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(54, 162, 235, 0.6)"
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(201, 203, 207, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(54, 162, 235, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

const options = {
    responsive: true,
    maintainAspectRatio: false, //permite que el grafico ocupe todo el contenedor
    plugins: {
      legend: {
        position: 'right', // Cambia a 'left' si prefieres que esté a la izquierda
        align: 'start', // Alinea la leyenda desde la parte superior
        labels: {
          usePointStyle: true, // Muestra un pequeño cuadrado de color antes del nombre
        },
      },
    },
  };

  return <Pie data={data} options={options} />

};
