import React, { useEffect, useState } from "react";
import Block from "./componetns/Block";
import "./App.css";

function App() {
  const [apiValue, setApiValue] = useState();
  const [upCurrency, setUpCurrency] = useState("AMD");
  const [downCurrency, setDownCurrency] = useState("USD");
  const [upInputValue, setUpInputValue] = useState(0);
  const [downInputValue, setDownInputValue] = useState(0);

  useEffect(() => {
    async function getApi() {
      const response = await fetch("https://open.er-api.com/v6/latest/USD");
      const json = await response.json();
      const data = await json;
      setApiValue(data);
    }
    getApi();
  }, []);

  const onChangeupPrice = (inputValue) => {
    const price =
      (inputValue / apiValue.rates[upCurrency]) * apiValue.rates[downCurrency];
    setDownInputValue(price);
    setUpInputValue(inputValue);
  };

  const onChangeToPrice = (inputValue) => {
    const price2 =
      (apiValue.rates[upCurrency] / apiValue.rates[downCurrency]) * inputValue;
    setUpInputValue(price2);
    setDownInputValue(inputValue);
  };

  useEffect(() => {});

  return (
    <div className="App">
      <Block
        value={upInputValue}
        currency={upCurrency}
        onChangeCurrency={setUpCurrency}
        onChangeValue={onChangeupPrice}
      />
      <Block
        value={downInputValue}
        currency={downCurrency}
        onChangeCurrency={setDownCurrency}
        onChangeValue={onChangeToPrice}
      />
    </div>
  );
}

export default App;
