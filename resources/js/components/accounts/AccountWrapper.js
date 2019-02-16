import React from "react"
import {NavLink} from "react-router-dom"
import "./accounts.css"

export default function AccountWrapper(props) {
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
            {props.children}
        </div>
        </div>
    )
}