import { Chart } from "react-google-charts";
import { TransactionContext } from "../../context/TransactionConetxt";
import { useContext, useEffect, useState } from "react";

const ChartEx = () => {
  const { transaction } = useContext(TransactionContext);
  const [chartData, setChartData] = useState([["Year", "Income", "Expense"]]);

  useEffect(() => {
    // Yil va summalarni to'plab grafik ma'lumotlarini yaratish
    const dataMap = new Map();

    transaction.forEach((trans) => {
      const year = new Date(trans.date).getFullYear(); // Yilni olish
      if (!dataMap.has(year)) {
        dataMap.set(year, { income: 0, expense: 0 });
      }
      if (trans.type === "Income") {
        dataMap.get(year).income += trans.amount;
      } else if (trans.type === "Expense") {
        dataMap.get(year).expense += trans.amount;
      }
    });

    // `Map`dan grafik uchun massivga aylantirish
    const formattedData = [["Year", "Income", "Expense"]];
    dataMap.forEach((value, key) => {
      formattedData.push([key.toString(), value.income, value.expense]);
    });

    setChartData(formattedData);
  }, [transaction]); // transaction o'zgarganda ma'lumotlarni qayta hisoblash

  return (
    <>
      <Chart
        chartType="AreaChart"
        data={chartData}
        options={{
          title: "My Daily Expenses",
          hAxis: {
            title: "Year",
            minValue: 0,
            titleTextStyle: { color: "#fff" },
            textStyle: { color: "#F8FAFC" },
          },
          vAxis: {
            minValue: 0,
            title: "Amount",
            titleTextStyle: { color: "#fff" },
            textStyle: { color: "#F8FAFC" },
          },
          colors: ["#00ff00", "#ff0000"], // Income: Green, Expense: Red
          backgroundColor: "transparent",
          titleTextStyle: { color: "#fff", fontSize: 20 },
          legend: { position: "bottom", textStyle: { color: "#fff" } },
        }}
        width="100%"
        height="300px"
      />
    </>
  );
};

export default ChartEx;
