import React from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = React.useState("");
  const [total, setTotal] = React.useState(0);

  function handleInput(e) {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setValue(inputValue.replace(/^0+(?!$)/, ""));
    }
  }

  const calculate = () => {
    if (value.length <= 1) {
      alert("Enter at least 2 number");
    }
    const reversedValue = [...value].reverse().join("");
    const difference = Math.abs(Number(value) - Number(reversedValue));
    setTotal(difference);
  };

  return (
    <div className="App">
      <div>
        Number: <input type="text" value={value} onChange={handleInput} />
        <button onClick={calculate}>Submit</button>
      </div>
      <div>Result: {total}</div>
    </div>
  );
}
