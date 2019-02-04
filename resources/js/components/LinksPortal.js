import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let linksContainer = document.getElementById('links')
export default class LinksPortal extends Component {
    constructor() {
        super()
        this.el = document.createElement("div")
    }
    componentDidMount () {
        linksContainer.appendChild(this.el)
    }
    componentWillUnmount () {
        linksContainer.removeChild(this.el)
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}