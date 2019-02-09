import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import Dashboard from "./Dashboard";
import Reporte from "./Reporte";
import Header from "./Header";

export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
            <React.Fragment>
                <Route path="/" render={props => <Header {...props} /> }/>
            <Switch>
                <Route path="/" exact render={() => <Dashboard />}/>
                <Route path="/reporte" render={() => <Reporte/> }/>
            </Switch>
            </React.Fragment>
            </BrowserRouter>
        );
    }
}

    ReactDOM.render(<App />, document.getElementById('app'));

