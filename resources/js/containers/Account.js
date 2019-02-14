import React from "react"
import MarginTable from "../components/tables/MarginTable"
import AccountWrapper from "../components/accounts/AccountWrapper";

export default class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            income: [],
            expenses: [],
            month: 0,
        }
        this.user = this.props.user
        this.displayedFields = ["name", "date"/*day*/, "subtotal", "iva", "total"]
        this.tableHead = ["Nombre", "Día"/*day*/, "Subtotal", "IVA", "Total"]
    }
    
    getStatus() {
        axios.get("/cuenta/1/1")
        .then(json=>this.setState({
            income: json.data.income
        }))
    
        axios.get("/cuenta/1/1")
        .then(json=>this.setState({
            expenses: json.data.expenses
        }))
    }

    componentDidMount() {
        this.getStatus()
    }



    onChange() {
        // this.getStatus(month)
    }
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    render() {
        return (
            <AccountWrapper>
                <MarginTable head={this.tableHead} body={this.state.income} display={this.displayedFields} onChange={this.onChange} commas={this.numberWithCommas} income={true}/>
                <MarginTable head={this.tableHead} body={this.state.expenses} display={this.displayedFields} onChange={this.onChange} commas={this.numberWithCommas} income={false}/>
            </AccountWrapper>
        )
    }
}