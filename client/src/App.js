import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import History from './components/History';
import { List, ListItem } from "./components/ListItem";
import Results from './components/Results'
import Keypad from './components/Keypad';
import API from "./utils/API";


class App extends Component {

  state = {
    pastCalcs: [],
    result: "TEST",
    num1: null,
    num2: null,
    operator: null
  }
  // function that posts data
  postData = (num1, num2, op) => {
    
    API.postData({
      num1: num1,
      num2: num2,
      operator: op
    })
  }

  // function that resets the calculator as a whole
  reset = () => {
    this.setState({
      result: null,
      operator: null,
      num1: null,
      num2: null
    })
  };

  // function that resets the calculator in part
  partialReset = () => {
    this.setState({
      operator: null,
      num1: null,
      num2: null
    })
  }


  // function that updates display
  updateDisplay = () => {
    // displaying the first number
    if (this.state.operator === null && this.state.num2 === null && this.state.num1 !== null) {
      this.setState({ result: this.state.num1 }, () => {
        // empty call back to make sure it all updates
      })
    }

    // displaying the first number with operator
    if (this.state.operator !== null && this.state.num2 === null && this.state.num1 !== null) {
      this.setState({ result: this.state.result + " " + this.state.operator + " " }, () => {
        // empty call back to make sure it all updates
      })
    }

    // displaying the first number with operator and now the second number
    if (this.state.operator !== null && this.state.num2 !== null && this.state.num1 !== null) {
      this.setState({ result: this.state.result + this.state.num2.substr(-1) }, () => {
        // empty call back to make sure it all updates
      })
    }
  }


  // function that validates numbers
  validateNumbers = () => {
    let temp1 = Number(this.state.num1);
    let temp2 = Number(this.state.num2);
    if (isNaN(temp1) || isNaN(temp2)) {
      alert("Invalid operation. Please clear calculator and start again.")
      return false;
    } else {
      return true;
    }
  }

  // function that parses the strings back into numbers and calculates
  calculate = () => {
    if (this.validateNumbers() === true) {
      // alert("Valid operation");
      let temp1 = Number(this.state.num1);
      let temp2 = Number(this.state.num2);
      let temp4 = this.state.operator;
      if (this.state.operator === "+") {
        let temp3 = temp1 + temp2;
        this.setState({ result: temp3 }, () => {
          this.postData(temp1, temp2, temp4);
        })
      }
      else if (this.state.operator === "-") {
        let temp3 = temp1 - temp2;
        this.setState({ result: temp3 }, () => {
          this.postData(temp1, temp2, temp4);
        })
      }
      else if (this.state.operator === "*") {
        let temp3 = temp1 * temp2;
        this.setState({ result: temp3 }, () => {
          this.postData(temp1, temp2, temp4);
        })
      }
      else if (this.state.operator === "/") {
        let temp3 = temp1 / temp2;
        this.setState({ result: temp3 }, () => {
          this.postData(temp1, temp2, temp4);
        })
      }
      else {
        alert("Something went wrong. Please clear calculator and start again");
      }

    } else return;

  }

  // function that assigns the operator
  assignOperator = (operator) => {
    this.setState({ operator: operator }, () => {
      // testing
      console.log(this.state.operator);
      this.updateDisplay();
    })
  }

  // function that assigns the first number
  assignNum1 = (number) => {
    // if there's nothing in num1, need to replace num1 with first digit or decimal
    if (this.state.num1 === null) {
      this.setState({ num1: number }, () => {
        console.log(this.state.num1)
        this.updateDisplay();
      })
    }
    // if there's already a value in num1, need to append the additional digit or decimal to it
    else {
      this.setState({ num1: this.state.num1 + number }, () => {
        console.log(this.state.num1);
        this.updateDisplay();
      })
    }
  }

  // function that assigns the second number
  assignNum2 = (number) => {
    // if there's nothing in num2, need to replace num2 with first digit or decimal
    if (this.state.num2 === null) {
      this.setState({ num2: number }, () => {
        console.log(this.state.num2)
        this.updateDisplay();
      })
    }
    // if there's already a value in num2, need to append the additional digit or decimal to it
    else {
      this.setState({ num2: this.state.num2 + number }, () => {
        console.log(this.state.num2)
        this.updateDisplay();
      })
    }
  }


  // function that fetches the data
  getData = () => {
    API.getTen()
      .then((res) => {
        this.setState({
          pastCalcs: res.data
        });
        console.log(this.state.pastCalcs);
      })
  }




  componentDidMount() {
    this.getData();
  }

  // on click operations for the calculator
  onClick = (button) => {

    // triggers the calculator reset
    if (button === "Clear") {
      this.reset();
    }

    // if an operator button is pressed
    if (button === "+" || button === "-" || button === "*" || button === "/") {
      this.assignOperator(button);
    }

    // if number or decimal is pressed
    if (button === "1" || button === "2" || button === "3" || button === "4" || button === "5" || button === "6" || button === "7" || button === "8" || button === "9" || button === "0" || button === ".") {
      // if operator is still null, we're on num1
      if (this.state.operator === null) {
        this.assignNum1(button)
      }
      // if an operator button has already been pressed
      else {
        this.assignNum2(button);
      }
    }

    // if equal button is pressed
    if (button === "=") {
      this.calculate();
      this.partialReset();
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Results result={this.state.result} />
        <Keypad onClick={this.onClick} />
        <History />
        <List>
          {this.state.pastCalcs.map(calcs => {
            return (
              <ListItem
                key={calcs._id}
                num1={calcs.num1}
                num2={calcs.num2}
                operator={calcs.operator}
              />
            )
          })}
        </List>

      </div>
    );
  }
}

export default App;