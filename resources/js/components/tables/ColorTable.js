import React, {Fragment} from 'react';

export default function ColorTable(props) {
    const {head, body, display, title} = props
    return (
        <div className="white-box">
        <h3 className="box-title text-left">{title}</h3>
        <div className="table-responsive">
            <table className={"table color-table " + props.color}>
                <thead>
                    <tr>
                        {head.map((el, key)=>(
                            <th key={key}>{el}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body.map((user, key)=>(
                        <tr key={key}>
                            {
                                display.map((fieldD, key)=>(
                                    <td key={key}>
                                        {Object.keys(user).map(fieldU=>(
                                            fieldD == fieldU &&
                                                user[fieldD]
                                            
                                        ))}
                                    </td>      
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    )
}