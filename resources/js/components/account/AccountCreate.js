import React, { Component } from 'react'
import Axios from 'axios';

class AccountCreate extends Component {
  constructor(props) {
    super(props)
    this.onClick.bind(this)
    this.state = {
      show: true,
    }
  }

  onClick(e) {
    const values = $(this.form).serializeArray()
    const data = {}
    values.forEach((val) => {
      data[val.name] = val.value
    })
    console.log(data)
    window.values = values
    axios.post("/cuenta", data, {headers:{
      "X-CSRF-TOKEN": token, 
    }}).then(res=>this.props.getAccounts())
    $(this.modal).modal("hide")
    $('body').removeClass('modal-open');
    $('.modal-backdrop').remove();
    this.setState({show: false}, () => this.setState({show: true}))
  }

  render() {
    return (
      this.state.show ?
      <div ref={node=>this.container = node} id="account-create">
        <div className="modal fade" ref={node=>this.modal = node} id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 className="modal-title" id="exampleModalLabel1">Crear Cuenta</h4> </div>
              <div className="modal-body">
                <form ref={node => this.form = node}>
                  <div className="form-group">
                    <label for="razonSocial" className="control-label">Razón Social:</label>
                    <input required type="text" className="form-control" id="razonSocial" name="razonSocial"/>
                  </div>

                  <div className="form-group">
                    <label for="rfc" className="control-label">RFC</label>
                    <input required type="text" id="rfc" className="form-control" name="rfc" />
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="type" id="pf" value="pf" checked/>
                    <label className="ml-2 form-check-label" for="pf">
                      Persona Física
                    </label>
                  </div>

                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="type" id="pm" value="pm" />
                    <label className="ml-2 form-check-label" for="pm">
                      Persona Moral
                    </label>
                  </div>

                  <br/>

                  <div className="form-group">
                    <label for="calle" className="control-label">Calle</label>
                    <input type="text" id="calle" className="form-control" name="calle" />
                  </div>

                  <div className="form-group">
                    <label for="ext_num" className="control-label">Número Externo</label>
                    <input type="text" id="ext_num" className="form-control" name="ext_num" />
                  </div>

                  <div className="form-group">
                    <label for="int_num" className="control-label">Número Interno</label>
                    <input type="text" id="int_num" className="form-control" name="int_num" />
                  </div>

                  <div className="form-group">
                    <label for="zip_code" className="control-label">Código Postal</label>
                    <input type="text" id="zip_code" className="form-control" name="zip_code" />
                  </div>

                  <div className="form-group">
                    <label for="col" className="control-label">Colonia</label>
                    <input type="text" id="col" className="form-control" name="col" />
                  </div>

                  <div className="form-group">
                    <label for="col" className="control-label">Ciudad</label>
                    <input type="text" id="col" className="form-control" name="ciudad" />
                  </div>

                  <div className="form-group">
                    <label for="estado" className="control-label">Estado</label>
                    <input type="text" id="estado" className="form-control" name="estado" />
                  </div>

                  <div className="form-group">
                    <label for="pais" className="control-label">País</label>
                    <input type="text" id="pais" className="form-control" name="pais" />
                  </div>
                </form>
              </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
                  <button type="button" className="btn btn-info" onClick={this.onClick.bind(this)}>Crear</button>
                </div>
              </div>
            </div>
          </div>
        </div> :
        null
        )
      }
    }
    
export default AccountCreate