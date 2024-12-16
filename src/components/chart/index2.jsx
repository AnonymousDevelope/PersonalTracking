import {Chart} from "react-google-charts"
const ChartEx = () => {
    const data = [
        ["Year","income","expense"],
        ["2022", 1000, 400],
        ["2023", 1170, 460],
        ["2024", 660, 1120],
        ["2025", 1030, 540],
    ]
  return (
    <>
        <Chart
            chartType="AreaChart"
            width="100%"
            options={{
                title: "My Daily Expenses",
                hAxis: { title: "Year",minValue: 0, titleTextStyle: { color: "#fff" },textStyle: { color: "#F8FAFC" } },
                vAxis: { minValue: 0,title: "Amount", titleTextStyle: { color: "#fff" },textStyle: { color: "#F8FAFC" } },
                colors: ["#00ff00", "#ff0000"],
                backgroundColor: "transparent",
                titleTextStyle: { color: "#fff", fontSize: 20},
                legend: { position: "bottom", textStyle: { color: "#fff" } },
                width: "100%",
            }}
            height="300px"
            data={data}
        />
    </>
  )
}

export default ChartEx;