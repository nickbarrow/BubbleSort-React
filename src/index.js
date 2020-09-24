import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import BubbleSort from "./BubbleSort";
import SelectionSort from "./SelectionSort";

// Change "sorting" variable to reflect the amount of
// sorting algortithms you want displayed on screen
let sorting = 2;
// Declare like "App = props => " to allow usage of props
const App = props => {
  return (
    <div style={{ height: 100 / (sorting * 2) + "%" }}>
      <BubbleSort />
      <SelectionSort />
      <a class="btn" href="https://codesandbox.io/s/bubble-sort-5hv39">
        Link to CodeSandbox
      </a>
    </div>
  );
};
// Export for importing elsewhere
export default App;
ReactDOM.render(<App />, document.getElementById("root"));
