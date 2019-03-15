import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types'
import {HashRouter, Switch, Route, NavLink} from "react-router-dom";
import Reporte from "../components/reporte/Reporte";
import Header from "../components/nav/Header";
import Users from "../components/user/Users";
import AccountCreate from "../components/account/AccountCreate";
import ModalPortal from "./portal/ModalPortal"
import UsersCreate from "../components/user/UsersCreate";
import Account from "./account/Account";

import { connect } from "react-redux"

import { getAccounts, createAccount } from "../actions/accountActions"
import { changeAccCreate } from "../actions/modalAction"
import { getUsers } from "../actions/userActions"

import swal from "sweetalert"

const tableHead = ["Nombre", "Apellido", "E-Mail", "Teléfono", "Rol"]
const displayedFields = ["name", "lastname", "email", "phone", "role"]

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderer: 0
        }
    }

    componentDidMount() {
        this.props.getAccounts()
        this.props.getUsers()
    }

    onClickAccCreate(e) {
        const values = $(this.accCreateForm.querySelector("form")).serializeArray()
        let data = {}
        values.forEach((val) => {
            data[val.name] = val.value
        })
        if(data.razonSocial == "" || data.type == "" || data.rfc == "") {
            swal({text: "Tienes que llenar los campos de razón social y rfc"})
            return false
        }
        this.props.createAccount(data)

        $("#exampleModal").modal("hide")
        $('body').removeClass('modal-open');
        $('.modal-backdrop').remove();
        this.setState({
            renderer: this.state.renderer + 1
        })
    }

    render() {
        return (
            <Fragment>
                <ModalPortal>
                    <AccountCreate key={this.state.renderer} setAccCreateModal={el=>this.AccCreateModal=el} setAccCreateForm={el => this.accCreateForm = el} onClick={this.onClickAccCreate.bind(this)}/>
                </ModalPortal>
                <HashRouter>
                    <Fragment>
                        <Route path="/" render={props => <Header accounts={this.props.accounts} {...props} /> }/>
                        <Switch>
                            <Route path="/" exact render={() => <Reporte/> }/>

                            <Route path="/usuarios" exact render={() => <Users tableColor="danger-table" tableHead={tableHead} tableBody={this.state.users} displayedFields={displayedFields} tableTitle="Lista de Usuarios" /> }/>
                            <Route path="/usuarios/create" render={() => <UsersCreate /> }/>

                            <Route path="/cuenta/:id" component={Account}/>
                        </Switch>
                    </Fragment>
                </HashRouter>
            </Fragment>
        )
    }
}
function mapStateToProps(state) {
    return {
        accounts: state.accounts,
        showAccCreate: state.modal.accCreate.show,
        account_id: state.currentDisplay.account_id
    }
}

App.propTypes = {
    accounts: PropTypes.array,
}

export default connect(mapStateToProps, {getAccounts, getUsers, createAccount, changeAccCreate})(App)