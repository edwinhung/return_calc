import Input from "./components/Input";

const INITIAL_INPUT = {
  initial: {
    name: "INITIAL INVESTMENT",
    value: null,
  },
  annual: {
    name: "ANNUAL INVESTMENT",
    value: null,
  },
  expected: {
    name: "EXPECTED RETURN",
    value: null,
  },
  duration: {
    name: "DURATION",
    value: null,
  },
};

function App() {
  return (
    <>
      <div id="header">
        <img src="investment-calculator-logo.png" />
        <h1>Investment Calculator</h1>
      </div>
      <div id="user-input">
        <Input type="initial" initial_input={INITIAL_INPUT} />
        <Input type="annual" initial_input={INITIAL_INPUT} />
        <Input type="expected" initial_input={INITIAL_INPUT} />
        <Input type="duration" initial_input={INITIAL_INPUT} />
      </div>
    </>
  );
}

export default App;
