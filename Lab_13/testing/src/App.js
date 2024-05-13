import React, { useState } from "react";
import calculatorImage from "./calculator.png";
import "./App.css";

function App() {
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [showFinalResult, setShowFinalResult] = useState(false);

  const handleSum = () => {
    const result = parseFloat(firstNumber) + parseFloat(secondNumber);
    setFinalResult(result);
    setShowFinalResult(true);
  };

  const handleMultiply = () => {
    const result = parseFloat(firstNumber) * parseFloat(secondNumber);
    setFinalResult(result);
    setShowFinalResult(true);
  };

  const handleDivide = () => {
    const result = parseFloat(firstNumber) / parseFloat(secondNumber);
    setFinalResult(result);
    setShowFinalResult(true);
  };

  return (
    <>
      {/* Task 1 */}
      <div className="calculator-container">
        <h1>Calculator Testing</h1>
        <input
          type="number"
          className="calculator-input"
          name="first"
          id="first"
          placeholder="First Number"
          value={firstNumber}
          onChange={(e) => setFirstNumber(e.target.value)}
        />
        <input
          type="number"
          className="calculator-input"
          name="second"
          id="second"
          placeholder="Second Number"
          value={secondNumber}
          onChange={(e) => setSecondNumber(e.target.value)}
        />
        <br />
        <button type="button" className="calculator-button" onClick={handleSum}>
          SUM
        </button>
        <button
          type="button"
          className="calculator-button"
          onClick={handleMultiply}
        >
          MULTIPLY
        </button>
        <button
          type="button"
          className="calculator-button"
          onClick={handleDivide}
        >
          DIVIDE
        </button>
        <br />
        {showFinalResult && (
          <input
            type="text"
            className="calculator-input"
            name="finalResult"
            id="finalResult"
            placeholder="Final Result"
            readOnly
            value={finalResult}
          />
        )}
      </div>
      <br />
      <br />
      {/* Task 2 */}
      {/* <div className="App">
        <header>
          <h1>Calculator Testing</h1>
          <img src={calculatorImage} alt="Calculator" />
        </header>
        <main>
          <h2 name="h2">Enter Numbers</h2>
          <input type="number" placeholder="Enter First Number" />
          <input type="number" placeholder="Enter Second Number" />
        </main>
        <footer>
          <h3 name="h3">Operation Buttons</h3>
          <button type="button">SUM</button>
          <button type="button">MULTIPLY</button>
          <button type="button">DIVIDE</button>
        </footer>
      </div>

      <br />
      <br /> */}
      {/* Task 3 */}
      {/* <input type="number" id="fid" name="first" placeholder="Enter 2 Number" />
      <input
        type="number"
        id="sid"
        name="second"
        placeholder="Enter 3 Number"
      />
      <input type="number" id="tid" name="third" placeholder="Enter 4 Number" />
      <input
        type="number"
        id="foid"
        name="forth"
        placeholder="Enter 5 Number"
      />
      <input
        type="number"
        id="userid"
        name="username"
        placeholder="Enter 1 Number"
      />
      <input
        type="number"
        id="fiid"
        name="fivth"
        placeholder="Enter 6 Number"
      />
      <input
        type="number"
        id="siid"
        name="sixth"
        placeholder="Enter 7 Number"
      />
      <input
        type="number"
        id="seid"
        name="seventh"
        placeholder="Enter 8 Number"
      /> */}
    </>
  );
}

export default App;
