import React, {Fragment} from 'react';
import './noteRow.css'

export default function SimpleTable(props) {
    const {head, body, display, title} = props
    const styles = {
        row: {
            textAlign: "center",
        }
    }
    const bodyDisplay = 
    body.map((colData, key)=>{
        if(props.fullRow) {
            return (
                <tr className="noteRow" onClick={(e)=>props.action("action-openContent", colData["id"], e)} key={key}>
                    {
                        display.map((colDisp, key)=> {
                            if(colDisp.match("action-*") && colDisp != "action-openContent"){
                                return (
                                    <td style={styles.row} key={key}>
                                        {props.action(colDisp, colData["id"])}
                                    </td>      
                                )
                            }
                            return (
                                <td style={styles.row}  key={key}>
                                    {Object.keys(colData).map(colDatakey=>{
                                        if(colDisp == colDatakey) {
                                            if(colDisp == "created_at") {
                                                return colData[colDisp].split("-")[2].split(" ")[0]
                                            }
                                            return colData[colDisp]
                                        }
                                    })}
                                </td>      
                            )
                        })
                    }
                </tr>
            )
        } return (
        <tr key={key}>
            {
            display.map((colDisp, key)=>{
                if(colDisp.match("action-*")){
                    return (
                        <td style={styles.row} key={key}>
                            {props.action(colDisp, colData["id"])}
                        </td>      
                    )
                }
                return (
                <td style={styles.row} key={key}>
                    {Object.keys(colData).map(colDatakey=>(
                        colDisp == colDatakey &&
                        colData[colDisp]
                    ))}
                </td>      
                )
            })}
        </tr>
        )
    })
    return (
                <div className="col-md-12">
                <div className="white-box">
                    <h3 className="box-title">{title}
                    </h3>
                    <div className="table-responsive">
                        <table id="simpTable" className="table ">
                            <thead>
                                <tr>
                                {head.map((el, key)=>(
                                    <th style={styles.row} key={key}>{el}</th>
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