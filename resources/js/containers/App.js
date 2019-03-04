import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, NavLink} from "react-router-dom";
import Reporte from "../components/reporte/Reporte";
import Header from "../components/nav/Header";
import Users from "../components/user/Users";
import AccountCreate from "../components/account/AccountCreate";
import ModalPortal from "./portal/ModalPortal"
import UsersCreate from "../components/user/UsersCreate";
import Account from "./account/Account";

const tableHead = ["Nombre", "Apellido", "E-Mail", "Teléfono", "Rol"]
const displayedFields = ["name", "lastname", "email", "phone", "role"]

export default class App extends Component {
    constructor() {
        super()
        this.state = {
            users: [],
            accounts: [],
        }
        this.getAccounts.bind(this)
    }
    componentDidMount() {
        axios.get("/usuarios/all")
            .then(json=>this.setState({
                users: json.data
            }))
        axios.get("/cuenta/all")
        .then(json=>this.setState({
            accounts: json.data
        }))
    }

    getAccounts() {
        const _this = this
        axios.get("/cuenta/all")
        .then(json=>_this.setState({
            accounts: json.data
        }))
    }
    
    render() {
        return (
            <Fragment>
                <ModalPortal>
                    <AccountCreate getAccounts={this.getAccounts.bind(this)}/>
                </ModalPortal>
                <HashRouter>
                <React.Fragment>
                    <Route path="/" render={props => <Header accounts={this.state.accounts} {...props} /> }/>
                <Switch>
                    <Route path="/" exact render={() => <Reporte/> }/>

                    <Route path="/usuarios" exact render={() => <Users tableColor="danger-table" tableHead={tableHead} tableBody={this.state.users} displayedFields={displayedFields} tableTitle="Lista de Usuarios" /> }/>
                    <Route path="/usuarios/create" render={() => <UsersCreate /> }/>

                    <Route path="/cuenta/:id" component={Account}/>
                </Switch>
                </React.Fragment>
                </HashRouter>
            </Fragment>            
        );
    }
}

    ReactDOM.render(<App />, document.getElementById('app'));

