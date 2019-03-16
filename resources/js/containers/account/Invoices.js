import React, {Fragment} from "react"
import {connect} from "react-redux"
import {getRawInvoice, changeInvState, deleteInvoice} from "../../actions/accountDataActions"
import MarginTable from "../../components/table/MarginTable"
import AccountWrapper from "../../components/account/AccountWrapper";
import SimpleModal from "../../components/modals/SimpleModal";
import swal from "sweetalert";

class Invoices extends React.PureComponent {
    constructor(props) {
        super(props)
        props.income
        this.getStatus = this.props.getStatus
    }
    
    componentDidMount() {
        this.getStatus()
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    actionHandeler(action, id) {
        switch(action) {
            case "action-watch":
            return (
                <span style={{width: "100%", height: "100%"}} onClick={()=>this.props.getRawInvoice(id)} data-toggle="modal" data-target="#simpleModal" data-whatever="@getbootstrap">
                    <i className="fas fa-eye"></i>
                </span>
            )
            case "action-download":
            return (
                <span>
                    <a href={"/invoices/" + id}>
                        <i className="fas fa-cloud-download-alt"></i>
                    </a>
                </span>
            )
            case "action-delete":
            return (
                <span onClick={()=>{
                    swal({
                        text: "¿Quieres eliminar la factura?",
                        icon: "warning",
                        buttons: {
                            cancel: {
                                text: "Cerrar",
                                value: false,
                                visible: true,
                                closeModal: true,
                            },
                            confirm: {
                                text: "Ok",
                                value: true,
                                visible: true,
                                closeModal: true,
                            }
                        }
                    }).then(res=>{
                        if(res) this.props.deleteInvoice(id)
                    })
                    }}>
                    <i className="fas fa-trash-alt"></i>
                </span>
            )

            case "action-estado":
                this.props.changeInvState(id)
            break
        }
    }

    render() {
        this.displayedFields = ["fecha"/*day*/, this.props.income ? "nombre_receptor" : "nombre_emisor","subtotal", "impuestos", "total", "action-watch", "action-delete", "action-download" ,"estado"]
        this.tableHead = ["Día"/*day*/, this.props.income ? "Receptor" : "Emisor", "Subtotal", "IVA", "Total", "Ver", "Eliminar", "Descargar","Estado"];
        return (
            <React.Fragment>
                <SimpleModal large title="XML" content={this.props.modalData}/>
                <MarginTable action={this.actionHandeler.bind(this)} head={this.tableHead} body={this.props.invoices} display={this.displayedFields} date={this.props.current_date} setRef={el => this.selected = el} commas={this.numberWithCommas} income={this.props.income}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        modalData: state.modal.dataTable.rawFile,
    }
}

export default connect(mapStateToProps, {getRawInvoice, changeInvState, deleteInvoice})(Invoices)