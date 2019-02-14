import React from "react"

export default function AccountWrapper(props) {
    return (
        <div className="container-fluid">

        <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="page-title"> Facturas </h4> 
            </div>
        </div>

        <div className="row">
            {props.children}
        </div>
        </div>
    )
}