import React, { Component } from "react";
import { render } from "react-dom";

class Maps extends Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude:0,
        longitude:0
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function(position) {
        var lat=position.coords.latitude;
        var long=position.coords.longitude;
        this.setState({
        latitude:lat,
        longitude:long
        })
        //console.log("Latitude is :", position.coords.latitude);
        //console.log("Longitude is :", position.coords.longitude);
      }.bind(this));
    }
  }

  render() {
    var lat=this.state.latitude;
    var long=this.state.longitude;
    var querystring = 'q='+lat+','+long;
    let _url = "https://www.google.com/maps?"+querystring+"&hl=en&z=14&amp;output=embed";
    return (
        <div>
        <a href={_url}>Visit location</a>
       <br />
        </div>
    );
  }
}

export default Maps;
