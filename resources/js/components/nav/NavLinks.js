import React, {Fragment} from 'react';
import NavLinksPortal from "../../containers/portal/NavLinksPortal";

export default function NavLinks(props) {

    const styles = {}
    return (
        <Fragment>
            <NavLinksPortal>
            <React.Fragment>
                <a data-toggle="dropdown" className="waves-effect"><i className="fas fa-user-circle"></i> <span className="hide-menu"> Cuentas </span></a>
                <ul className="dropdown-menu">
                    {props.accounts.map((el, key) => (
                        <li key={key}> <a className="dropdown-item" href="hiddenText" onClick={e=>props.fakeLink(e, "/cuenta/" + el.id)}>{el.business_name}</a> </li>
                    ))}
                    <li> <a className="dropdown-item" href="none" onClick={e=>props.fakeLink(e, "/cuentas")}>Listar Cuentas</a> </li>
                    <li><p type="button" className="dropdown-item" style={{cursor: "pointer"}} data-toggle="modal" data-target="#exampleModal">Crear Cuenta</p> </li>
                </ul>
            </React.Fragment>
            </NavLinksPortal>

            <NavLinksPortal>
                <React.Fragment>
                    <a data-toggle="dropdown" className="waves-effect"><i className="fas fa-users"></i> <span className="hide-menu"> Usuarios</span></a>
                    <ul className="dropdown-menu">
                        <li> <a className="dropdown-item" href="none" onClick={e=>props.fakeLink(e, "/usuarios")}>Listar Usuarios</a> </li>
                        <li> <a className="dropdown-item" href="none" onClick={e=>props.fakeLink(e, "/usuarios/create")}>Crear Usuario</a> </li>
                    </ul>
                </React.Fragment>
            </NavLinksPortal>

            <NavLinksPortal>
                <React.Fragment>
                    <a data-toggle="dropdown" className="waves-effect"><i className="fas fa-poll-h"></i> <span className="hide-menu">Reportes</span></a>
                    <ul className="dropdown-menu">
                        <li><a href="none" onClick={e=>props.fakeLink(e, "/reporte/mensual")} className="dropdown-item waves-effect">Reporte Mensual</a> </li>
                    </ul>
                </React.Fragment>
            </NavLinksPortal>
            
        </Fragment>
    )
}