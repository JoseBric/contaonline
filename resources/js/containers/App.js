import React, { PureComponent as Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route, NavLink} from "react-router-dom";
import Reporte from "../components/reporte/Reporte";
import Header from "../components/nav/Header";
import Users from "../components/users/Users";
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
        
    render() {
        return (
            <BrowserRouter>
            <React.Fragment>
                <Route path="/" render={props => <Header accounts={this.state.accounts} {...props} /> }/>
            <Switch>
                <Route path="/" exact render={() => <Reporte/> }/>

                <Route path="/usuarios" exact render={() => <Users tableColor="danger-table" tableHead={tableHead} tableBody={this.state.users} displayedFields={displayedFields} tableTitle="Lista de Usuarios" /> }/>
                <Route path="/usuarios/create" render={() => <UsersCreate /> }/>

                <Route path="/cuenta/:id" render={() => <Account/> }/>
            </Switch>
            </React.Fragment>
            </BrowserRouter>
        );
    }
}

    ReactDOM.render(<App />, document.getElementById('app'));

