import React from 'react';
// import './index.css';

export function List ( {children }) {
  return <ul className = "list-group">{children}</ul>
}

export function ListItem ({
  num1,
  num2,
  operator
}) {
  return (
    <li className = "list-group-item">
      <div className = "row">
        <p>{num1} {operator} {num2}</p>
      </div>
    </li>
  );
}