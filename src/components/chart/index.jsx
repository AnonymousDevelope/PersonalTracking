function getData() {
    return [
      {
        year: "2020",
        amount: 200,
        income: 300,
        expense: 150,
      },
      {
        year: "2021",
        amount: 300,
        income: 400,
        expense: 250,
      },
      {
        year: "2022",
        amount: 350,
        income: 450,
        expense: 300,
      },
      {
        year: "2023",
        amount: 400,
        income: 500,
        expense: 350,
      },
    ];
  }
  
  import { AgCharts } from "ag-charts-react";
  import { useState } from "react";
  
  const ChartExample = () => {
    // eslint-disable-next-line no-unused-vars
    const [options, setOptions] = useState({
      title: {
        text: "Transactions History",
      },
      data: getData(),
      series: [
        {
          type: "column",
          xKey: "year", // Use "year" as x-axis
          yKey: "amount", // Use "amount" for column chart
          name: "Amount",
        },
        {
          type: "line",
          xKey: "year", // Use "year" as x-axis
          yKey: "income", // Use "income" for line chart
          name: "Income",
        },
        {
          type: "line",
          xKey: "year", // Use "year" as x-axis
          yKey: "expense", // Use "expense" for line chart
          name: "Expense",
        },
      ],
      axes: [
        {
          type: "category",
          position: "bottom",
          title: {
            text: "Year",
          },
        },
        {
          type: "number",
          position: "left",
          title: {
            text: "Value",
          },
        },
      ],
    });
  
    return <AgCharts options={options} />;
  };
  export default ChartExample;