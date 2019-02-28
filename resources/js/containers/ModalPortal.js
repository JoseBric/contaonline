import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let container = document.getElementById('modal')
export default class ModalPortal extends Component {
    constructor() {
        super()
        this.el = document.createElement("div")
    }
    componentDidMount () {
        container.insertBefore(this.el, container.firstChild)
    }
    render(){
        return ReactDOM.createPortal(this.props.children, this.el)
    }
}