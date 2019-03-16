import React, { Component } from 'react'
import Axios from 'axios';
import PropTypes from 'prop-types'

class AccountCreate extends Component {
  render() {
    return (
      <div ref={node=>this.container = node} id={this.props.uuid || "account-create"}>
        <div className="modal fade" ref={this.props.setAccCreateForm} id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="exampleModalLabel1">Crear Cuenta</h4> </div>
              <div className="modal-body">
                <form ref={this.props.setAccCreateForm}>
                  <div className="form-group">
                    <label htmlFor="razonSocial" className="control-label">Razón Social:</label>
                    <input required type="text" className="form-control" id="razonSocial" name="razonSocial"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="rfc" className="control-label">RFC</label>
                    <input required type="text" id="rfc" className="form-control" name="rfc" />
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="type" id="pf" value="pf" defaultChecked/>
                    <label className="ml-2 form-check-label" htmlFor="pf">
                      Persona Física
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="type" id="pm" value="pm" />
                    <label className="ml-2 form-check-label" htmlFor="pm">
                      Persona Moral
                    </label>
                  </div>

                  <br/>

                  <div className="form-group">
                    <label htmlFor="calle" className="control-label">Calle</label>
                    <input type="text" id="calle" className="form-control" name="calle" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="ext_num" className="control-label">Número Externo</label>
                    <input type="text" id="ext_num" className="form-control" name="ext_num" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="int_num" className="control-label">Número Interno</label>
                    <input type="text" id="int_num" className="form-control" name="int_num" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="zip_code" className="control-label">Código Postal</label>
                    <input type="text" id="zip_code" className="form-control" name="zip_code" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="col" className="control-label">Colonia</label>
                    <input type="text" id="col" className="form-control" name="col" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="col" className="control-label">Ciudad</label>
                    <input type="text" id="col" className="form-control" name="ciudad" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="estado" className="control-label">Estado</label>
                    <input type="text" id="estado" className="form-control" name="estado" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="pais" className="control-label">País</label>
                    <input type="text" id="pais" className="form-control" name="pais" />
                  </div>
                </form>
              </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                  <button type="button" className="btn btn-info" onClick={this.props.onClick}>Crear</button>
                </div>
              </div>
            </div>
          </div>
        </div> 
        )
      }
    }
    
AccountCreate.propTypes = {
  setAccCreateModal: PropTypes.func.isRequired,
  setAccCreateForm: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default AccountCreate