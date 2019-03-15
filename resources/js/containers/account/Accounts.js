import React, { Component } from 'react'
import SimpleTable from '../../components/table/SimpleTable'

export default class Accounts extends Component {
    actionHandeler(action, id) {

    }
  render() {
    const tableHead = ["RFC", "Razón Social", "Tipo", "Calle", "Número Externo", "Número Interno", "Código Postal", "Colonia", "Ciudad", "Estado", "País"] 
    const displayedFields = ["rfc", "business_name", "type", "nested-addresses-street", "nested-addresses-ext_num", "nested-addresses-ext_int" ,"nested-addresses-zip_code", "nested-addresses-col", "nested-addresses-city", "nested-addresses-state", "nested-addresses-country"]
    return (
        <SimpleTable 
        color={"inverse-table"} 
        action={this.actionHandeler.bind(this)} 
        head={tableHead} 
        body={this.props.accounts} 
        display={displayedFields} 
        title={"Lista de cuentas"}/>
    )
  }
}
