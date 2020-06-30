import React, { Component } from 'react';
import {Media} from 'reactstrap';
//import data from '../shared/report.json';
import data1 from '../shared/diet.json';

import thy from '../assets/thyroid.jpg';
import dia from '../assets/diabetes.jpg';
import liv from '../assets/liver.jpg';
import kid from '../assets/kidney.jpg';
import bo from '../assets/bone.jpg';
import ca from '../assets/cardio.jpg';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, } from 'reactstrap';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
//import MainPage from './mainpage'
import axios from 'axios'
import bgimage from '../assets/jumbotron1.jpg'


class Measure extends Component{
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.match.params.id,
            data: []
        }     
  }
   
    componentDidMount() {
        
           
           axios
           .get(`http://127.0.0.1:8000/Checkreport/${this.props.match.params.id}`)
           .then(response => {
               this.setState({data:response.data})

               console.log(this.state.data)
           })
           .catch(error => {
               console.log(error)
           })  
   };  
        
        //console.log(labels)
render(){
        const {data} =this.state
        const labels = []
        labels.push(data)
        console.log(labels)
            return(
                <div className="App">
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
                                <NavLink className="nav-link" to={{pathname: `/Formdetail/${this.props.match.params.id}`}}><span className="fa fa-ambulance"></span>Add Reports</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to={{pathname: `/Measures/${this.state.id}`}}><span className="fa fa-stethoscope"></span> Diets</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to={{pathname: `/Doctordetail/${this.props.match.params.id}`}}><span className="fa fa-ambulance"></span> Find Doctors</NavLink>
                            </NavItem>
                            
                            </Nav>
                            
                        </Collapse>
                    </div>
                </Navbar>   
                    </div>
                <div>
                    {labels.map((detail,index)=>{
                        
                    if(detail.diabetes==="follow our guidelines"){
                        return(<div className="det">{data1.map((det,index)=>{
                            if(det.name=="diabetes"){
                                return( <div >
                    <div >
                                   <img style="float: right; margin: 0px 15px 15px 0px;" width={80} height={80} className="det1" src={dia} /> <h2><b>{det.name}</b></h2><p><b><i><ol><li>Breakfast:-{det.Breakfast}</li><li>Lunch<ul><li>{det.Lunch[0]}</li><li>{det.Lunch[1]}</li></ul></li><li>Dinner<ul><li>{det.Dinner[0]}</li><li>{det.Dinner[1]}</li></ul></li></ol></i></b></p></div>
                                    </div>)
                            }
                        }
                        )}</div>)
                    }
                
            })}
            
            
        </div>
        <div>
            {labels.map((detail,index)=>{
            
                    if(detail.thyroid==="follow our guidelines"){
                        return(<div className="det">{data1.map((det,index)=>{
                            if(det.name=="throid"){
                                return <div ><img width={80} height={80} className="det" src={thy}/><h2><b>{det.name}</b></h2><p><b><i><ol><li>Breakfast:-{det.Breakfast}</li><li>Lunch<ul><li>{det.Lunch[0]}</li><li>{det.Lunch[1]}</li></ul></li><li>Dinner<ul><li>{det.Dinner[0]}</li><li>{det.Dinner[1]}</li></ul></li></ol></i></b></p></div>
                            }
                        }
                        )}</div>)
                    }
                
            })}
            
            
        </div>
        <div>
            {labels.map((detail,index)=>{
            
                    if(detail.liver==="follow our guidelines"){
                        return(<div className="det">{data1.map((det,index)=>{
                            if(det.name=="Liver"){
                                return <div ><img width={80} height={80} className="det" src={liv}/><h2><b>{det.name}</b></h2><p><b><i><ol><li>Breakfast:-{det.Breakfast}</li><li>Lunch<ul><li>{det.Lunch[0]}</li><li>{det.Lunch[1]}</li></ul></li><li>Dinner<ul><li>{det.Dinner[0]}</li><li>{det.Dinner[1]}</li></ul></li></ol></i></b></p></div>
                            }
                        }
                        )}</div>)
                    }
                
            })}
            
            
        </div>
        <div>
        {labels.map((detail,index)=>{
            
                    if(detail.kidney==="follow our guidelines"){
                        return(<div className="det">{data1.map((det,index)=>{
                            if(det.name=="Kidney"){
                                return <div ><img width={80} height={80} className="det" src={kid}/><h2><b>{det.name}</b></h2><p><b><i><ol><li>Breakfast:-{det.Breakfast}</li><li>Lunch<ul><li>{det.Lunch[0]}</li><li>{det.Lunch[1]}</li></ul></li><li>Dinner<ul><li>{det.Dinner[0]}</li><li>{det.Dinner[1]}</li></ul></li></ol></i></b></p></div>
                            }
                        }
                        )}</div>)
                    }
                
            })}
            
            
        </div>
        <div>
        {labels.map((detail,index)=>{
            
                    if(detail.Bones==="follow our guidelines"){
                        return(<div className="det">{data1.map((det,index)=>{
                            if(det.name=="Bones"){
                                return <div ><img width={80} height={80} className="det" src={bo}/><h2><b>{det.name}</b></h2><p><b><i><ol><li>Breakfast:-{det.Breakfast}</li><li>Lunch<ul><li>{det.Lunch[0]}</li><li>{det.Lunch[1]}</li></ul></li><li>Dinner<ul><li>{det.Dinner[0]}</li><li>{det.Dinner[1]}</li></ul></li></ol></i></b></p></div>
                            }
                        }
                        )}</div>)
                    }
               
            })}
            
            
        </div>
        <div>
        {labels.map((detail,index)=>{
            
                    if(detail.cardio==="follow our guidelines"){
                        return(<div className="det">{data1.map((det,index)=>{
                            if(det.name=="Cardio"){
                                return <div ><img width={80} height={80} className="det" src={ca}/><h2><b>{det.name}</b></h2><p><b><i><ol><li>Breakfast:-{det.Breakfast}</li><li>Lunch<ul><li>{det.Lunch[0]}</li><li>{det.Lunch[1]}</li></ul></li><li>Dinner<ul><li>{det.Dinner[0]}</li><li>{det.Dinner[1]}</li></ul></li></ol></i></b></p></div>
                            }
                        }
                        )}</div>)
                    }
               
            })}
            
            
        </div>
        </div>
            )
        }
    }
    export default Measure;
    
    