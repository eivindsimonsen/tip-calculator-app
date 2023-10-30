import logo from "./assets/images/logo.svg";
import Bill from "./components/Bill";
import Tip from "./components/Tip";
import People from "./components/People";
import Results from "./components/Results";

function App() {
  return (
    <div className="wrapper">
      <header>
        <img
          src={logo}
          alt="Splitter"
          className="logo"
        />
      </header>
      <main>
        <section className="calculation">
          <Bill />
          <Tip />
          <People />
        </section>
        <section className="result">
          <Results />
        </section>
      </main>
    </div>
  );
}

export default App;
