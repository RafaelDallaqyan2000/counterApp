import { Button } from "./Components/Button/Button";
import { useEffect, useState } from "react";
import "./App.css";
import { Buttons } from "./Components/Buttons/Buttons";

const setStorage = (key, value) => localStorage.setItem(key, value);

const getStorage = (key) => localStorage.getItem(key);

function App() {
  const [state, setState] = useState(+getStorage("state") ?? 0);
  const [disabled, setDisabled] = useState(getStorage("disabled") ?? true);
  const [maxValue, setMaxValue] = useState(+getStorage("increase") ?? 10);
  const [minValue, setMinValue] = useState(+getStorage("decrease") ?? 0);
  const [step, setStep] = useState(getStorage("step") ?? 1);

  useEffect(() => {
    if (state > 0) {
      setDisabled(false);
      setStorage("disabled", false);
    } else {
      setDisabled(true);
      setStorage("disabled", true);
    }
  }, [state]);

  const increase = () => {
    if (state < maxValue) {
      if (state + +step) {
        setState((prev) => prev + +step);
        setDisabled(false);
        setStorage("disabled", false);
        setStorage("state", +state + 1);
      }
    }
  };

  const decrease = () => {
    if (state >= minValue) {
      if (state - +step > minValue) {
        setState((prev) => prev - +step);
      } else {
        setState(+minValue);
        setStorage("state", +state - 1);
      }
    }
  };

  const reset = () => {
    setState(+minValue);
    setStorage("disabled", true);
    setDisabled(true);
    setStorage("state", +state);
  };

  return (
    <div className="App">
      <p>{state}</p>
      <div style={{ display: "flex" }}>
        <Button
          label={"Decrement"}
          text={"-"}
          onClick={decrease}
          disabled={disabled && getStorage("disabled")}
        />
        <Button label={"Increment"} text={"+"} onClick={increase} />
        <Button label={"Reset"} text={"Reset"} onClick={reset} />
      </div>
      <Buttons
        decrease={decrease}
        increase={increase}
        disabled={disabled}
        reset={reset}
      />
      <div style={{ display: "flex", gap: 5 }}>
        <div>
          <input
            type="number"
            min={0}
            value={getStorage("maxValue") ?? ""}
            onChange={(e) => {
              setMaxValue(e.target.value);
              setStorage("maxValue", e.target.value);
            }}
          />
          <p style={{ textAlign: "center" }}>Max value</p>
        </div>
        <div>
          <input
            type="number"
            min={0}
            value={getStorage("minValue") ?? ""}
            onChange={(e) => {
              setMinValue(e.target.value);
              setStorage("minValue", e.target.value);
            }}
          />
          <p style={{ textAlign: "center" }}>Min value</p>
        </div>
        <div>
          <input
            type="number"
            min={0}
            value={getStorage("step") ?? ""}
            onChange={(e) => {
              setStep(e.target.value);
              setStorage("step", e.target.value);
            }}
          />
          <p style={{ textAlign: "center" }}>Step</p>
        </div>
      </div>
    </div>
  );
}

export default App;
