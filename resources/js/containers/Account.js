import React from "react"
import MarginTable from "../components/tables/MarginTable"
import AccountWrapper from "../components/accounts/AccountWrapper";

export default class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            income: [],
            expenses: [],
            i_month: 0,
            i_date: '',
            e_month: 0,
            e_date: '',
            account_id: this.props.match.params.id,
        }
        this.user = this.props.user
        this.displayedFields = ["descripcion_producto", "fecha"/*day*/, "subtotal", "impuestos", "total"]
        this.tableHead = ["Descripción", "Día"/*day*/, "Subtotal", "IVA", "Total"];
    }
    
    getStatusI(month, id=this.props.match.params.id) {
        axios.get(`/cuenta/income/${id}/${parseInt(month) + 1}`)
        .then(json=>this.setState({
            income: json.data
        }))    
    }
    getStatusE(month, id=this.props.match.params.id) {
        axios.get(`/cuenta/expenses/${id}/${parseInt(month) + 1}`)
        .then(json=>this.setState({
            expenses: json.data
        }))
    }

    componentDidMount() {
        const len = this.selectI.options.length - 1
        this.selectI.selectedIndex = len
        this.selectE.selectedIndex = len
        this.onChange()
    }

    onChange(e) {
        if(e) {
            const income = e.target.getAttribute("income")
            if(income == "true") {
                const el = this.selectI
                const selected = el[el.selectedIndex]
                this.setState({
                    i_month: selected.getAttribute("month"),
                    i_date: selected.getAttribute("date"),
                })
                this.getStatusI(selected.getAttribute("month"))
            } else {
                const el = this.selectE
                const selected = el[el.selectedIndex]
                this.setState({
                    e_month: selected.getAttribute("month"),
                    e_date: selected.getAttribute("date"),
                })
                this.getStatusE(selected.getAttribute("month"))
            }
            
        } else {
            const selected = this.selectI[this.selectI.selectedIndex]
            this.setState({
                e_month: selected.getAttribute("month"),
                e_date: selected.getAttribute("date"),
                i_month: selected.getAttribute("month"),
                i_date: selected.getAttribute("date"),
            })
            this.getStatusE(selected.getAttribute("month"))
            this.getStatusI(selected.getAttribute("month"))
        }

    }
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    componentWillReceiveProps(newProps) {
        const id = newProps.match.params.id;
        this.getStatusI(this.state.i_month, id)
        this.getStatusE(this.state.e_month, id)
        this.setState({
            account_id: id,
        })
    }

    // uploadXml(e) {
    //     console.log("files", e.target.files[0])
    //     const formData = new FormData()
    //     formData.append("xml_input", e.target.files[0])
    //     axios.post("/invoices", formData, {
    //         headers: {
    //         "X-CSRF-TOKEN": token,
    //         'Content-Type': 'multipart/form-data'
    //         }
    //     })
    //         .then(e.target.value = null)
    //     return false
    // }

    uploadXml(e) {
        const data = e.target.files
        Array.from(data).forEach(file => {
            const formData = new FormData()
            formData.append("xml_input", file)
            formData.append("account_id", this.state.account_id)
            axios.post("/invoices", formData, {
                headers: {
                    "X-CSRF-TOKEN": token, 
                    'Content-Type': 'multipart/form-data'
                }
            }).then(this.onChange())
        })
        e.target.value = null
    }

    render() {
        return (
            <AccountWrapper onSubmit={this.uploadXml.bind(this)} setRef={el=>this.form=el}>
                <MarginTable head={this.tableHead} body={this.state.income} display={this.displayedFields} onChange={this.onChange.bind(this)} date={this.state.i_date} setRef={el => this.selectI = el} commas={this.numberWithCommas} income={true}/>
                <MarginTable head={this.tableHead} body={this.state.expenses} display={this.displayedFields} onChange={this.onChange.bind(this)} date={this.state.e_date} setRef={el => this.selectE = el} commas={this.numberWithCommas} income={false}/>
            </AccountWrapper>
        )
    }
}