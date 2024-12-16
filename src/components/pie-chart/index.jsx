/* eslint-disable no-unused-vars */
import Chart from "react-google-charts";

export default function PersonalTrackingChart() {
  const data = [
    ["Category", "Hours per Day"],
    ["Work", 8],
    ["Sleep", 7],
    ["Exercise", 1],
    ["Leisure", 3],
    ["Other", 5],
  ];

  const options = {
    title: "Daily Time Distribution", // Updated title for personal tracking
    pieHole: 0.5, // Adjusted for a cleaner donut chart
    // slices: {
    //   0: { offset: 0.1 }, // Highlight the first slice
    //   1: { offset: 0 },
    //   2: { offset: 0 },
    //   3: { offset: 0 },
    //   4: { offset: 0 },
    // },
    
    is3D: true,
    pieStartAngle: 90, // Rotate for better readability
    sliceVisibilityThreshold: 0.01, // Show even small slices
    backgroundColor: "transparent",
    chartArea: {
      left: 20,
      top: 30,
      width: "90%",
      height: "75%",
    },
    tooltip: {
      trigger: "focus", // Display tooltips on hover
    },
    titleTextStyle: {
      color: "#fff", // Neutral text color
      fontSize: 18,
    },
    pieSliceTextStyle: {
      color: "#fff",
      fontSize: 12,
      fontStyle: "bold",
    },
    legend: {
      position: "bottom",
      alignment: "center",
      textStyle: {
        color: "#fff",
        fontSize: 12,
      },
    },
    colors: ["#4CAF50", "#FF5722", "#FFC107", "#2196F3", "#9C27B0"], // Custom colors
  };

  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
