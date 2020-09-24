/* This line supresses stupid eslint warnings about putting
 * functions inside of loops. We need this for setTimeout so
 * let's just disable those warnings!
 */
/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/styles";
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

const initArray = (min, max, amount) => {
  let arr = [];
  for (let i = 0; i < amount; i++)
    arr.push(Math.floor(Math.random() * max) + min);
  return arr;
};

let cmps = 0;
const SelectionSort = props => {
  const classes = userStyle();
  const [masterArr] = useState(Object.assign([], initArray(1, 100, 50)));
  const [array, setArray] = useState([]);
  const [maxVal, setMaxVal] = useState(0);
  const [sortingIndex, setSortingIndex] = useState(0);

  useEffect(() => {
    // ... means unpack variable into array of props.
    setMaxVal(Math.max(...masterArr) + 1);
    setArray(masterArr);
    let masterCopy = Object.assign([], masterArr);
    Sort(masterCopy);
  }, []);

  const Sort = arr => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        let min = i;
        // SetTimeout is gonna freak out with warnings but
        // it still works so I do not care.
        setTimeout(() => {
          cmps++;
          if (arr[min] > arr[j]) {
            min = j;
          }
          if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
          }
          setArray(Object.assign([], arr));
          setSortingIndex(i);
        }, 1000);
      }
    }
  };

  return (
    // JSX tag
    <>
      <h1 className={classes.txt}>Selection Sort - 50 Items</h1>
      <h3 className={classes.txt}>Comparisons: {cmps}</h3>
      <div className={classes.container}>
        {/* Maps each element of array with a value and index*/}
        {array.map((value, index) => (
          // Each bar is just a div.
          <div
            className={classes.bar}
            style={{
              background: sortingIndex === index - 1 ? "#ff6d5c" : "seagreen",
              width: `${100 / array.length}%`,
              height: `${(value * 100) / maxVal}%`
            }}
          />
        ))}
      </div>
    </>
  );
};
export default SelectionSort;
