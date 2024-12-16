/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import Chart from "react-google-charts";
import { TransactionContext } from "../../context/TransactionConetxt";
import { useContext, useEffect, useState } from "react";

export default function PersonalTrackingChart() {
  const { transaction } = useContext(TransactionContext);

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpense = 0;

    // Xarajat va daromadlarni hisoblash
    transaction.forEach((trans) => {
      if (trans.type === "Income") {
        totalIncome += trans.amount;
      } else if (trans.type === "Expense") {
        totalExpense += trans.amount;
      }
    });

    // Grafik uchun ma'lumotlarni yangilash
    const newData =
      totalExpense > 0
        ? [
            ["Category", "Amount"],
            ["Income", totalIncome],
            ["Expense", totalExpense],
          ]
        : [["Category", "Amount"], ["Income", totalIncome]];

    setChartData(newData); // State orqali grafik ma'lumotlarini yangilash
  }, [transaction]); // `transaction` o'zgarganda ishlaydi

  const options = {
    title: "Personal Tracking", // Yangi nom
    pieHole: 0.5, // Donut chart ko'rinishi
    is3D: true, // Yassi ko'rinish
    pieStartAngle: 90, // Grafikni aylantirish
    sliceVisibilityThreshold: 0.01, // Kichik qismlarni ham ko'rsatish
    backgroundColor: "transparent",
    chartArea: {
      left: 20,
      top: 30,
      width: "90%",
      height: "75%",
    },
    tooltip: {
      trigger: "focus", // Hoverda ko'rsatish
    },
    titleTextStyle: {
      color: "#fff", // Oq rangdagi matn
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
    colors: ["#4CAF50", "#FF5722"], // Maxsus ranglar
  };

  return (
    <Chart
      chartType="PieChart"
      data={chartData} // Yangilangan ma'lumotlar
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
