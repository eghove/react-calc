
import React from 'react';
import './index.css';

function Header() {
  return (
    <div className="jumbotron">
      <h1 className="display-5">
        Welcome to the Simple MERN Calculator!
      </h1>
      <p className="lead">
        Use this tool for basic arithmetic functions (two numbers and one operator). The most recent 10 calculations performed are displayed in the "History".
      </p>
      <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">About</button>

      <div className="row">
        <div className="col-md-6">
          <div className="collapse multi-collapse" id="multiCollapseExample3">
            <div className="card card-body">
              <h5>About</h5>
              <p>Version 1.0.0 of this Simple MERN Calculator was released by Eric Hove in June 2019.</p>
              <p>The GitHub repository for this project may be found <a href="https://github.com/eghove/react-calc" target="_blank" rel="noopener noreferrer">here.</a></p>
              <p>You may learn more about Eric Hove by visiting <a href="https://eghove.github.io/" target="_blank" rel="noopener noreferrer">here.</a></p>
              <p>Please note: Calculator does not perform operations using negative numbers and does not allow prior result to be used in future arithmetic operations.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Header;