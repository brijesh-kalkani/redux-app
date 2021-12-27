import "./App.css";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./actions/index";

function App(props) {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
    <>
      <div className="c  return (
ontainer">
        <h1>Increment/Decrement counter</h1>
        <h4>using React and Redux</h4>

        <div className="quantity">
          <a
            className="quantity__minus icon"
            title="Decrement"
            onClick={() => dispatch(decNumber())}
          >
            <span>-</span>
          </a>
          <input
            name="auantity"
            type="text"
            className="quantity__input"
            value={myState}
          />
          <a
            className="quantity__plus icon"
            title="Increment"
            onClick={() => dispatch(incNumber())}
          >
            <span>+</span>
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
