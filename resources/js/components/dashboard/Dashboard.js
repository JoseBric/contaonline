import React from "react"
import "./dashboard.css";


export default function Dashboard(props) {
    return (
        <div className="container-fluid">

        <div className="row bg-title">
            <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
                <h4 className="page-title"> DASHBOARD</h4> 
            </div>
        </div>

        <div className="row">
            <div className="col-md-12 col-lg-6 col-sm-12">
                <div className="white-box">
                    <h3 className="box-title">Ingresos
                        <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
                        <select className="form-control pull-right row b-none">
                            <option>March 2017</option>
                            <option>April 2017</option>
                            <option>May 2017</option>
                            <option>June 2017</option>
                            <option>July 2017</option>
                        </select>
                        </div>
                    </h3>
                    <div className="row sales-report">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <h2>March 2017</h2>
                            <p>SALES REPORT</p>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 ">
                            <h1 className="text-right text-success m-t-20">$16,690</h1> </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>STATUS</th>
                                    <th>DATE</th>
                                    <th>PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="txt-oflo">Elite admin</td>
                                    <td><span className="label label-megna label-rounded">SALE</span> </td>
                                    <td className="txt-oflo">April 18</td>
                                    <td><span className="text-success">$24</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Real Homes</td>
                                    <td><span className="label label-info label-rounded">EXTENDED</span></td>
                                    <td className="txt-oflo">April 19</td>
                                    <td><span className="text-info">$1250</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Medical Pro</td>
                                    <td><span className="label label-danger label-rounded">TAX</span></td>
                                    <td className="txt-oflo">April 20</td>
                                    <td><span className="text-danger">-$24</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Hosting press</td>
                                    <td><span className="label label-megna label-rounded">SALE</span></td>
                                    <td className="txt-oflo">April 21</td>
                                    <td><span className="text-success">$24</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Helping Hands</td>
                                    <td><span className="label label-success label-rounded">MEMBER</span></td>
                                    <td className="txt-oflo">April 22</td>
                                    <td><span className="text-success">$24</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Digital Agency</td>
                                    <td><span className="label label-megna label-rounded">SALE</span> </td>
                                    <td className="txt-oflo">April 23</td>
                                    <td><span className="text-danger">-$14</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Helping Hands</td>
                                    <td><span className="label label-success label-rounded">MEMBER</span></td>
                                    <td className="txt-oflo">April 22</td>
                                    <td><span className="text-success">$64</span></td>
                                </tr>
                            </tbody>
                        </table> <a href="#">Check all the sales</a> </div>
                </div>
            </div>

            <div className="col-md-12 col-lg-6 col-sm-12">
                <div className="white-box">
                    <h3 className="box-title">Egresos
                        <div className="col-md-3 col-sm-4 col-xs-6 pull-right">
                        <select className="form-control pull-right row b-none">
                            <option>March 2017</option>
                            <option>April 2017</option>
                            <option>May 2017</option>
                            <option>June 2017</option>
                            <option>July 2017</option>
                        </select>
                        </div>
                    </h3>
                    <div className="row sales-report">
                        <div className="col-md-6 col-sm-6 col-xs-6">
                            <h2>March 2017</h2>
                            <p>SALES REPORT</p>
                        </div>
                        <div className="col-md-6 col-sm-6 col-xs-6 ">
                            <h1 className="text-right text-danger m-t-20">$15,051</h1> </div>
                    </div>
                    <div className="table-responsive">
                        <table className="table ">
                            <thead>
                                <tr>
                                    <th>NAME</th>
                                    <th>STATUS</th>
                                    <th>DATE</th>
                                    <th>PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="txt-oflo">Elite admin</td>
                                    <td><span className="label label-megna label-rounded">SALE</span> </td>
                                    <td className="txt-oflo">April 18</td>
                                    <td><span className="text-success">$24</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Real Homes</td>
                                    <td><span className="label label-info label-rounded">EXTENDED</span></td>
                                    <td className="txt-oflo">April 19</td>
                                    <td><span className="text-info">$1250</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Medical Pro</td>
                                    <td><span className="label label-danger label-rounded">TAX</span></td>
                                    <td className="txt-oflo">April 20</td>
                                    <td><span className="text-danger">-$24</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Hosting press</td>
                                    <td><span className="label label-megna label-rounded">SALE</span></td>
                                    <td className="txt-oflo">April 21</td>
                                    <td><span className="text-success">$24</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Helping Hands</td>
                                    <td><span className="label label-success label-rounded">MEMBER</span></td>
                                    <td className="txt-oflo">April 22</td>
                                    <td><span className="text-success">$24</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Digital Agency</td>
                                    <td><span className="label label-megna label-rounded">SALE</span> </td>
                                    <td className="txt-oflo">April 23</td>
                                    <td><span className="text-danger">-$14</span></td>
                                </tr>
                                <tr>
                                    <td className="txt-oflo">Helping Hands</td>
                                    <td><span className="label label-success label-rounded">MEMBER</span></td>
                                    <td className="txt-oflo">April 22</td>
                                    <td><span className="text-success">$64</span></td>
                                </tr>
                            </tbody>
                        </table> <a href="#">Check all the sales</a> </div>
                </div>
            </div>

            <div className="col-sm-6">
                <div className="white-box">
                    <h3 className="box-title">Primary Table</h3>
                    <p className="text-muted">Add className <code>.color-table .primary-table</code></p>
                    <div className="table-responsive">
                        <table className="table color-table primary-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nigam</td>
                                    <td>Eichmann</td>
                                    <td>@Sonu</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Deshmukh</td>
                                    <td>Prohaska</td>
                                    <td>@Genelia</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Roshan</td>
                                    <td>Rogahn</td>
                                    <td>@Hritik</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="white-box">
                    <h3 className="box-title">Success Table</h3>
                    <p className="text-muted">Add className <code>.color-table .success-table</code></p>
                    <div className="table-responsive">
                        <table className="table color-table success-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Username</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Nigam</td>
                                    <td>Eichmann</td>
                                    <td>@Sonu</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>Deshmukh</td>
                                    <td>Prohaska</td>
                                    <td>@Genelia</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>Roshan</td>
                                    <td>Rogahn</td>
                                    <td>@Hritik</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}