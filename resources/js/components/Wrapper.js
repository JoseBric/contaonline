import React from "react"
import LoginPortal from "./LoginPortal";
import LinksPortal from "./LinksPortal";

export default function Wrapper(props) {
    return (
        <React.Fragment>
            <LoginPortal>
                <li className="nav-item"> <p onClick={function(e){props.history.push("/login")}} to="/"><i className="fas fa-sign-in-alt"></i> <span className="hide-menu">Login</span></p></li>
            </LoginPortal>
            <LinksPortal>
            <li className="nav-item"> <p onClick={function(e){props.history.push("/")}} to="/"><i className="far fa-chart-bar"></i> <span className="hide-menu">Dashboard</span></p></li>
                <li className="nav-item"> <p onClick={function(e){props.history.push("/reporte")}} to="/reporte"><i className="far fa-file-alt"></i> <span className="hide-menu">Reporte</span></p></li>
            </LinksPortal>
            <React.Fragment>
                {React.Children.map(props.children, (child) => {
                    return React.cloneElement(child, props)
                })}
            </React.Fragment>
        </React.Fragment>
    )
}