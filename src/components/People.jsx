import peopleImage from "../assets/images/icon-person.svg";
import { useCalculateContext } from "../context/CalculationContext";

function People() {
  const { setPeople } = useCalculateContext();

  const getPeople = (e) => {
    setPeople(e.target.value);
  };

  return (
    <div className="input-container">
      <label htmlFor="people">Number of People</label>
      <div className="input-wrapper">
        <img
          src={peopleImage}
          alt=""
        />
        <input
          type="text"
          id="people"
          placeholder="0"
          inputMode="numeric"
          onChange={getPeople}
        />
      </div>
    </div>
  );
}
export default People;
