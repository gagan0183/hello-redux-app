import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux';
import reducer from './reducers';

const store = createStore(reducer, { title: 'React' });
class App extends Component {
  render() {
    return <HelloWorld tech={store.getState().title } />;
  }
}

export default App;
