import React from 'react'
import PropTypes from 'prop-types'
import SimpleModal from './SimpleModal';

export default function EditorModal(props) {
  const editor = 
  <div className="form-container" id="editorForm">
    <input type="text" ref={props.setRefTitle} style={{borderColor: "#ccc"}} id="form-title" name="title" className="form-control" placeholder="Título" />
    <br/>
    <div style={{height: "30vh"}} ref={props.setRef} id="editor">
    </div>
  </div>;
  const button = 
  <button data-dismiss="modal" className="btn btn-secondary" onClick={props.upload}>
    {props.title}
  </button>
  return (
    <SimpleModal uuid={props.uuid} title={button} content={editor} large={true} /> 
  )
}

EditorModal.propTypes = {
    title: PropTypes.string.isRequired,
    uuid: PropTypes.string.isRequired,
    
    upload: PropTypes.func,

    setRef: PropTypes.func,
    setRefTitle: PropTypes.func,

}