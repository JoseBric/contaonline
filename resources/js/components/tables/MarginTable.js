import React from 'react';

export default function MarginTable(props) {
        const {head, body, display} = props
        let total = body.reduce((stack, invoice)=>{
            return stack += invoice.total
        }, 0).toFixed(2)
        const date = new Date()
        const dates = []
        let months = [
            "Enero", 
            "Febrero",
            "Marzo",
            "Abril",
            "Mayo",
            "Junio",
            "Julio",
            "Agosto",
            "Septiembre",
            "Octubre",
            "Noviembre",
            "Diciembre",
        ]
        const year = date.getFullYear()
        const month = date.getMonth()
        months = months.slice(0, month + 1)
        months.forEach(month=>{
            dates.push(`${month} ${year}`)
        })
        return (
            <div className="col-md-12 col-lg-6 col-sm-12">
                    <div className="white-box">
                        <h3 className="box-title">{props.income ? "Ingresos" : "Egresos"}
                            <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
                            <select income={props.income.toString()} ref={props.setRef} onChange={props.onChange} className="form-control pull-right row b-none">
                                {dates.map((month, key)=>(
                                    <option income={props.income.toString()} month={key} date={month} key={key}>{month}</option>
                                ))}
                            </select>
                            </div>
                        </h3>
                        <div className="row sales-report">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <h2>{props.date}</h2>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 ">
                                <h1 className={"text-right m-t-20" + (props.income ? " text-success" : " text-danger")}>${props.commas(total)}</h1> </div>
                        </div>
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
                                    {body.map((account, key)=>(
                                        <tr key={key}>
                                            {display.map((fieldD, key)=>(
                                                <td className="txt-oflo" key={key}>
                                                    {Object.keys(account).map(fieldU=>{
                                                        if(parseFloat(account[fieldU]) && fieldU != "date" && fieldD == fieldU) {
                                                            const floatField = "$" + account[fieldD].toFixed(2)
                                                            if(fieldD != "total") return <span key={key} className="text-info">{floatField}</span>
                                                            return <span key={key} className={"text-" + (props.income ? "success" : "danger")}>{floatField}</span>
                                                        }
                                                        if(fieldD == fieldU) {
                                                            return account[fieldD]
                                                        }
                                                        
                                                    })}
                                                </td>      
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table> 
                            {/* <a href="#">Check all the sales</a>  */}
                            </div>
                    </div>
                </div>
    )
}