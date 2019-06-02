import React, { Component } from 'react';
import './index.css';

class Results extends Component {


  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <div className="row">
          <div className="col-md-12">
            <p>{result}</p>
          </div>
        </div>
      </div>
    );
  }
}


export default Results;