import React, { Component } from 'react';
import logo from './logo.svg';
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
    result: "TEST"
  }

  // function that resets the calculator
  reset = () => {
    this.setState({
      result: 0
    })
  };



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

  onClick = (button) => {
    if (button==="Clear") {
      this.reset();
    }
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Results result={this.state.result} />
        <Keypad onClick = {this.onClick}/>
        <History />
        <List>
          {this.state.pastCalcs.map(calcs => {
            return (
              <ListItem
                key={calcs._id}
                num1={calcs.num1[0]}
                num2={calcs.num2[0]}
                operator={calcs.operator[0]}
              />
            )
          })}
        </List>

      </div>
    );
  }
}

export default App;