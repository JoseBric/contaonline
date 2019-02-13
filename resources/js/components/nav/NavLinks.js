import React, {Fragment} from 'react';
import NavLinksPortal from "../../containers/NavLinksPortal";

export default function NavLinks(props) {
    return (
        <Fragment>
            <NavLinksPortal>
            <React.Fragment>
                <a data-toggle="dropdown" className="waves-effect"><i className="fas fa-user-circle"></i> <span className="hide-menu"> Cuentas <span className="label label-rouded label-custom pull-right">4</span></span></a>
                <ul className="dropdown-menu">
                    {props.accounts.map((el, key) => (
                        <li key={key}> <a className="dropdown-item" href="hiddenText" onClick={e=>props.fakeLink(e, "/cuenta/" + el.id)}>{el.business_name}</a> </li>
                    ))}
                </ul>
            </React.Fragment>
            </NavLinksPortal>

            <NavLinksPortal>
                <React.Fragment>
                    <a data-toggle="dropdown" className="waves-effect"><i className="fas fa-users"></i> <span className="hide-menu"> Usuarios <span className="label label-rouded label-custom pull-right">4</span></span></a>
                    <ul className="dropdown-menu">
                        <li> <a className="dropdown-item" href="none" onClick={e=>props.fakeLink(e, "/usuarios")}>Listar Usuarios</a> </li>
                        <li> <a className="dropdown-item" href="none" onClick={e=>props.fakeLink(e, "/usuarios/create")}>Añadir Usuario</a> </li>
                    </ul>
                </React.Fragment>
            </NavLinksPortal>

            <NavLinksPortal>
                <React.Fragment>
                    <a onClick={e=>props.fakeLink(e, "/reportes")} className="waves-effect"><i className="fas fa-poll-h"></i> <span className="hide-menu"> Reporte</span></a>
                </React.Fragment>
            </NavLinksPortal>
        </Fragment>
    )
}