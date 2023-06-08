import React, { useState, ChangeEvent } from "react";
import "./CurrencySelector.css";

const CurrencySelector: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("NGN");

  const handleCurrencyChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCurrency(event.target.value);
  };

  return (
    <div>
      {/* <label htmlFor="currency">Select Currenc</label> */}
      <select
        id="currency"
        className="currency"
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        {/* <option value="">-- Select a currency --</option> */}
        <option value="NGN">NGN </option>
        <option value="USD">USD </option>
        <option value="EUR">EUR </option>
        <option value="GBP">GBP </option>
        <option value="CAD">CAD </option>
      </select>
    </div>
  );
};

export default CurrencySelector;
