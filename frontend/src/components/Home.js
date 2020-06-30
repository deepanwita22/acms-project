import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, } from 'reactstrap';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import bgimage from '../assets/jumbotron1.jpg'
import { NavLink } from 'react-router-dom';
//import MainPage from './mainpage';
import axios from 'axios'
import Footer from './Footer.js'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from './Cads/Cards'
import image from '../assets/regbg.jpg'


class home1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isNavOpen: false,
          id: null,
          name: '',
          email: ''
        };
        this.toggleNav = this.toggleNav.bind(this);       
}

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }
      
      componentDidMount() {
         
         this.setState({id: this.props.match.params.id})
         console.log(this.state.id)
         axios
			.get('http://127.0.0.1:8000/general/')
			.then(response => {
                console.log(response)
                for(var i=0;i<response.data.length;i++)
                {
                    if(response.data[i].id===this.state.id)
                    {
                    this.setState({email: response.data[i].email})
                    console.log(this.state.email)
                    }
                }    
			})
			.catch(error => {
				console.log(error)
            })
    
    };
      
    render() {
        
        const {name} =this.state
        return(
            <div>
            <div>
                <React.Fragment>
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
                                <NavLink className="nav-link" to='/measures'><span className="fa fa-stethoscope"></span> Diets</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to={{pathname: `/Doctordetail/${this.state.id}`}}><span className="fa fa-ambulance"></span> Find Doctors</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to ="/signup"><span className="fa fa-ambulance"></span>Login</NavLink>
                            </NavItem>
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <p className="h1">We inspire you to stay healthy and live happily</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>  
            <div style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
            <Card />
            </div>
            
            </React.Fragment>
            
            </div>
            
            </div> 
        );
    }
}
export default home1;
