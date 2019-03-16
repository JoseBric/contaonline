import React from "react"
import {NavLink} from "react-router-dom"
import "./accounts.css"

export default function AccountWrapper(props) {
    const years = {}
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    props.dateRange.forEach(date => {
        const year = date.split("-")[0]
        const month = date.split("-")[1]
        if(!years[year]) years[year] = []
        years[year].push(month)
    })

    let options = []
    for(let key in years) {
        options.push(<optgroup key={key} label={key}>
            {years[key].map((month, index)=>(
                <option value={`${key}-${month}`} key={index}>{months[month-1]} {key}</option>
            ))}
        </optgroup>)
    }
    let uploadButton = props.current_tab || 
    <span>
        Subir Facturas <input onChange={props.uploadXml} name="xml_input" type="file" accept=".xml" multiple/>

    </span>
    switch(props.current_tab) {
        case "income":
        case "expenses":
        uploadButton =
            <span>
                Subir Facturas <input onChange={props.uploadXml} name="xml_input" type="file" accept=".xml" multiple/>
            </span>
        break;
        case "accountStates":
        uploadButton =
            <span>
                Subir Estados de Cuenta <input onChange={props.uploadAccState} name="account_state_input" type="file" accept=".xml,.pdv,.xls,.xlsb,.xlsm,.xlsx,.jpeg,.gif,.png,.jpg,.csv,.docx,.doxm,.dotx,.dotm,.docb,.pdf" multiple/>
            </span>
        break;
        case "documents":
        uploadButton =
            <span>
                Subir Documentos <input onChange={props.uploadDoc} name="document_input" type="file" accept="*" multiple/>
            </span>
        break;
        case "notes":
        uploadButton =
        <span data-toggle="modal" data-target="#editorModal" data-whatever="@getbootstrap">Crear Nota</span>
        break;
    }

    return (
        <div className="container-fluid">

        <div className="row bg-title">
            <div className="col-md-5">
                <h4 className="page-title"> Facturas </h4> 
            </div>
            <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
            <form ref={props.setRef} id="form" action="/invoices" method="post" files="true" encType="multipart/form-data">
            <div className="custom-file">
            <span className="btn btn-info d-lg-block m-l-15 btn-file">
                {uploadButton}
            </span>
            </div>
            </form>
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 mb-2">
                <div className="col-md-8">
                    <select onChange={props.setCurrentTab} ref={props.setRefTab} name="" id="" className="form-control js--animations">
                        <option value="income">Ingresos</option>
                        <option value="expenses">Egresos</option>
                        <option value="accountStates">Estados de Cuenta</option>
                        <option value="documents">Documentos</option>
                        <option value="notes">Notas</option>
                    </select>
                </div>
                <div className="col-md-4 ">
                    <select onChange={props.setCurrentDate} ref={props.setRefSelect} name="" id="" className="form-control js--animations">
                        {options}
                    </select>
                </div>
            </div>
            <div className="col-md-12">
                {props.children}
            </div>
        </div>
        </div>
    )
}