import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let loginLinkContainer = document.getElementById('login')
export default class LoginPortal extends Component {
    constructor() {
        super()
        this.el = document.createElement("div")
    }
    componentDidMount () {
        loginLinkContainer.appendChild(this.el)
    }
    componentWillUnmount () {
        loginLinkContainer.removeChild(this.el)
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}