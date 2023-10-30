import peopleImage from "../assets/images/icon-person.svg";

function People() {
  return (
    <div className="input-container">
      <label htmlFor="people">Number of People</label>
      <div className="input-wrapper">
        <img
          src={peopleImage}
          alt=""
        />
        <input
          type="number"
          id="people"
          placeholder="0"
          inputMode="numeric"
        />
      </div>
    </div>
  );
}
export default People;
