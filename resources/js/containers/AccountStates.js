import React, { Component } from 'react'
import ColorTable from "../components/tables/ColorTable";

export default class AccountStates extends Component {
    constructor(props) {
        super(props)
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.accountStates != this.props.accountStates
    }

    render() {
        const displayedFields = []
        const tableHead = ["Nombre", "Ver", "Descargar"];
        const tableBody = []
        const tableColor = "inverse-table"
        const tableTitle = "alert"
        return (
            <div className="row">
            <div className="col-sm-12">
                <ColorTable color={tableColor} head={tableHead} body={tableBody} display={displayedFields} title={tableTitle}/>
            </div>
            </div>
        )
    }
}
