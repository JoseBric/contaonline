import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let linksContainer = document.getElementById('user-links')
export default class UserLinksPortal extends Component {
    constructor() {
        super()
        this.el = document.createElement("li")
    }
    componentDidMount () {
        linksContainer.insertBefore(this.el, linksContainer.firstChild)
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}