import React, { Component } from 'react'
import SimpleTable from "../../components/table/SimpleTable";

export default class Documents extends Component {
  componentDidMount() {
      this.props.getStatus()
  }

  shouldComponentUpdate() {
    return true
  }

  actionHandeler(action, id) {
    switch(action) {
      case "action-watch":
        return (
          <a target="_blank" href={`/documents/${id}`}>
            <i className="fas fa-eye"></i>
          </a> 
        )
        case "action-download":
        return (
            <a href={"/download/documents/" + id}>
                <i className="fas fa-cloud-download-alt"></i>
            </a>
        )
        case "action-delete":
        return (
            <span onClick={()=>this.props.deleteObj(id)}>
                <i className="fas fa-trash-alt"></i>
            </span>
        )
    }
  }

  render() {
    const displayedFields = ["name", "action-watch", "action-delete" , "action-download"]
    const tableHead = ["Nombre", "Ver", "Eliminar", "Descargar"];
    const tableBody = this.props.data
    const tableColor = "inverse-table"
    const tableTitle = "Documentos"
    return (
        <div className="row">
          <div className="col-sm-12">
              <SimpleTable color={tableColor} action={this.actionHandeler.bind(this)} head={tableHead} body={tableBody} display={displayedFields} title={tableTitle}/>
          </div>
        </div>
    )
  }
}
