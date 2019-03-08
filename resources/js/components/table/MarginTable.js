import React from 'react';

function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.querySelector("#marginTable");
    switching = true;
    dir = "asc";
    const currentCell = table.rows[1].cells[n]
    if(!table.rows[1]){
        return false
    } 
    if(table.rows[0].cells[n].innerText == "Ver" || table.rows[0].cells[n].innerText == "Descargar") return false
    if(parseInt(currentCell.innerText.replace("$", ""))) {
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
    
                if (dir == "asc") {
                    if (parseInt(x.innerText.replace("$", "").replace(",", "")) > parseInt(y.innerText.replace("$", "").replace(",", ""))) {
                    shouldSwitch = true;
                    break;
                    }
                } else if (dir == "desc") {
                    if (parseInt(x.innerText.replace("$", "").replace(",", "")) < parseInt(y.innerText.replace("$", "").replace(",", ""))) {
                    shouldSwitch = true;
                    break;
                    }
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
                switchcount ++; 
            } else {
                if (switchcount == 0 && dir == "asc") {
                    dir = "desc";
                    switching = true;
                }
            }
        }
    } else {
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
    
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
                }
            } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
                }
            }
            }
            if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount ++; 
            } else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }
            }
        }
    }
}

export default function MarginTable(props) {
        const {head, body, display} = props
        let total = body.reduce((stack, invoice)=>{
            return stack += invoice.total
        }, 0)
        const date = new Date()
        const dates = []
        const months = [
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
        const months1 = months.slice(0, month + 1)
        months1.forEach(month=>{
            dates.push(`${month} ${year}`)
        })
        return (
            <div className="col-md-12">
                    <div className="white-box">
                        <h3 className="box-title">{props.income ? "Ingresos" : "Egresos"}
                        </h3>
                        <div className="row sales-report">
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <h2>{months[props.date.split("-")[1]-1]} {props.date.split("-")[0]}</h2>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6 ">
                                <h1 className={"text-right m-t-20" + (props.income ? " text-success" : " text-danger")}>${props.commas(total.toFixed(2))}</h1> </div>
                        </div>
                        <div className="table-responsive">
                            <table id="marginTable" className="table ">
                                <thead>
                                    <tr>
                                    {head.map((el, key)=>(
                                        <th onClick={()=>sortTable(key)} key={key}>{el}</th>
                                    ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {body.map((account, key)=>(
                                        <tr key={key}>
                                            {display.map((fieldD, key)=>{
                                                if(fieldD.match("action-*")){
                                                    return (
                                                        <td key={key}>
                                                            {props.action(fieldD, account["id"])}
                                                        </td>      
                                                    )
                                                }
                                                return (
                                                <td className="txt-oflo" key={key}>
                                                    {Object.keys(account).map(fieldU=>{
                                                        if(parseFloat(account[fieldU]) && fieldU != "fecha" && fieldD == fieldU) {
                                                            const floatField = "$" + account[fieldD]
                                                            if(fieldD != "total") return <span key={key} className="text-info">{props.commas(floatField)}</span>
                                                            return <span key={key} className={"text-" + (props.income ? "success" : "danger")}>{props.commas(floatField)}</span>
                                                        }
                                                        if(fieldU == fieldD && fieldU == "fecha") {
                                                            const date = new Date(account[fieldD])
                                                            return date.getDate();
                                                        }
                                                        if(fieldD == fieldU) {
                                                            return account[fieldU]
                                                        }
                                                        
                                                    })}
                                                </td>      
                                                )
                                            })}
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