import logo from "./logo.svg";
import "./App.css";

function App() {
  const proverbs = [
    "천리 길도 한 걸음부터",
    "if you decide to go, them tou gotta just get on with it.",
    "Sit back, enjoy the ride. You gotta plant both your feet on the fround and start livin life.",
    "할까 말까 할 땐 해라",
  ]

  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length)
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> and save to reload.
        </p>
        {proverbs[getRandomIndex(proverbs.length)]}
      </header>
    </div>
  );
}

export default App;
