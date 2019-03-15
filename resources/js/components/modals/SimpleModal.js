import React from 'react'
import PropTypes from 'prop-types'

export default function SimpleModal(props) {
  const {uuid} = props
  return (
    <div className="modal fade" id={uuid ? uuid : "simpleModal"} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className={"modal-dialog " + (props.large ? "modal-lg": "")} role="document">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title float-left" id="exampleModalLabel">{props.title}</h5>
            <button type="button" className="close float-right" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            {props.content}
        </div>
        </div>
    </div>
    </div>
  )
}

SimpleModal.propTypes = {
    large: PropTypes.bool,
    uuid: PropTypes.string
}