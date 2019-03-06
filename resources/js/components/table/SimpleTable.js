import React, {Fragment} from 'react';

export default function SimpleTable(props) {
    const {head, body, display, title} = props
    const bodyDisplay = 
    body.map((colData, key)=>(
        <tr key={key}>
            {
            display.map((colDisp, key)=>{
                if(colDisp.match("action-*")){
                    return (
                        <td key={key}>
                            {props.action(colDisp, colData["id"])}
                        </td>      
                    )
                }
                return (
                <td key={key}>
                    {Object.keys(colData).map(colDatakey=>(
                        colDisp == colDatakey &&
                        colData[colDisp]
                    ))}
                </td>      
                )
            })}
        </tr>
    ))
    return (
                <div className="col-md-12">
                <div className="white-box">
                    <h3 className="box-title">{props.title}
                    </h3>
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr>
                                {head.map((el, key)=>(
                                    <th key={key}>{el}</th>
                                ))}
                                </tr>
                            </thead>
                            <tbody>
                            {bodyDisplay}
                            </tbody>
                        </table> 
                        {/* <a href="#">Check all the sales</a>  */}
                        </div>
                </div>
            </div>
    )
}