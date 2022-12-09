import React from "react";

const currencies = ["AMD", "USD", "EUR", "GBP"];

const Block = ({ value, currency, onChangeValue, onChangeCurrency }) => (
  <div className="block">
    <ul className="currencies">
      {currencies.map((item) => (
        <li
          key={item}
          className={currency === item ? "active" : ""}
          onClick={() => onChangeCurrency(item)}
        >
          {item}
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
