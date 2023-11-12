import { useCalculateContext } from "../context/CalculationContext";

function Results() {
  const { bill, tipValue, people } = useCalculateContext();

  function calculateTipAmount(bill, tipPercentage, people) {
    if (!bill || !tipPercentage || !people || people === 0) {
      return "0.00";
    }

    const tipAmount = (bill * (tipPercentage / 100)) / people;
    return tipAmount.toFixed(2);
  }

  function calculateTotalPrice(bill, tipPercentage, people) {
    if (!bill || !tipPercentage || !people || people === 0) {
      return "0.00";
    }

    const tipAmount = (bill * (tipPercentage / 100)) / people;
    const totalAmount = bill / people + parseFloat(tipAmount);
    return totalAmount.toFixed(2);
  }

  const tipAmountPerPerson = calculateTipAmount(bill, tipValue, people);
  const totalAmountPerPerson = calculateTotalPrice(bill, tipValue, people);

  const handleReset = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="result-amount">
        <div>
          <p>Tip Amount</p>
          <span className="text-span">/ person</span>
        </div>
        <span className="number-span">${tipAmountPerPerson}</span>
      </div>
      <div className="result-total">
        <div>
          <p>Total</p>
          <span className="text-span">/ person</span>
        </div>
        <span className="number-span">${totalAmountPerPerson}</span>
      </div>
      <button
        onClick={handleReset}
        className="cta reset-btn">
        RESET
      </button>
    </>
  );
}

export default Results;
