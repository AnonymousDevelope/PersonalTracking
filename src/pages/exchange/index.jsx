import { FaExchangeAlt } from "react-icons/fa";
import { CardTransUI, Dropdown } from "../../components";
import { useEffect, useState, useContext } from "react";
import { getData } from "../../utils/actions";
import { TransactionContext } from "../../context/TransactionConetxt";

const Index = () => {
  const [options, setOptions] = useState([]); // Dropdown options
  const [amount, setAmount] = useState(1); // Input amount
  const [rates, setRates] = useState({}); // Exchange rates from API
  const [convertedAmount, setConvertedAmount] = useState(0); // Result
  const { setCurrencyFrom, setCurrencyTo } = useContext(TransactionContext);
  const [currencyFrom, setLocalCurrencyFrom] = useState("USD");
  const [currencyTo, setLocalCurrencyTo] = useState("UZS");
  // Fetch exchange rates on mount
  useEffect(() => {
    getData("all").then((res) => {
      setOptions(Object.keys(res.conversion_rates));
      setRates(res.conversion_rates);
    });
  }, []);
  // Convert amount
  const handleConvert = () => {
    if (rates[currencyTo] && rates[currencyFrom] && amount>=0) {
      const result = (amount * rates[currencyTo]) / rates[currencyFrom];
      setConvertedAmount(result.toFixed(2)); // 2 decimal points
    }
  };
  // Handle change for currencyFrom dropdown
  const handleCurrencyFromChange = (selectedCurrency) => {
    setLocalCurrencyFrom(selectedCurrency);
    setCurrencyFrom(selectedCurrency); // Update context if needed
  };
  // Handle change for currencyTo dropdown
  const handleCurrencyToChange = (selectedCurrency) => {
    setLocalCurrencyTo(selectedCurrency);
    setCurrencyTo(selectedCurrency); // Update context if needed
  };
  return (
    <>
      <section className="exchange flex flex-col gap-3 w-[60%]">
        <CardTransUI
          title="Exchange Money"
          className={"flex flex-col gap-3 mt-5"}
          classNameParent={"w-full"}
        >
          {/* Amount Input */}
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            style={{ MozAppearance: "textfield" }}
            id="amount"
            min={0}
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full outline-none bg-transparent px-3 py-3 border border-light-custom rounded-md shadow-md"
            placeholder="Amount"
          />

          {/* Dropdowns */}
          <div className="grid grid-cols-3 items-center justify-center gap-3 mt-5 w-full">
            <div className="flex flex-col">
              <Dropdown
                options={options}
                value={currencyFrom}
                onChange={(e) => handleCurrencyFromChange(e)}
              />
            </div>
            <FaExchangeAlt className="mx-auto text-2xl" />
            <div className="flex flex-col">
              <Dropdown
                options={options}
                value={currencyTo}
                onChange={(e) => {
                  handleCurrencyToChange(e);
                }}
              />
            </div>
          </div>

          {/* Convert Button */}
          <button
            onClick={handleConvert}
            className="w-full px-5 py-3 bg-blue-500 text-light-custom rounded-xl shadow-md hover:bg-blue-600"
          >
            Convert
          </button>

          {/* Exchange Result */}
          <div className="exchange-amount flex flex-col items-start mt-4">
            <div>
              {amount} {currencyFrom} ={" "}
            </div>
            <h1 className="text-[30px] font-bold">
              {convertedAmount} {currencyTo}
            </h1>
            <h1 className="text-[15px] text-slate-500">
              1 {currencyFrom} = {(rates[currencyTo] / rates[currencyFrom]).toFixed(4)} {currencyTo}
            </h1>
          </div>
        </CardTransUI>
      </section>
    </>
  );
};

export default Index;
