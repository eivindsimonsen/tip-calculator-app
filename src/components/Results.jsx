function Results() {
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
        <span className="number-span">$4.27</span>
      </div>
      <button className="cta reset-btn">RESET</button>
    </>
  );
}
export default Results;
