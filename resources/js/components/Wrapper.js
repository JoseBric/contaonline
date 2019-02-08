import React from "react"
import LinksPortal from "./LinksPortal";

export default function Wrapper(props) {
    return (
        <React.Fragment>
            <LinksPortal>
                <li className={"nav-item" + (window.location.pathname == "/" ? " active" : " disabled") }> <p className="has-arrow waves-effect waves-dark" onClick={function(e){props.history.push("/")}} to="/"><i className="far fa-chart-bar"></i> <span className="hide-menu">Dashboard</span></p></li>
                <li className={"nav-item" + (window.location.pathname == "/reporte" ? " active" : " disabled") }> <p className="has-arrow waves-effect waves-dark" onClick={function(e){props.history.push("/reporte")}} to="/reporte"><i className="far fa-file-alt"></i> <span className="hide-menu">Reporte</span></p></li>
            </LinksPortal>
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </React.Fragment>
    )
}