import React, { Component } from 'react'
import './App.css'
//import "./style.css";
import PostList from './components/PostList'
import Formdata from './components/Formcomponent'
import Main from './components/MainComponent'
import Maps from './components/Maps'
//import Mainsignup from './components/MainLogin'
import home1 from './components/Home'
import { Login } from './components/index'
import Mainsignup from './components/MainLogin'
import Check from './components/CheckReport'
import Checktable from './components/Checktable'
import Doctor from './components/doctor'
import {Switch,Redirect,Route,BrowserRouter} from 'react-router-dom'
import Measure from './components/Measure'
import Common from './components/common'
//import PostForm from './components/PostForm'

class App extends Component {
	//componentDidMount() {
	//	navigator.geolocation.getCurrentPosition(function(position) {
	//	  console.log("Latitude is :", position.coords.latitude);
	//	  console.log("Longitude is :", position.coords.longitude);
	//	});
	  //}
	render() {
		return (
			<div className="App">
				{/*<Main />*/}
				{/*<Maps />*/}
				{/*<Formdata />*/}
				{/*<Mainsignup/>*/}
			 <BrowserRouter>
			 <Switch>
        <Route path='/home/:id' component={home1} />
			  <Route path='/signup' component={Mainsignup} />
			  <Route path='/Checkreport/:id' component={Check} />
			  <Route path='/Checktable/:id' component={Checktable} />
			  <Route path='/Measures/:id' component={Measure} />
			  <Route path='/Charts/:id/:value' component={Main} />
			  <Route path='/Doctordetail/:id' component={Doctor} />
			  <Route path='/Formdetail/:id' component={Formdata} />
        <Redirect to="/home"  /> 
          	</Switch>
		    </BrowserRouter>	
			  
			</div>
			
		)
	}
}

export default App;

//////////////////////////////////login



/*import React from "react";
import "./Applogin.css";
import { Login, Register } from "./components/index";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;
*/
