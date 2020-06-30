import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'
import bgimage from '../assets/regbg.png'

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        name :"",
        email : "",
        phone : "",
        age : "",
        gender : "",
        password : "",
        family_hist : "Thyroid"
    }
  }
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
      axios
			.post('http://127.0.0.1:8000/signup/', this.state)
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
        <div className='background-image' style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }} >
        </div>
        <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="form">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
                placeholder="name"
                type="text"
                name="name"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
                placeholder="email"
                type="text"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="phone">Phone No.</label>
            <input
                placeholder="phone"
                type="text"
                name="phone"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
                placeholder="age"
                type="text"
                name="age"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <input
                placeholder="gender"
                type="text"
                name="gender"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                placeholder="password"
                type="text"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            
            <div>
            <button className="button" type="submit">Save</button>
            <Link to="/login">
            <button className="button" type="submit">Register</button>
            </Link>
            </div>
            
        </form>
        </div>
      </div>
      </div>
      </div>
      
    );
  }
}