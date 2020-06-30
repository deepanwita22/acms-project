import React, { Component } from 'react';  
import ReactTable from "react-table-v6";  
//import '../App1.css'
import "react-table-v6/react-table.css";
import { Redirect,Link } from 'react-router-dom'
import axios from 'axios' 
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, } from 'reactstrap';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavLink } from 'react-router-dom';
//import MainPage from './mainpage'
import bgimage from '../assets/checktable.jpg'

class Checktable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id:this.props.match.params.id,
      Cholesterollevels: null,
      Bpdia: null,
      Bpsys:null,
      Triglycerides: null,
      HDL: null,
      NonHDL: null,
      LDL: null,
      RBC: null,
      Ketone: null,
      ACR: null,
      T3: null,
      T4: null,
      TSH: null,
      Vitamind: null,
      Calcium: null,
      Phosphorous: null,
      Bun: null,
      Bilirubintotal: null,
      Bilirubindirect: null,
      Bilirubinindirect: null,
      Alkalinephosphatase: null,
      Globulin: null,
      AGratio: null,
      Creatinine: null,
      Uric_acid: null,
      Totalprotein: null,
      Albumin: null,
      Glucosevalues: null,
      TotalCholestrol: null,
    };
    
  } 
  
  componentDidMount() {
      //var id = this.props.match.params.id
      //this.setState({id: this.props.id});
      
       axios
       .get(`http://127.0.0.1:8000/vital/${this.props.match.params.id}`)
       .then(response => {
           var len=response.data.length
           console.log(len)
           this.setState({                       
            Cholesterollevels: response.data[len-1].total_cholestrol,
            Bpdia: response.data[len-1].BP_dia,
            Bpsys: response.data[len-1].BP_sys,
            Triglycerides: response.data[len-1].Triglycerides,       
            HDL:  response.data[len-1].HDL,
            NonHDL:  response.data[len-1].Non_HDL,
            LDL: response.data[len-1].LDL,
            RBC: response.data[len-1].rbc,                                                                       
            Ketone: response.data[len-1].ketone,                              
            ACR: response.data[len-1].ACR,
            T3: response.data[len-1].T3,
            T4: response.data[len-1].T4,
            TSH: response.data[len-1].TSH,                                      
            Vitamind: response.data[len-1].Vitamin_d,
            Calcium: response.data[len-1].calcium,
            Phosphorous: response.data[len-1].phosphorous,
            Bun: response.data[len-1].BUN,
            Bilirubintotal: response.data[len-1].Bilirubin_total,
            Bilirubindirect: response.data[len-1].Bilirubin_direct,
            Bilirubinindirect: response.data[len-1].Bilirubin_indirect,
            Alkalinephosphatase: response.data[len-1].Alkaline_Phosphatase,
            Globulin: response.data[len-1].Globulin,
            AGratio: response.data[len-1].AG_ratio,
            Creatinine: response.data[len-1].creatinine,
            Uric_acid: response.data[len-1].Uricacid,
            Totalprotein: response.data[len-1].Total_protein,
            Albumin: response.data[len-1].Albumin,
            Glucosevalues: response.data[len-1].glucose                       

        })
           console.log(response)
       })
       .catch(error => {
           console.log(error)
       })  
};

    
     render() {  
     const data = [{
         
        
        name: 'Cholesterollevels',  
        value: this.state.Cholesterollevels 
        },
        {  
         name: 'Bpdia',  
         value: this.state.Bpdia  
         },
         {  
         name: 'Bpsys',  
         value: this.state.Bpsys     
         },{  
         name: 'Triglycerides',  
         value: this.state.Triglycerides
         },{  
         name: 'HDL',  
         value: this.state.HDL
         },{  
         name: 'NonHDL',  
         value: this.state.NonHDL 
         },{  
          name: 'LDL',  
          value: this.state.LDL 
         },{  
          name: 'RBC',  
          value: this.state.RBC  
         },{  
          name: 'Ketone',  
          value: this.state.Ketone
         },{  
          name: 'ACR',  
          value: this.state.ACR
         },{  
          name: 'T3',  
          value: this.state.T3  
         },{  
          name: 'T4',  
          value: this.state.T4
         },{  
          name: 'TSH',  
          value: this.state.TSH  
         },{  
          name: 'Vitamind',  
          value: this.state.Vitamind  
         },{  
          name: 'Calcium',  
          value: this.state.Calcium 
         },{  
          name: 'Phosphorous',  
          value: this.state.Phosphorous  
         },{  
          name: 'Bun',  
          value: this.state.Bun  
         },{  
          name: 'Bilirubintotal',  
          value: this.state.Bilirubintotal  
         },{  
          name: 'Bilirubindirect',  
          value: this.state.Bilirubindirect  
         },{  
          name: 'Bilirubinindirect',  
          value: this.state.Bilirubinindirect   
         },{  
          name: 'Alkalinephosphatase',  
          value: this.state.Alkalinephosphatase   
         },{  
          name: 'Globulin',  
          value: this.state.Globulin  
         },{  
          name: 'AGratio',  
          value: this.state.AGratio 
         },{  
          name: 'Creatinine',  
          value: this.state.Creatinine
         },{  
          name: 'Uric_acid',  
          value: this.state.Uric_acid
         },{  
          name: 'Totalprotein',  
          value: this.state.Totalprotein 
         },{  
          name: 'Glucosevalues',  
          value: this.state.Glucosevalues
         },{  
          name: 'TotalCholestrol',  
          value: this.state.TotalCholestrol  
         },{  
          name: 'Albumin',  
          value: this.state.Albumin  
         }]  
     const columns = [{  
       Header: 'Vitals',  
       accessor: 'name'  
       },{  
       Header: 'Value',  
       accessor: 'value'  
       }]  
    return (  
        <div className="App" style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
            <Navbar dark expand="lg">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/"><span className="fa fa-home fa-lg" /></NavbarBrand>
                        
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
                            
                       
                    </div>
                </Navbar>
            <div>
                <h2>Find your Reports Here</h2>
            </div>    
            <div>  
              <ReactTable  
                  data={data}  
                  columns={columns}  
                  defaultPageSize = {8}  
                  pageSizeOptions = {[8,16,30]}  
              />  
          </div> 
          
          

            <Link 
              to={{
                pathname: `/Checkreport/${this.props.match.params.id}`
              }}>
                  <button className="button" type="submit">Show Analysis</button>
            </Link>
            <Link 
              to={{
                pathname: `/Charts/${this.props.match.params.id}/rbc`
              }}>
                  <button className="button" type="submit">Check Charts</button>
            </Link>
        </div>
          
    )  
  }  
}  
export default Checktable;  