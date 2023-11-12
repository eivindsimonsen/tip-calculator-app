import dollarSign from "../assets/images/icon-dollar.svg";
import { useCalculateContext } from "../context/CalculationContext";

function Bill() {
  const { setBill } = useCalculateContext();

  const billValue = (e) => {
    setBill(e.target.value);
  };

  return (
    <div className="input-container">
      <label htmlFor="bill">Bill</label>
      <div className="input-wrapper">
        <img
          src={dollarSign}
          alt="Image"
        />
        <input
          type="text"
          id="bill"
          placeholder="0"
          inputMode="numeric"
          autoFocus
          onChange={billValue}
        />
      </div>
    </div>
  );
}

export default Bill;
