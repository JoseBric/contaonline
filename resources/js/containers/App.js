import React, { Component, Fragment } from 'react';
import {HashRouter, Switch, Route, NavLink} from "react-router-dom";
import Reporte from "../components/reporte/Reporte";
import Header from "../components/nav/Header";
import Users from "../components/user/Users";
import AccountCreate from "../components/account/AccountCreate";
import ModalPortal from "./portal/ModalPortal"
import UsersCreate from "../components/user/UsersCreate";
import Account from "./account/Account";

import { connect } from "react-redux"

import { getAccounts } from "../actions/accountActions"
import { getUsers } from "../actions/userActions"

const tableHead = ["Nombre", "Apellido", "E-Mail", "Teléfono", "Rol"]
const displayedFields = ["name", "lastname", "email", "phone", "role"]

class App extends Component {
    componentDidMount() {
        this.props.getAccounts()
        this.props.getUsers()
    }
    render() {
        return (
            <Fragment>
                {/* <ModalPortal>
                    <AccountCreate getAccounts={this.getAccounts.bind(this)}/>
                </ModalPortal>
                <HashRouter>
                <Fragment>
                    <Route path="/" render={props => <Header accounts={this.state.accounts} {...props} /> }/>
                <Switch>
                    <Route path="/" exact render={() => <Reporte/> }/>

                    <Route path="/usuarios" exact render={() => <Users tableColor="danger-table" tableHead={tableHead} tableBody={this.state.users} displayedFields={displayedFields} tableTitle="Lista de Usuarios" /> }/>
                    <Route path="/usuarios/create" render={() => <UsersCreate /> }/>

                    <Route path="/cuenta/:id" component={Account}/>
                </Switch>
                </Fragment>
                </HashRouter> */}
            </Fragment>
        )
    }
}

export default connect(null, {getAccounts, getUsers})(App)