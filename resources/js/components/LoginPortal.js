import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const loginLinkContainer = document.getElementById('login')
export default class LoginPortal extends Component {
    constructor() {
        super()
        this.el = document.createElement("div")
    }
    componentDidMount () {
        loginLinkContainer.appendChild(this.el)
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}