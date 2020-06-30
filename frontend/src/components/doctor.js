import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, } from 'reactstrap';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../App1.css'
import { NavLink } from 'react-router-dom';
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'
import image4 from '../assets/image4.jpg'
import image5 from '../assets/image5.jpg'
import image6 from '../assets/image6.jpg'
import image7 from '../assets/image7.jpg'
import image8 from '../assets/image8.jpg'
import image9 from '../assets/image9.jpg'
import image10 from '../assets/image10.jpg'
import bgimage from '../assets/jumbotron.png'


//import MainPage from './mainpage'

class Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
 
                {
                     "id": 1,
                     "image" : image1,
                      "name": "Dr Ashok Seth", 
                      "email": "ashok21@gmail.com",
                      "phonenumber": "8756932649",
                      "gender": "Male",
                      "specialization": "cardiologist"
                },
                
                {
                      "id": 2,
                      "image" : image2,
                      "name": "Dr Ashok Rajgopal",
                      "email": "rajgopal17@gmail.com",
                      "phonenumber": "8326497569",
                      "gender":  "Male",
                      "specialization": "Orthopaedist" 
                    },
                
                {     "id": 3,
                      "image" : image3,
                      "name": "Dr. Manish Banker",
                      "email": "manish78@gmail.com",
                      "phonenumber": "9732467212",
                      "gender": "Male",
                      "specialization": "nephrologist"
                    },
                
                
                {
                      "id": 4,
                      "image" : image4,
                      "name": "Dr. Suresh H. Advani",
                      "email": "suresh87@gmail.com",
                      "phonenumber": "9721273246",
                      "gender": "Male",
                      "specialization": "Cardiothoracic surgeon" 
                    },
                
                {
                      "id": 5,
                      "image" : image5,
                      "name": "Dr Sandeep Vaishya",
                      "email": "sandeep12@gmail.com",
                      "phonenumber": "9732467212",
                      "gender": "Male",
                      "specialization": "hepatologist"
                    },
                
                {
                      "id": 6,
                      "image" : image6,
                      "name": "Dr. I.P.S.Oberoi",
                      "email": "oberoi34@gmail.com",
                      "phonenumber": "8567349078",
                      "gender": "Male",
                      "specialization": "Endocrinologists(thyroid)" 
                    },
                
                {
                      "id": 7,
                      "image" : image7,
                      "name": "Dr A B Govindaraj", 
                      "email": "govindaraj64@gmail.com",
                      "phonenumber": "8490785673",
                      "gender":  "Male",
                      "specialization": "Oncologist"
                    },
                
                {
                    "id": 8,
                    "image" : image8,
                      "name": "Dr. Devi Prasad Shetty",
                      "email": "prasad44@gmail.com",
                      "phonenumber": "8785490673",
                      "gender": "Male",
                      "specialization": "nephrologist"
                    
                },
                
                {
                      "id": 9,
                      "image" : image9,
                      "name": "Dr Harit Chaturvedi",  
                      "email": " haritchaturvedi79@gmail.com",
                      "phonenumber": "7675450875",
                      "gender": "Male",
                      "specialization": "Endocrinologists(diabetes)"
                    },
                
                {

                      "id": 10,
                      "image" : image10,
                      "name": "Dr Ajay Kaul",
                      "email": "ajaykauk10@gmail.com",
                      "phonenumber": "7508756754",
                      "gender": "Male",
                      "specialization": "Audiologist"
                    }
                
            ]
                
        };
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 mt-5">
                <Media tag="li">
                  <Media left middle>
                      <Media object src={dish.image} alt={dish.name} />
                  </Media>
                  <Media body className="ml-5">
                    <Media heading>{dish.name}</Media>
                    <p>Email-id:{dish.email}</p>
                    <p>Phone Number:{dish.phonenumber}</p>
                    <p>Gender:{dish.gender}</p>
                    <p>specialization:{dish.specialization}</p>
                  </Media>
                </Media>
              </div>
            );
        });

        return (
          <div style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
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
            <div className="det">
              
              <Media list>
                  {menu}
              </Media>
            </div>
          </div>
        );
    }
}

export default Doctor;