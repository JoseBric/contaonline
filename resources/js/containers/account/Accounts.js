import React, { Component, Fragment } from 'react'
import SimpleTable from '../../components/table/SimpleTable'
import SimpleModal from '../../components/modals/SimpleModal';

export default class Accounts extends Component {
  componentDidMount() {


    const _this = this
    $(document).on("click", ".data-row", function(e) {
      e.preventDefault()
      $(this).find("span").attr("contenteditable", true)
      $(this).find("span").addClass("bg-warning").css("padding", "5px")
      $(this).find("span").focus()
    })
    
    $(document).on("focusout", ".data-row", function(e) {
      e.preventDefault()
      $(this).find("span").removeAttr("contenteditable", true)
      $(this).find("span").removeClass("bg-warning").css("padding", "")
      
      const id = $(this).attr("row_id")
      const fieldName = $(this).attr("field_name")
      const fieldValue = $(this).find("span").text()

      

      _this.props.updateAccountInfo(fieldName, fieldValue, id)
    })
  }
  actionHandeler(action, id) {

  }
  render() {
    const tableHead = ["RFC", "Razón Social", "Tipo", "Calle", "Número Externo", "Número Interno", "Código Postal", "Colonia", "Ciudad", "Estado", "País"] 
    const displayedFields = ["rfc", "business_name", "type", "nested-addresses-street", "nested-addresses-ext_num", "nested-addresses-ext_int" ,"nested-addresses-zip_code", "nested-addresses-col", "nested-addresses-city", "nested-addresses-state", "nested-addresses-country"]
    return (
      <Fragment>
        <SimpleTable 
        color={"inverse-table"} 
        action={this.actionHandeler.bind(this)} 
        head={tableHead} 
        body={this.props.accounts} 
        display={displayedFields} 
        title={"Lista de cuentas"}/>
      </Fragment>
    )
  }
}
