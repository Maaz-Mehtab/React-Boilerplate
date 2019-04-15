import React, { Component } from 'react';
import './App.css';
import Routers from './Router';
import { Provider } from 'react-redux';
import store from './store/Store';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Login: false }
  }
  componentWillMount() {
    
  }
  render() {
    return (
      <div id="App">
        <Provider store={store}>
          <Routers />
        </Provider>
      </div>
    );
  }
}

export default App;