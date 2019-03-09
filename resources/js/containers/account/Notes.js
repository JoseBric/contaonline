import React, { PureComponent as Component } from 'react'
import SimpleTable from "../../components/table/SimpleTable";
import EditorModal from "../../components/modals/EditorModal";
import PropTypes from 'prop-types'
import Quill from 'quill'

export default class Notes extends Component {
  componentDidMount() {
      this.props.getStatus()
      this.quill = new Quill(this.editor, {
        theme: 'snow'
      })
      this.quillEdit = new Quill(this.editNode, {
        theme: 'snow'
      })
  }

  onClickNote() {
    const content = JSON.stringify(this.quill.getContents())
    this.props.uploadNote(content, this.noteTitle.value)
  }

  action(action, noteId) {
    if(action == "action-openContent") {
      const selectedNote = this.props.data.find(el=>el.id == noteId)
      this.quillEdit.setContents(JSON.parse(selectedNote.content))
      this.editNoteTitle.value = selectedNote.title
    }
  }

  render() {
    const displayedFields = ["created_at", "title"]
    const tableHead = ["Día", "Título"];
    const tableBody = this.props.data
    const tableColor = "inverse-table"
    const tableTitle = "Notas"
    return (
        <div className="row">
          <div className="col-sm-12">
              <EditorModal uuid={"editNote"} title={"Ver Nota"} setRef={node=>this.editNode=node} setRefTitle={node=>this.editNoteTitle=node} />
              <EditorModal uuid={"editorModal"} title={"Crear Nota"} setRefTitle={node => this.noteTitle = node} upload={this.onClickNote.bind(this)} setRef={node => this.editor = node}/>
              <SimpleTable action={this.action.bind(this)} fullRow={true} color={tableColor} head={tableHead} body={tableBody} display={displayedFields} title={tableTitle}/>
          </div>
        </div>
    )
  }
}

Notes.propTypes = {
  data: PropTypes.array.isRequired,
  getStatus: PropTypes.func.isRequired,
  uploadNote: PropTypes.func.isRequired,
}
