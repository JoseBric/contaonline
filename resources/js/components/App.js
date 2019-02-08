import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import Dashboard from "./Dashboard";
import Reporte from "./Reporte";
import Wrapper from "./Wrapper";

export default class App extends Component {
    
    render() {
        return (

            <BrowserRouter>
                <React.Fragment>
                <Switch>
                    <Route path="/" exact render={props => <Wrapper {...props}><Dashboard/></Wrapper>}/>
                    <Route path="/reporte" render={props => <Wrapper {...props}><Reporte/></Wrapper>}/>
                </Switch>
                </React.Fragment>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

