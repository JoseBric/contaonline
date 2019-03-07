import React, { PureComponent } from 'react'
import SimpleTable from "../../components/table/SimpleTable";

export default class AccountStates extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getStatus()
    }

    actionHandeler(action, id) {
        switch(action) {
            case "action-watch":
            return (
                <a target="_blank" href={`/account_states/${id}`}>
                    <i className="fas fa-eye"></i>
                </a>
            )
            case "action-download":
            return (
                <a href={"/account_states/download/" + id}>
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
                <SimpleTable color={tableColor} action={this.actionHandeler.bind(this)} head={tableHead} body={tableBody} display={displayedFields} title={tableTitle}/>
            </div>
            </div>
        )
    }
}
