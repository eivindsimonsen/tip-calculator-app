import { useCalculateContext } from "../context/CalculationContext";

function Results() {
  const { bill, tipValue, people } = useCalculateContext();

  console.log(bill, tipValue, people);

  return (
    <>
      <div className="result-amount">
        <div>
          <p>Tip Amount</p>
          <span className="text-span">/ person</span>
        </div>
        <span className="number-span">$4.27</span>
      </div>
      <div className="result-total">
        <div>
          <p>Total</p>
          <span className="text-span">/ person</span>
        </div>
        <span className="number-span">$32.79</span>
      </div>
      <button className="cta reset-btn">RESET</button>
    </>
  );
}
export default Results;
