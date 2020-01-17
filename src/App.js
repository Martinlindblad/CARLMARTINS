import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      post: false,
    }
  }

  didRender() {
    this.setState({ post: true })
  }

  componentDidMount() {
    this.didRender()
  }
  render() {
    return (
      <div className="container">
        <header>
          <div className="logo">
            <img src="../media/logo.png" alt="logo"></img>
          </div>
        </header>
      </div>
    )
  }
}

export default App
