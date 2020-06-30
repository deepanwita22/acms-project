import React, { Component } from "react";
import "../Appform.css";
import axios from 'axios'
import { Form } from "reactstrap";
import { Redirect,Link } from 'react-router-dom'
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, } from 'reactstrap';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
//import MainPage from './mainpage'

class Formdata extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
        glucose: null,
        BP_dia: null,
        BP_sys: null,
        rbc: null,
        total_cholestrol: null,
        Triglycerides:null,
        HDL: null,
        LDL: null,
        Non_HDL: null,
        ketone: null,
        ACR: null,
        T3: null,
        T4: null,
        TSH: null,
        Bilirubin_total: null,
        Bilirubin_direct: null,
        Bilirubin_indirect: null,
        Alkaline_Phosphatase: null,
        Total_protein: null,
        Albumin: null,
        Globulin: null,
        AG_ratio: null,
        BUN: null,
        creatinine: null,
        Uric_acid: null,
        Vitamin_d: null,
        calcium: null,
        phosphorous: null,
        cust_id: this.props.match.params.id
            
    
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    //this.setState({cust_id: this.props.match.params.id})
      axios
			.post('http://127.0.0.1:8000/vitalpost/', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				console.log(error)
			})
    
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    

    this.setState({ [name]: value }, () => console.log(this.state));
  };

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
                                <NavLink className="nav-link"  to={{pathname: `/Checktable/${this.props.match.params.id}`}}><span className="fa fa-plus-square"></span> CheckReports</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to={{pathname: `/Formdetail/${this.state.id}`}}><span className="fa fa-ambulance"></span>Add Reports</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to={{pathname: `/Measures/${this.props.match.params.id}`}}><span className="fa fa-stethoscope"></span> Diets</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to={{pathname: `/Doctordetail/${this.props.match.params.id}`}}><span className="fa fa-ambulance"></span> Find Doctors</NavLink>
                            </NavItem>
                            
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>   
        </div>
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit} noValidate>
            
            <div className="Cholesterollevels">
              <label htmlFor="total_cholestrol">Cholesterol levels</label>
              <input
                placeholder="Cholesterol levels"
                type="text"
                name="total_cholestrol"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Bpdia">
              <label htmlFor="BP_dia"> Bp_dia</label>
              <input
               
                placeholder="Bpdia"
                type="text"
                name="BP_dia"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Bpsys">
              <label htmlFor="BP_sys">Bp_sys</label>
              <input
                
                placeholder="Bpsys"
                type="text"
                name="BP_sys"
                noValidate
                onChange={this.handleChange}
              />
             
             
            </div>
            <div className="Triglycerides">
              <label htmlFor="Triglycerides">Triglycerides</label>
              <input
                
                placeholder="Triglycerides"
                type="text"
                name="Triglycerides"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="HDL">
              <label htmlFor="HDL">HDL</label>
              <input
                
                placeholder="HDL"
                type="text"
                name="HDL"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="LDL">
              <label htmlFor="LDL">LDL</label>
              <input
               
                placeholder="LDL"
                type="text"
                name="LDL"
                noValidate
                onChange={this.handleChange}
              />
            </div>

            <div className="Non_HDL">
              <label htmlFor="Non_HDL">LDL</label>
              <input
               
                placeholder="LDL"
                type="text"
                name="Non_HDL"
                noValidate
                onChange={this.handleChange}
              /> 
            </div>
            <div className="RBC">
              <label htmlFor="rbc">RBC</label>
              <input
               
                placeholder="RBC"
                type="text"
                name="rbc"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Ketone">
              <label htmlFor="ketone">Ketone</label>
              <input
                
                placeholder="Ketone"
                type="text"
                name="ketone"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="ACR">
              <label htmlFor="ACR">ACR</label>
              <input
               
                placeholder="ACR"
                type="text"
                name="ACR"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="T3">
              <label htmlFor="T3">T3</label>
              <input
                
                placeholder="T3"
                type="text"
                name="T3"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="T4">
              <label htmlFor="T4">T4</label>
              <input
                
                placeholder="T4"
                type="text"
                name="T4"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="TSH">
              <label htmlFor="TSH">TSH</label>
              <input
               
                placeholder="TSH"
                type="text"
                name="TSH"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Vitamind">
              <label htmlFor="Vitamin_d">Vitamin d</label>
              <input
                
                placeholder="Vitamind"
                type="text"
                name="Vitamin_d"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Calcium">
              <label htmlFor="calcium">Calcium</label>
              <input
               
                placeholder="Calcium"
                type="text"
                name="calcium"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="Phosphorous">
              <label htmlFor="phosphorous">Phosphorous</label>
              <input
                
                placeholder="Phosphorous"
                type="text"
                name="phosphorous"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="Bun">
              <label htmlFor="BUN">Bun</label>
              <input
                
                placeholder="Bun"
                type="text"
                name="BUN"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Bilirubintotal">
              <label htmlFor="Bilirubin_total">Bilirubin total</label>
              <input
                
                placeholder="Bilirubin_total"
                type="text"
                name="Bilirubin_total"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="Bilirubindirect">
              <label htmlFor="Bilirubin_direct">Bilirubin direct</label>
              <input
               
                placeholder="Bilirubindirect"
                type="text"
                name="Bilirubin_direct"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Bilirubinindirect">
              <label htmlFor="Bilirubin_indirect">Bilirubin indirect</label>
              <input
               
                placeholder="Bilirubinindirect"
                type="text"
                name="Bilirubin_indirect"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Alkalinephosphatase">
              <label htmlFor="Alkaline_Phosphatase">Alkaline phosphatase</label>
              <input
                
                placeholder="Alkalinephosphatase"
                type="text"
                name="Alkaline_Phosphatase"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Globulin">
              <label htmlFor="Globulin">Globulin</label>
              <input
               
                placeholder="Globulin"
                type="text"
                name="Globulin"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="AGratio">
              <label htmlFor="AG_ratio">AG ratio</label>
              <input
                
                placeholder="AGratio"
                type="text"
                name="AG_ratio"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="Creatinine">
              <label htmlFor="creatinine">Creatinine</label>
              <input
               
                placeholder="Creatinine"
                type="text"
                name="creatinine"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Uricacid">
              <label htmlFor="Uric_acid">Uric acid</label>
              <input
                
                placeholder="Uricacid"
                type="text"
                name="Uric_acid"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Totalprotein">
              <label htmlFor="Total_protein">Total protein</label>
              <input
               
                placeholder="Totalprotein"
                type="text"
                name="Total_protein"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="Albumin">
              <label htmlFor="Albumin">Albumin</label>
              <input
                
                placeholder="Albumin"
                type="text"
                name="Albumin"
                noValidate
                onChange={this.handleChange}
              />
             
            </div>
            <div className="Glucosevalues">
              <label htmlFor="glucose">Glucose values</label>
              <input
                
                placeholder="Glucosevalues"
                type="text"
                name="glucose"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div>
            <button type="submit">Save</button>
            </div>
       
          </form>
        </div>
        </div>
        
      </div>
    );
  }
}

export default Formdata;