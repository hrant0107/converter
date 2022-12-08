import React, { useEffect, useState } from "react";
import Block from "./componetns/Block";
import "./App.scss";

function App() {
  const [apiValue, setApiValue] = useState();
  const [fromCurrency, setFromCurrency] = useState("AMD");
  const [toCurrency, setToCurenncy] = useState("USD");
  const [fromPrice, setFromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  useEffect(() => {
    async function getApi() {
      const response = await fetch("https://open.er-api.com/v6/latest/USD");
      const json = await response.json();
      const data = await json;
      setApiValue(data);
    }
    getApi();
  }, []);

  const onChangeFromPrice = (inputValue) => {
    const price =
      (inputValue / apiValue.rates[fromCurrency]) * apiValue.rates[toCurrency];
    console.log(price);

    setFromPrice(inputValue);
  };

  const onChangeToPrice = (inputValue) => {
    setToPrice(inputValue);
  };
  console.log(apiValue);
  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCurrency}
        onChangeCurrency={setFromCurrency}
        onChangeValue={onChangeFromPrice}
      />
      <Block
        value={toPrice}
        currency={toCurrency}
        onChangeCurrency={setToCurenncy}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default App;
