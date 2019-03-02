import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Switch, Route, NavLink} from "react-router-dom";
import Reporte from "../components/reporte/Reporte";
import Header from "../components/nav/Header";
import Users from "../components/users/Users";
import AccountCreate from "../components/accounts/AccountCreate";
import ModalPortal from "./ModalPortal"
import UsersCreate from "../components/users/UsersCreate";
import Account from "./Account";

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
        
{/* <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
   <soapenv:Header/>
   <soapenv:Body>
      <tem:Consulta>
         <!--Optional:-->
         <tem:expresionImpresa><![CDATA[?re=RTE170314D6A&rr=CAL150601450&tt=9048.00&id=3C07DBA3-4A58-403E-81B3-B1C85D26FDFA]]></tem:expresionImpresa>
      </tem:Consulta>
   </soapenv:Body>
</soapenv:Envelope> */}
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

