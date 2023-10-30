import { useState } from "react";

function Tip() {
  const [tipValue, setTipValue] = useState(0);

  const getValue = (value) => {
    setTipValue(value);
  };

  return (
    <div className="input-container">
      <label htmlFor="tip">Select Tip %</label>
      <div id="tip">
        {[5, 10, 15, 25, 50].map((value) => (
          <input
            key={value}
            type="button"
            value={`${value}%`}
            onClick={() => getValue(value)}
            className={tipValue === value ? "active" : ""}
          />
        ))}

        <input
          type="button"
          value="Custom"
          id="tip-custom"
          onClick={() => {
            const customValue = parseFloat(prompt("Enter a custom tip percentage:"));
            if (!isNaN(customValue)) {
              getValue(customValue);
            }
          }}
        />
      </div>
    </div>
  );
}
export default Tip;
