import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import { Provider } from "react-redux"
import store from "./store"

import App from './containers/App'

export default class AppWrapper extends Component {
  render() {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    )
  }
}

ReactDOM.render(<AppWrapper />, document.getElementById('app'));
