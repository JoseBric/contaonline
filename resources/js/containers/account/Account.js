import React from "react"
import { connect } from 'react-redux'

import { changeAccId, changeDate, changeTab } from '../../actions/currentDisplayActions'
import { getInvoices, getAccStates, getDocuments, getNotes, uploadXml, uploadDoc, uploadNote, uploadAccState, deleteAccState, deleteDocument, deleteNote, } from '../../actions/accountDataActions'

import AccountWrapper from "../../components/account/AccountWrapper";
import Invoices from "./Invoices"
import AccountStates from "./AccountStates.js"
import Documents from "./Documents"
import Notes from "./Notes"
import PropTypes from 'prop-types';

class Account extends React.PureComponent {
    constructor(props) {
        super(props)
        this.dateRange = this.dateRangeF()
        this.props.changeAccId(this.dateRange[this.dateRange.length - 1])
        this.user = props.user
        this.getStatus.bind(this)
        this.props.changeTab("income")
        this.setCurrentTab.bind(this)
    }

    
    componentDidMount() {
        const len = this.monthSelect.options.length - 1
        this.monthSelect.selectedIndex = len
        this.props.changeDate(this.monthSelect.options[this.monthSelect.selectedIndex].value)
    }

    componentWillReceiveProps(newProps) {
        const id = newProps.match.params.id
        if(id != this.props.account_id) {
            this.props.changeAccId(id)
            .then(()=>{
                this.getStatus()
            })
        }
    }

    getStatus() {
        const tab = this.props.current_tab
        const income = tab == "income"
        switch(tab) {
            case "income":
            this.props.getInvoices(income)
            break;
            case "expenses":
            this.props.getInvoices(income)
            break;
            case "accountStates":
            this.props.getAccStates()
            break;
            case "documents":
            this.props.getDocuments()
            break;
            case "notes":
            this.props.getNotes()
            break;
        }
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
        this.props.changeDate(current_date).then(()=>this.getStatus())
    }

    setCurrentTab() {
        const idx = this.tab.selectedIndex
        const val = this.tab.options[idx].value
        this.props.changeTab(val).then(()=>this.getStatus())
    }

    render() {
        const invoices = 
        <Invoices invoices={this.props.data} 
        getStatus={this.getStatus.bind(this)} 
        income={this.props.current_tab == "income"} 
        account_id={this.props.account_id} 
        current_date={this.props.current_date}
        />

        let tabDisplayed = invoices
        switch(this.props.current_tab) {
            case "income":
            case "expenses":
            tabDisplayed = invoices
            break;
            case "accountStates":
            tabDisplayed =
                <AccountStates 
                data={this.props.data} 
                getStatus={this.getStatus.bind(this)} 
                deleteObj={this.props.deleteAccState}
                />
            break;
            case "documents":
            tabDisplayed =
                <Documents data={this.props.data} 
                getStatus={this.props.getDocuments} 
                deleteObj={this.props.deleteDocument}
                />
            break;
            case "notes":
            tabDisplayed =
                <Notes 
                data={this.props.data} 
                getStatus={this.getStatus.bind(this)}
                uploadNote = {this.props.uploadNote}
                deleteObj={this.props.deleteNote}
                />
            break;
        }
        return (
            <AccountWrapper 
                dateRange={this.dateRange} 
                current_tab={this.props.current_tab}  

                uploadXml={this.props.uploadXml} 
                uploadDoc={this.props.uploadDoc} 
                uploadAccState={this.props.uploadAccState} 

                setCurrentTab={this.setCurrentTab.bind(this)} 
                setCurrentDate={this.setCurrentDate.bind(this)} 

                setRefTab={el => this.tab = el} 
                setRefSelect={el => this.monthSelect = el} 
                setRef={el=>this.form=el}>
            {tabDisplayed}
            </AccountWrapper>
        )
    }
}

Account.propTypes = {
    data: PropTypes.array,
    current_tab: PropTypes.string,
    current_date: PropTypes.string,
    account_id: PropTypes.string,
    changeAccId: PropTypes.func,
    changeDate: PropTypes.func,
    changeTab: PropTypes.func,
    getInvoices: PropTypes.func,
    getAccStates: PropTypes.func,
    getDocuments: PropTypes.func,
    getNotes: PropTypes.func,
    uploadXml: PropTypes.func, 
    uploadDoc: PropTypes.func,
    uploadNote: PropTypes.func,
    uploadAccState: PropTypes.func,
}

const mapStateToProps = function(state) {
    return {
        data: state.data,
        current_tab: state.currentDisplay.current_tab,
        current_date: state.currentDisplay.current_date,
        account_id: state.currentDisplay.account_id,
    }
}

export default connect(mapStateToProps, {
    changeAccId, 
    changeDate,
    changeTab,

    getInvoices,
    getAccStates, 
    getDocuments, 
    getNotes,

    uploadXml,
    uploadDoc,
    uploadNote,
    uploadAccState,

    deleteAccState,
    deleteDocument,
    deleteNote,

})(Account)