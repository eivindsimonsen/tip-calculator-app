function Tip() {
  const getValue = (e) => {
    const valueWithPercentage = e.target.value; // Get the value with "%"
    const valueWithoutPercentage = valueWithPercentage.replace("%", ""); // Remove the "%"
    const numericValue = parseFloat(valueWithoutPercentage); // Parse it as a number
    console.log(numericValue); // Display the numeric value
  };

  return (
    <div className="input-container">
      <label htmlFor="tip">Select Tip %</label>
      <div id="tip">
        <input
          type="button"
          value="5%"
          onClick={getValue}
        />
        <input
          type="button"
          value="10%"
          onClick={getValue}
        />
        <input
          type="button"
          value="15%"
          onClick={getValue}
        />
        <input
          type="button"
          value="25%"
          onClick={getValue}
        />
        <input
          type="button"
          value="50%"
          onClick={getValue}
        />
        {/* <input
          type="text"
          placeholder="0"
          id="tip-custom"
          inputMode="numeric"
        /> */}
        <input
          type="button"
          value="Custom"
          id="tip-custom"
        />
      </div>
    </div>
  );
}
export default Tip;
