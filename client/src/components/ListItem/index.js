import React from 'react';
// import './index.css';

export function List({ children }) {
  return <ul className="list-group">{children}</ul>
}

export function ListItem({
  num1,
  num2,
  operator,
  result

}) {

  num1 = Number(num1);
  num2 = Number(num2);
 
  // recalculate the result
  if (operator === "+") {
    result = (num1 + num2).toPrecision(10).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");
  } else if (operator === "-") {
    // not sure why this subtraction function isn't working the way I want
    result = (num1 - num2).toPrecision(10).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");
  } else if (operator === "*") {
    result = (num1 * num2).toPrecision(10).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");
  } else if (operator === "/") {
    result = (num1 / num2).toPrecision(10).replace(/(?:\.0+|(\.\d+?)0+)$/, "$1");
  }
  else {
    result = "illegal operation"
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <p>{num1} {operator} {num2} = {result}</p>
      </div>
    </li>
  );
}