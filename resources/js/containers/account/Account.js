import React from "react"
import AccountWrapper from "../../components/account/AccountWrapper";
import Invoices from "./Invoices"
import AccountStates from "./AccountStates.js"
import Documents from "./Documents"
import Notes from "./Notes"

export default class Account extends React.Component {
    constructor(props) {
        super(props)
        this.dateRange = this.dateRangeF()
        this.state = {
            current_tab: "income",
            current_date: this.dateRange[this.dateRange.length-1],
            account_id: props.match.params.id,
            data: [],
            income: true,
        }
        this.user = props.user
    }

    getStatus() {
        console.log("get status", this.state.current_tab, this.state.income)
        switch(this.state.current_tab) {
            case "income":
            this.getInvoicesStatus()
            break;
            case "expenses":
            this.getInvoicesStatus()
            break;
            case "accountStates":
            this.getAccountStates()
            break;
            case "documents":
            this.getDocuments()
            break;
            case "notes":
            break;
        }
    }

    componentDidMount() {
        const len = this.monthSelect.options.length - 1
        this.monthSelect.selectedIndex = len
        this.setState({
            current_date: this.monthSelect.options[this.monthSelect.selectedIndex].value
        })
    }

    componentWillReceiveProps(newProps) {
        const id = newProps.match.params.id;
        this.setState({
            account_id: id
        })
    }

    dateRangeF(years = 3) {
        const now = new Date()
        const endDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
        const yearsAgo = new Date(now.setFullYear(now.getFullYear() - years))
        const startDate = `${yearsAgo.getFullYear()}-${yearsAgo.getMonth() + 1}-${yearsAgo.getDate()}`
        var start      = startDate.split('-');
        var end        = endDate.split('-');
        var startYear  = parseInt(start[0]);
        var endYear    = parseInt(end[0]);
        var dates      = [];
      
        for(var i = startYear; i <= endYear; i++) {
          var endMonth = i != endYear ? 11 : parseInt(end[1]) - 1;
          var startMon = i === startYear ? parseInt(start[1])-1 : 0;
          for(var j = startMon; j <= endMonth; j = j > 12 ? j % 12 || 11 : j+1) {
            var month = j+1;
            var displayMonth = month < 10 ? '0'+month : month;
            dates.push([i, displayMonth, '01'].join('-'));
          }
        }
        return dates;
    }
    
    setCurrentDate() {
        const current_date = this.monthSelect[this.monthSelect.selectedIndex].value
        this.setState({
            current_date: current_date
        }, () => this.getStatus(current_date))
    }

    setCurrentTab() {
        const idx = this.tab.selectedIndex
        const val = this.tab.options[idx].value
        this.setState({
            current_tab: val
        }, () => {
            if(val == "income" || val == "expenses") {
                const income = val == "income" ? true : false
                this.setState({
                    income: income
                }, () => this.getStatus())
            }
        })
    }

    getInvoicesStatus() {
        
        const id = this.state.account_id  
        const date = this.state.current_date
        const income = this.state.income
        axios.get(`/invoices/${id}/${date}/${income}`)
        .then(json=>this.setState({
            data: json.data
        }))
    }
    
    getAccountStates() {
        const id = this.state.account_id  
        const date = this.state.current_date
        axios.get(`/account_states/${id}/${date}`)
        .then(json=>this.setState({
            data: json.data
        }))
    }

    getAccountStates() {
        const id = this.state.account_id  
        const date = this.state.current_date
        axios.get(`/account_states/${id}/${date}`)
        .then(json=>this.setState({
            data: json.data
        }))
    }

    getDocuments() {
        const id = this.state.account_id  
        const date = this.state.current_date
        axios.get(`/documents/${id}/${date}`)
        .then(json=>this.setState({
            data: json.data
        }))
    }

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
            })
            .then(re => {
                if(re.data.error) {
                    console.log(re.data.error)
                } else {
                    this.getStatus()
                }
            })
        })
        e.target.value = null
    }

    uploadAccState(e) {
        const data = e.target.files
        Array.from(data).forEach(file => {
            const formData = new FormData()
            formData.append("account_state_input", file)
            formData.append("account_id", this.state.account_id)
            axios.post("/account_states", formData, {
                headers: {
                    "X-CSRF-TOKEN": token, 
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(re => {
                if(re.data.error) {
                    console.log(re.data.error)
                } else {
                    this.getStatus()
                }
            })
        })
        e.target.value = null
    }

    uploadDoc(e) {
        const data = e.target.files
        Array.from(data).forEach(file => {
            const formData = new FormData()
            formData.append("document_input", file)
            formData.append("account_id", this.state.account_id)
            axios.post("/documents", formData, {
                headers: {
                    "X-CSRF-TOKEN": token, 
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(re => {
                if(re.data.error) {
                    console.log(re.data.error)
                } else {
                    this.getStatus()
                }
            })
        })
        e.target.value = null
    }

    uploadNote() {

    }

    render() {
        const invoices = <Invoices invoices={this.state.data} getStatus={this.getStatus.bind(this)} income={this.state.income} account_id={this.state.account_id} dateRange={this.dateRange} current_date={this.state.current_date}/>
        let tabDisplayed = this.state.current_tab == "" ? invoices : ""
        switch(this.state.current_tab) {
            case "income":
            case "expenses":
            tabDisplayed = invoices
            break;
            case "accountStates":
            tabDisplayed =
                <AccountStates data={this.state.data} getStatus={this.getAccountStates.bind(this)} account_id={this.state.account_id} dateRange={this.dateRange} current_date={this.state.current_date}/>
            break;
            case "documents":
            tabDisplayed =
                <Documents data={this.state.data} getStatus={this.getDocuments.bind(this)} account_id={this.state.account_id} dateRange={this.dateRange} current_date={this.state.current_date}/>
            break;
            case "notes":
            tabDisplayed =
                <Notes data={this.state.data} getStatus={this.getStatus.bind(this)} account_id={this.state.account_id} dateRange={this.dateRange} current_date={this.state.current_date}/>
            break;
        }
        return (
            <AccountWrapper 
                current_tab={this.state.current_tab}  
                uploadXml={this.uploadXml.bind(this)} 
                uploadDoc={this.uploadDoc.bind(this)} 
                uploadNote={this.uploadNote.bind(this)} 
                uploadAccState={this.uploadAccState.bind(this)} 
                setCurrentTab={this.setCurrentTab.bind(this)} 
                setRefTab={el => this.tab = el} 
                setRefSelect={el => this.monthSelect = el} 
                dateRange={this.dateRange} 
                setCurrentDate={this.setCurrentDate.bind(this)} 
                setRef={el=>this.form=el}>
            {tabDisplayed}
            </AccountWrapper>
        )
    }
}
