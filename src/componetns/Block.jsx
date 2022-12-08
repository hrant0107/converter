import React from "react";

const defaultCurrencies = ["AMD", "USD", "EUR", "GBP"];

const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
  <div className="block">
    <ul className="currencies">
      {defaultCurrencies.map((cur) => (
        <li
          key={cur}
          className={currency === cur ? "active" : ""}
          onClick={() => onChangeCurrency(cur)}
        >
          {cur}
        </li>
      ))}
    </ul>
    <input
      onChange={(e) => onChangeValue(e.target.value)}
      value={value}
      type="number"
      placeholder={0}
    />
  </div>
);

export default Block;
