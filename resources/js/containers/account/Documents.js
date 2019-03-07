import React, { Component } from 'react'
import SimpleTable from "../../components/table/SimpleTable";

export default class Documents extends Component {
  componentDidMount() {
      this.props.getStatus()
      console.log("yes")
  }

  componentDidUpdate() {
    console.log("updated")
  }

  shouldComponentUpdate() {
    console.log("props")
    return true
  }

  actionHandeler(action, id) {
    switch(action) {
        case "action-watch":
        break;
        case "action-download":
        return (
            <a href={"/documents/download/" + id}>
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
