import { Button } from "../Button/Button";

export function Buttons({ decrease, disabled, increase, reset }) {
  return (
    <div style={{ display: "flex" }}>
      <Button
        label={"Decrement"}
        text={"-"}
        onClick={decrease}
        disabled={disabled}
      />
      <Button label={"Increment"} text={"+"} onClick={increase} />
      <Button label={"Reset"} text={"Reset"} onClick={reset} />
    </div>
  );
}
