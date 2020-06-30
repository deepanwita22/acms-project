import React, {Component} from 'react';
import Card from './CardUI';
import img1 from "../../assets/dibetes.jpg.jpg";
import img2 from "../../assets/thyroid.jpg.jpg";
import img3 from "../../assets/liver.jpg.jpg";
import img4 from "../../assets/KK.jpg.jpg";
import img5 from "../../assets/Bone1.jpg.jpg";
import img6 from "../../assets/heartnew.jpg.jpg";




class Cards extends Component{
    constructor(props) {
        super(props);
          
  }
    render() {
    return(
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">

         <div className="col-md-4">
         <Card imgsrc ={img1} title="Diabetes Report" body={this.props.diabetes}/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img2} title="Thyroid Analysis" body={this.props.thyroid}/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img3} title="Liver Analysis" body={this.props.liver}/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img4} title="Kidney Analysis" body={this.props.kidney}/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img5} title="Bone Health" body={this.props.Bone}/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img6} title="Cardio Report" body={this.props.cardio}/>
        </div>
      </div>


    </div>

    );
   }
}

export default Cards;