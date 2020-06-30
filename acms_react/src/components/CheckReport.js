import React, { Component } from 'react';
import axios from 'axios'
import Checktable from './Checktable'
//import data from '../shared/diet.json';
//import {Link} from 'react-router-dom';
//import { Button } from 'react-bootstrap';
//import {Switch,Redirect,Route,BrowserRouter} from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, } from 'reactstrap';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
//import MainPage from './mainpage'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Cads1/Cards'
import bgimage from '../assets/regbg.jpg'

class Check extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            data: {}
        }     
  }
   
    componentDidMount() {
        
           
           axios
           .get(`http://127.0.0.1:8000/Checkreport/${this.props.match.params.id}`)
           .then(response => {
               this.setState({data:response.data})
               console.log(response)
           })
           .catch(error => {
               console.log(error)
           })  
   };
    render(){
        const {data} = this.state
        return(
      <div className="App" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
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
                                <NavLink className="nav-link" to={{pathname: `/Doctordetail/${this.state.id}`}}><span className="fa fa-ambulance"></span> Find Doctors</NavLink>
                            </NavItem>
                            
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>

      </div>
      {/*<div>
      <p>Diabetes Report : {data.diabetes}</p>
      <p>Thyroid Report : {data.thyroid}</p>
      <p>Liver Functionalityt : {data.liver}</p>
      <p>kidney Functionality : {data.kidney}</p>
      <p>Bone Health : {data.Bones}</p>
      <p>Heart Report : {data.cardio}</p>
      </div>*/}
    
    </div>
    <div>
    <Card diabetes={data.diabetes+".Please Check out the Diet Plans we have for you!"} thyroid={data.thyroid+".Please Check out the Diet Plans we have for you!"} liver={data.liver+".We wish that our Customers have a Healthy Life"} kidney={data.kidney+".Drinking water is the key to a Healthy lifestyle"} Bone={data.Bones+".Sunlight is a Great source of Vitamin-D!!"} cardio={data.cardio+".We wish you to have a Healthy and Prosporous life!!"}/>
    </div>
    </div>
        )
    }
}

export default Check;