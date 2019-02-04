import React from "react"
import { BrowserRouter, NavLink } from "react-router-dom"

export default function NavLinks() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <li className="nav-item"> <NavLink to="/"><i className="far fa-chart-bar"></i> <span className="hide-menu">Dashboard</span></NavLink></li>
                <li className="nav-item"> <NavLink to="/reporte"><i className="far fa-file-alt"></i> <span className="hide-menu">Reporte</span></NavLink></li>
            </React.Fragment>
        </BrowserRouter>
    )
}