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
  // recalculate the result
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "-") {
    result = num1 - num2;
  } else if (operator === "*") {
    result = num1 * num2;
  } else if (operator === "/") {
    result = num1 / num2;
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