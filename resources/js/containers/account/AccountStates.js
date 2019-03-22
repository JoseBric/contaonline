import React, { PureComponent } from 'react'
import SimpleTable from "../../components/table/SimpleTable";
import ModalPortal from '../portal/ModalPortal';
import SimpleModal from '../../components/modals/SimpleModal'

export default class AccountStates extends PureComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.getStatus()
        const _this = this
        function askConfirmation() {
            return new Promise(res => {
                swal({
                    text: "¿Quieres modificar el estado de cuenta?",
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
                }).then(ok=>{
                    if(ok) res()
                })
            }) 
        }

        function upload(e) {
            askConfirmation().then(()=>{
                e.preventDefault()
                $(this).find("span").removeAttr("contenteditable", true)
                $(this).find("span").removeClass("bg-warning").css("padding", "")
                
                const id = $(this).attr("row_id")
                const fieldName = $(this).attr("field_name")
                const fieldValue = $(this).find("span").text()

        
                _this.props.updateAccState(fieldName, fieldValue, id)
            })
        }
        $(document).on("click", ".data-row", function(e) {
            e.preventDefault()
            $(this).find("span").attr("contenteditable", true)
            $(this).find("span").addClass("bg-warning").css("padding", "5px")
            $(this).find("span").focus()
            $(this).keypress(function(e){
                if(event.keyCode == 13){
                    upload(e)
                }
            })
        })
        
        $(document).on("focusout", ".data-row", upload)
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
                <a href={"/download/account_states/" + id}>
                    <i className="fas fa-cloud-download-alt"></i>
                </a>
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
                        if(res) this.props.deleteObj(id)
                    })
                    }}>
                    <i className="fas fa-trash-alt"></i>
                </span>
            )
        }
    }

    render() {
        const displayedFields = ["name", "entrada_interna", "entrada_extranjera", "entrada_total", "salida", "action-watch", "action-delete" ,"action-download"]
        const tableHead = ["Nombre", "Entrada Interna", "Entrada Extranjera", "Total", "Salida", "Ver", "Eliminar", "Descargar"];
        const tableBody = this.props.data
        const tableColor = "inverse-table"
        const tableTitle = "Estados de Cuenta"
        const form = 
        <form id="upload_acc_state_form">
            <div className="form-group">
                <label htmlFor="name">Nombre</label>
                <input  className="form-control" type="text" name="name" id="name"/>
            </div>
            <div className="form-group">
                <label htmlFor="entrada_interna">Entrada Interna</label>
                <input className="form-control" type="number" name="entrada_interna" id="entrada_interna"/>
            </div>
            <div className="form-group">
                <label htmlFor="entrada_extranjera">Entrada Extranjera</label>
                <input className="form-control" type="number" name="entrada_extranjera" id="entrada_extranjera"/>
            </div>
            <div className="form-group">
                <label htmlFor="salida">Salida</label>
                <input className="form-control" type="number" name="salida" id="salida"/>
            </div>
            <div className="form-group">
                <label htmlFor="account_state_input">Subir Archivo</label>
                <input className="form-control-file" id="account_state_input" name="account_state_input" type="file" accept=".xml,.pdv,.xls,.xlsb,.xlsm,.xlsx,.jpeg,.gif,.png,.jpg,.csv,.docx,.doxm,.dotx,.dotm,.docb,.pdf" multiple/>
            </div>
        </form>
        const button = 
        <button className="btn btn-info" onClick={this.props.uploadAccState} >Crear</button>
        return (
            <div className="row">
            <div className="col-sm-12">
                <ModalPortal>
                    <SimpleModal editable uuid="create_acc_state" title={button} content={form} large={true}/>
                </ModalPortal>
                <SimpleTable color={tableColor} action={this.actionHandeler.bind(this)} head={tableHead} body={tableBody} display={displayedFields} title={tableTitle}/>
            </div>
            </div>
        )
    }
}
