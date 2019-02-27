import React, {Fragment} from "react"
import MarginTable from "../components/tables/MarginTable"
import AccountWrapper from "../components/accounts/AccountWrapper";

export default class Invoices extends React.Component {
    constructor(props) {
        super(props)
        props.income
        this.displayedFields = ["fecha"/*day*/, props.income ? "nombre_receptor" : "nombre_emisor","subtotal", "impuestos", "total"]
        this.tableHead = ["Día"/*day*/, props.income ? "Receptor" : "Emisor", "Subtotal", "IVA", "Total"];
        this.getStatus = this.props.getStatus
    }
    
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.invoices != this.props.invoices
    }

    componentDidMount() {
        this.getStatus(this.props.dateRange[this.props.dateRange.length - 1], this.props.account_id, this.props.income)
    }

    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <MarginTable head={this.tableHead} body={this.props.invoices} display={this.displayedFields} date={this.props.current_date} setRef={el => this.selected = el} commas={this.numberWithCommas} income={this.props.income}/>
        )
    }
}