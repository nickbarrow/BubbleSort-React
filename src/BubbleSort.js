import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";

// This function from @material-ui/styles help create css
const userStyle = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    border: "2px solid #ff6d5c",
    borderRadius: "5px"
  },
  bar: {
    margin: "1px",
    borderRadius: "3px"
  },
  txt: {
    margin: "0px",
    paddingTop: "5px"
  }
});

// Initializes a random array based on props given
const initArray = (min, max, amount) => {
  let arr = [];
  for (let i = 0; i < amount; i++)
    arr.push(Math.floor(Math.random() * max) + min);
  return arr;
};

let cmps = 0;
// Main sorting array. Change this for different algorithms.
const BubbleSort = props => {
  // Make our styles first with useStyles()
  const classes = userStyle();
  // useState is used to create "state" variables in function
  // components which have no state.
  // It works like this:
  // const [var, targetMethod] = useState(arg from targetMethod);
  // Object.assign(target, source);
  const [masterArr] = useState(Object.assign([], initArray(1, 100, 50)));
  // This "array" var will hold the sorted array
  const [array, setArray] = useState([]);
  // Sets maximum value of array used for setting scale of bars.
  const [maxVal, setMaxVal] = useState(0);
  // sortingIndex is used to display bars.
  const [sortingIndex, setSortingIndex] = useState(0);

  // Use useEffect() in place of componentDidMount() and
  // componentDidUpdate() to handle "side effects".
  // Side effects are modifications to the DOM that you want to
  // do after updating the DOM (render).
  useEffect(() => {
    // ... means unpack variable into array of props.
    setMaxVal(Math.max(...masterArr) + 1);
    // Call function which sets array "state" var
    setArray(masterArr);
    // Create a copy of baseArray
    let masterCopy = Object.assign([], masterArr);
    Sort(masterCopy);
  }, []);

  // Bubblesort algorithm.
  const Sort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = 0; j < arr.length - (i - 1); j++) {
        setTimeout(() => {
          if (arr[j] > arr[j + 1]) {
            let tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
            cmps++;
            // Set array to most recent sort
            setArray(Object.assign([], arr));
            setSortingIndex(j);
          }
        }, 1000);
      }
    }
  };

  return (
    // JSX tag
    <>
      <h1 className={classes.txt}>Bubble Sort - 50 Items</h1>
      <h3 className={classes.txt}>Comparisons: {cmps}</h3>
      <div className={classes.container}>
        {/* Maps each element of array with a value and index*/}
        {array.map((value, index) => (
          // Each bar is just a div.
          <div
            className={classes.bar}
            style={{
              background: sortingIndex === index - 1 ? "#ff6d5c" : "dodgerblue",
              width: `${100 / array.length}%`,
              height: `${(value * 100) / maxVal}%`
            }}
          />
        ))}
      </div>
    </>
  );
};
export default BubbleSort;
