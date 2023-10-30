import dollarSign from "../assets/images/icon-dollar.svg";

function Bill() {
  return (
    <div className="input-container">
      <label htmlFor="bill">Bill</label>
      <div className="input-wrapper">
        <img
          src={dollarSign}
          alt="Image"
        />
        <input
          type="number"
          id="bill"
          placeholder="0"
          inputMode="numeric"
        />
      </div>
    </div>
  );
}
export default Bill;
