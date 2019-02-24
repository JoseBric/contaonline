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

    return (
        <div className="container-fluid">

        <div className="row bg-title">
            <div className="col-md-5">
                <h4 className="page-title"> Facturas </h4> 
            </div>
            <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
            <NavLink className="btn btn-info d-none d-lg-block m-l-15" to="/AñadirEstadoBancario">
                Añadir Estados Bancarios
            </NavLink>
            <NavLink className="btn btn-info d-lg-block m-l-15" to="/reportes">
                Reportes
            </NavLink>
            <form ref={props.setRef} id="form" action="/invoices" method="post" files="true" encType="multipart/form-data">
            <div className="custom-file">
                <span className="btn btn-info d-lg-block m-l-15 btn-file">
                    Subir Facturas <input onChange={props.onSubmit} name="xml_input" type="file" accept=".xml" multiple/>
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