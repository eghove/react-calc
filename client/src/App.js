import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import History from './components/History';
import { List, ListItem } from "./components/ListItem";
import API from "./utils/API";


class App extends Component {

  state = {
    // pastCalcs: [
    //   {
    //     id: 1,
    //     num1: 5,
    //     num2: 2.2,
    //     operator: "+"
    //   },

    //   {
    //     id: 2,
    //     num1: 5,
    //     num2: 1,
    //     operator: "-"
    //   },

    //   {
    //     id: 3,
    //     num1: 5,
    //     num2: 0.1,
    //     operator: "*"
    //   },

    //   {
    //     id: 4,
    //     num1: 5,
    //     num2: 3,
    //     operator: "/"
    //   },
    // ]
    pastCalcs: []
  }
  
getData =() => {
 API.getAll()
    .then((res) => {
      this.setState({
        pastCalcs: res.data
      })
    })
  }


  componentDidMount() {
    this.getData();
   
  }

  render() {
    return (
      <div className="container">
        <Header />
        <History />
        <List>
          {this.state.pastCalcs.map(calcs => {
            return (
              <ListItem
                key={calcs.id}
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