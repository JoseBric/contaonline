import React, {Fragment} from 'react';
import SimpleTable from "../table/SimpleTable";

export default function Users(props) {
    const {tableColor, tableHead, tableBody, displayedFields, tableTitle} = props
    return (
        <div className="container-fluid">

        <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="display-4 page-title"> Usuarios</h4> 
            </div>
        </div>

        <div className="row">
        <div className="col-sm-12">
            <SimpleTable color={tableColor} head={tableHead} body={tableBody} display={displayedFields} title={tableTitle}/>
        </div>
        </div>
    </div>        
    )
}