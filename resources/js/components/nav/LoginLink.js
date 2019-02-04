import React from "react"
import { BrowserRouter, NavLink } from "react-router-dom"

export default function LoginLink() {
    return (
        <BrowserRouter>
            <NavLink className="nav-login" to="/login"><i className="fas fa-sign-in-alt"></i> <span className="hide-menu">Login</span></NavLink>
        </BrowserRouter>
    )
}