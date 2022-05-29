import React from "react";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
function Content() {
  const barData = useSelector((state) => state.items.barData);
  console.log(barData);
  return (
    <>
      <div className="header">
        <div className="card">
          <div className="cardText">card</div>
        </div>
        <div className="card">
          <div className="cardText">card</div>
        </div>
        <div className="card">
          <div className="cardText">card</div>
        </div>
      </div>
      <div className="dropdownArea">
        <div className="dropdown">
          <select name="" id="">
            <option value="">ulkeler</option>
          </select>
        </div>
      </div>
      <div className="bar">
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths", "Active"],
            datasets: [
              {
                label: "Current state in Turkey",
                data: barData,
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 3,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
}

export default Content;
