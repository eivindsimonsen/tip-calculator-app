import logo from "./assets/images/logo.svg";
import Bill from "./components/Bill";
import Tip from "./components/Tip";
import People from "./components/People";

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
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero, harum labore quia a quis cumque tempora aliquam praesentium, odio voluptate veritatis ipsum nemo totam? Temporibus cum aperiam harum laboriosam quos ad debitis ut deserunt sed quibusdam. Ea iure fugit laboriosam vel, consequuntur a, quasi eius doloremque, facilis ad aliquid sapiente!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
