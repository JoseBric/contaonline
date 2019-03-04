import React, { Component } from 'react'
import ColorTable from "../../components/table/ColorTable";

export default class Documents extends Component {
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
            <a href={"/documents/" + id}>
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
              <ColorTable color={tableColor} action={this.actionHandeler.bind(this)} head={tableHead} body={tableBody} display={displayedFields} title={tableTitle}/>
          </div>
        </div>
    )
  }
}
