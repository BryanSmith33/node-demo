import React, { Component } from 'react';
import './App.css';

// import axios. axios is promise based library used to get HTTP requests
import axios from 'axios'

class App extends Component {

  // set up so everytime our App component mounts, we run a get request to our animals. Without looking, what method will this axios request run on our server?
  componentDidMount() {
    axios.get('/api/animals').then((res) => {
      console.log(res.data);
    })
  }
  // ☝️ the answer to that question is our app.get('/api/animals', ac.getAll)
  // we could then use setState to set the res.data onto state so we can manipulat (use) it

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src='https://r.hswstatic.com/w_907/gif/nonhuman-animals-jobs-1.jpg' className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Animal Show</h1>
        </header>
      </div>
    );
  }
}

export default App;
