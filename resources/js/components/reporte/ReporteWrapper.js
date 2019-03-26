import React from "react"

export default function ReporteWrapper(props) {
    const years = {}
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
    props.dateRange.forEach(date => {
        const year = date.split("-")[0]
        const month = date.split("-")[1]
        if(!years[year]) years[year] = []
        years[year].push(month)
    })

    let options = []
    for(let key in years) {
        options.push(<optgroup key={key} label={key}>
            {years[key].map((month, index)=>(
                <option value={`${key}-${month}`} key={index}>{months[month-1]} {key}</option>
            ))}
        </optgroup>)
    }
    return (
        <div className="container-fluid">
            {/* {buttons} */}
        <div className="row bg-title">
            <div className="col-md-5">
                <h4 className="page-title"> Reporte Mensual </h4> 
            </div>
            <div className="col-md-7 align-self-center text-right">
            <div className="d-flex justify-content-end align-items-center">
            <button class="btn btn-secondary" onClick={()=>props.export("reporte.csv")}>Exportar A CSV</button>
            </div>
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 mb-2">
                <div className="col-md-6">
                    <select onChange={props.setAccount} ref={props.account} name="" id="" className="form-control js--animations">
                        {props.accounts.map((el, key)=>(
                            <option value={el.id} key={key}>{el.business_name}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-3 ">
                    <select onChange={props.setFirstMonth} ref={props.firstMonth} name="" id="" className="form-control js--animations">
                        {options}
                    </select>
                </div>
                <div className="col-md-3 ">
                    <select onChange={props.setLastMonth} ref={props.lastMonth} name="" id="" className="form-control js--animations">
                        {options}
                    </select>
                </div>
            </div>
            <div className="col-md-12">
                {props.children}
            </div>
        </div>
        </div>
    )
}