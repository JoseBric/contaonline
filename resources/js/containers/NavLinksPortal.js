import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let linksContainer = document.getElementById('nav-links')
export default class NavLinksPortal extends Component {
    constructor() {
        super()
        this.el = document.createElement("li")
        this.el.className = "dropdown"
    }
    componentDidMount () {
        linksContainer.appendChild(this.el)
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}