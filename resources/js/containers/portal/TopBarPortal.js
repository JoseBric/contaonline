import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let contentTopBar = document.getElementById('account-name')
export default class NavLinksPortal extends Component {
    constructor() {
        super()
        this.el = document.createElement("span")
    }
    componentDidMount () {
        contentTopBar.appendChild(this.el)
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}