import React from "react";
import axios from 'axios'
import { Redirect,Link } from 'react-router-dom'
import '../App.css'
import home1 from "./Home"

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        email : "",
        password : "",
        id: ""
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
      axios
			.get('http://127.0.0.1:8000/general/')
			.then(response => {
                console.log(response)
                for(var i=0;i<response.data.length;i++)
                {
                    if(response.data[i].email===this.state.email)
                    {
                    this.setState({id: response.data[i].id})
                    console.log(this.state.id)
                    }
                    
                }
//return  <Redirect  to="/home" />
                
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
      var id=this.state.id
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="form">
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
                placeholder="email-id"
                type="text"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
                placeholder="password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
            </div>
            
            <div>
            <button className="button" type="submit">Save</button>
            <Link 
              to={{
                pathname: `/home/${this.state.id}`, 
              }}>
            <button className="button" type="submit">Go to Home</button>
            </Link>
            </div>
            
            
        </form>
        </div>
      </div>
      </div>
    );
  }
}