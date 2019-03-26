import React, { Component } from 'react'
import ReporteWrapper from '../../components/reporte/ReporteWrapper';
import SimpleTable from '../../components/table/SimpleTable';

export default class ReporteMensual extends Component {
  constructor(props) {
    super(props)
    this.state = {
      accountId: "",
      firstMonth: "",
      lastMonth: "",
      reportes: [],
    }
  }

  componentDidMount() {
    const len = this.firstMonth.options.length
    const firstIdx = this.firstMonth.options.selectedIndex = len - 1
    const lastIdx = this.lastMonth.options.selectedIndex = len - 1
    this.setState({
      firstMonth: this.firstMonth.options[firstIdx].value,
      lastMonth: this.lastMonth.options[lastIdx].value,
    })
  }

  componentWillReceiveProps() {
    const len = this.firstMonth.options.length
    const firstIdx = this.firstMonth.options.selectedIndex = len - 1
    const lastIdx = this.lastMonth.options.selectedIndex = len - 1

  }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.accounts.length == 0) return false
    if(this.state.accountId == "") {
      this.setState({accountId: nextProps.accounts[0].id}, ()=>this.fetchReportes())
    }
    return true
  }

  fetchReportes() {
    axios.post(`/reporte/${this.state.accountId}/${this.state.firstMonth}/${this.state.lastMonth}`, {}, {headers: {
      "X-CSRF-TOKEN": token, 
    }})
    .then(res=>{
      this.setState({
        reportes: res.data,
      })
    })
  }

  render() {
    console.log(this.state, "render")

    const tableHead = ["Mes", "Ingresos", "Egresos", "Facturas", "Entrada MX", "Entrada Extr", "Entrada Total", "Salida"]
    const display = ["mes", "ingresos", "egresos", "facturas", "entrada_mx", "entrada_extr", "entrada_total", "salida"]
    return (
      <ReporteWrapper 
      account={el=>this.account = el}
      firstMonth={el=>this.firstMonth = el}
      lastMonth={el=>this.lastMonth = el}
      dateRange={this.dateRangeF()}
      setAccount={this.setAccount.bind(this)}
      setFirstMonth={this.setFirstMonth.bind(this)}
      setLastMonth={this.setLastMonth.bind(this)}
      accounts={this.props.accounts}
      >
          <SimpleTable action={this.actionHandeler.bind(this)} head={tableHead} body={this.state.reportes} display={display} title={""}/>
      </ReporteWrapper>

    )
  }
  setAccount(e) {
    this.setState({
      accountId: e.target.options[e.target.options.selectedIndex].value
    }, ()=>this.fetchReportes())
  }

  setFirstMonth(e) {
    this.setState({
      firstMonth: e.target.options[e.target.options.selectedIndex].value
    }, ()=>this.fetchReportes())
  }

  setLastMonth(e) {
    this.setState({
      lastMonth: e.target.options[e.target.options.selectedIndex].value
    }, ()=>this.fetchReportes())
  }


  fetchReporte(first, last) {

  }

  actionHandeler() {
    
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

}
