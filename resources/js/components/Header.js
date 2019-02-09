import React from "react"
import NavLinks from "./NavLinks";
import UserLinks from "./UserLinks";
import "./wrapper.css"

export default class Header extends React.Component
{
    linkActive(baseLink, checkLink) {
        const splitted = baseLink.split(" ")
        splitted.filter(el=>{
            return el != "disabled" && el != "active"
        })
        const state = (window.location.pathname == checkLink ? " active" : "")
        const finalLink = splitted.reduce((stack, e)=>{
            const link = " " + e
            return stack += link
        }) + state
        return finalLink
    }
    fakeLink(e, link) {
        e.preventDefault()
        this.props.history.push(link)
    }
    render() {
        return (
            <React.Fragment>
                <UserLinks {...this.props} linkActive={this.linkActive} fakeLink={this.fakeLink.bind(this)}/>
                <NavLinks {...this.props} linkActive={this.linkActive} fakeLink={this.fakeLink.bind(this)}/>
            </React.Fragment>
        )
    }
}