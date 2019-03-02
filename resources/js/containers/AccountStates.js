import React, { Component } from 'react'
import ColorTable from "../components/tables/ColorTable";

export default class AccountStates extends Component {
    constructor(props) {
        super(props)
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data != this.props.data
    }

    componentDidMount() {
        this.props.getStatus()
    }

    actionHandeler(action, id) {
        switch(action) {
            case "action-watch":
            break;
            case "action-download":
            return (
                <a href={"/account_states/" + id}>
                    <i className="fas fa-cloud-download-alt"></i>
                </a>
            )
        }
    }

    render() {
        const displayedFields = ["name", "action-watch", "action-download"]
        const tableHead = ["Nombre", "Ver", "Descargar"];
        const tableBody = this.props.data
        const tableColor = "inverse-table"
        const tableTitle = "Estados de Cuenta"
        return (
            <div className="row">
            <div className="col-sm-12">
                <ColorTable color={tableColor} action={this.actionHandeler.bind(this)} head={tableHead} body={tableBody} display={displayedFields} title={tableTitle}/>
            </div>
            </div>
        )
    }
}