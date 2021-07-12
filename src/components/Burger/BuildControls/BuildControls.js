import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const CONTROLS = [
  { label: "Salad", type: "salad" },
  { label: "Cheese", type: "cheese" },
  { label: "Paneer", type: "paneer" },
  { label: "Chicken", type: "chicken" },
];

function BuildControls(props) {
  return (
    <div className={classes.BuildControls}>
      {CONTROLS.map((control) => (
        <BuildControl
          key={control.label}
          label={control.label}
          added={() => props.addIngredient(control.type)}
          removed={() => props.removeIngredient(control.type)}
        />
      ))}
      <button className={classes.OrderButton} onClick={props.ordered}>
        Order Now
      </button>
    </div>
  );
}

export default BuildControls;