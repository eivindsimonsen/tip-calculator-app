import { useState } from "react";
import { useCalculateContext } from "../context/CalculationContext";

function Tip() {
  const { tipValue, setTipValue } = useCalculateContext();
  const [toggleCustom, setToggleCustom] = useState(false);

  const getValue = (value) => {
    setTipValue(value);
  };

  const getCustomValue = (e) => {
    const numericValue = parseInt(e.target.value, 10);
    setTipValue(numericValue);

    if (setTipValue > 0) {
      setTipValue(0);
    }
  };

  const toggleCustomValue = () => {
    setToggleCustom(!toggleCustom);
    setTipValue(0);
  };

  return (
    <div className="input-container">
      <label>Select Tip %</label>
      <div id="tip">
        {[5, 10, 15, 25, 50].map((value) => (
          <input
            key={value}
            type="button"
            aria-label={`Select ${value}%`}
            autoComplete="off"
            className={tipValue === value ? "active" : ""}
            value={`${value}%`}
            onClick={() => {
              getValue(value);
              setToggleCustom(false);
            }}
          />
        ))}

        {toggleCustom ? (
          <input
            type="text"
            placeholder="0"
            aria-label="Custom Tip Percentage"
            autoComplete="off"
            className="custom-value-input custom-value-input--selected"
            onChange={getCustomValue}
          />
        ) : (
          <input
            type="text"
            placeholder="Custom"
            aria-label="Custom Tip Percentage"
            autoComplete="off"
            className="custom-value-input"
            onClick={toggleCustomValue}
          />
        )}
      </div>
    </div>
  );
}
export default Tip;
