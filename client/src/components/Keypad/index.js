import React, { Component } from 'react';

class KeyPad extends Component {

  render() {
    return (
      <div className="keypad">
        <div className="row">
          <div className="col-md-12">
            <button className = "btn-block" name="Clear" onClick={e => this.props.onClick(e.target.name)}>CLEAR</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <button className = "btn-block" name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <button className = "btn-block" name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="-" onClick={e => this.props.onClick(e.target.name)}>-</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <button className = "btn-block" name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="*" onClick={e => this.props.onClick(e.target.name)}>*</button>
          </div>
        </div>

        <div className="row">
          <div className="col-md-3">
            <button className = "btn-block" name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
          </div>
          <div className="col-md-3">
            <button className = "btn-block" name="/" onClick={e => this.props.onClick(e.target.name)}>/</button>
          </div>
        </div>

      </div>



      //   <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button>
      //   <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button>
      //   <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button>
      //   <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button><br />


      //   <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button>
      //   <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button>
      //   <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button>
      //   <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button><br />

      //   <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button>
      //   <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button>
      //   <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button>
      //   <button name="*" onClick={e => this.props.onClick(e.target.name)}>x</button><br />


      //   <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button>
      //   <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button>
      //   <button name="=" onClick={e => this.props.onClick(e.target.name)}>=</button>
      //   <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button><br />
      // </div>
    );
  }
}


export default KeyPad;