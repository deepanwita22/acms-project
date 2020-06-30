import React, { Component } from 'react';
import Chart from './Chart';
import axios from 'axios'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, } from 'reactstrap';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
//import MainPage from './mainpage'

class Main extends Component {
  constructor(){
    super()

    this.state = {
       
        chartData:{},
        errorMsg:''
}
}

componentDidMount() {
    this.getChartData();
  }  

//this.state.chartData[0].vital
getChartData(){
    // Ajax calls here

    axios.get(`http://127.0.0.1:8000/vital/${this.props.match.params.id}/${this.props.match.params.value}`).then(res => {
        const charts = res.data;
        console.log(charts[0])
        let labels = []
        let data = []
        for(var i=0;i<5;i++)
        labels.push(i)
        for(var j=0;j<5;j++)
        data.push(charts[j])

        //charts.forEach(element => {
          //  labels.push(element.month);
            //data.push(element.Observed_Value);
        //});

        this.setState({
          chartData: {
            labels:labels,
            datasets: [
              {
                label: "Health Status",
                data: data,
                backgroundColor: [
                    'rgba(29,  230, 220, 0.6)',
                    'rgba(246, 22, 97, 0.6)',
                    'rgba(82, 22, 246, 0.6)',
                    'rgba(101, 255, 54, 0.6)',
                    'rgba(250, 250, 83, 0.6)',
                    'rgba(52,  22, 246, 0.6)'
                ],
              }
            ]
          }
        });
      });
    }

    render() {
        return (
          <div>
          <div>
            <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><span className="fa fa-home fa-lg" /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to={{pathname: `/Checktable/${this.state.id}`}}><span className="fa fa-plus-square"></span> CheckReports</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to={{pathname: `/Formdetail/${this.state.id}`}}><span className="fa fa-ambulance"></span>Add Reports</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to={{pathname: `/Measures/${this.state.id}`}}><span className="fa fa-stethoscope"></span> Diets</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to='/Doctordetail'><span className="fa fa-ambulance"></span> Find Doctors</NavLink>
                            </NavItem>
                            
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>
          </div>
          <div className="App">
            {Object.keys(this.state.chartData).length &&
              <Chart
                chartData={this.state.chartData}
                location="India"
                legendPosition="bottom"
              />
             }
          </div>
          </div>
        );
      }
}

export default Main;