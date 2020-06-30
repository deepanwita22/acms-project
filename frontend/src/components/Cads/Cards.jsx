import React, {Component} from 'react';
import Card from './CardUI';
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

class Cards extends Component{

    render() {
    return(
    <div className="container-fluid d-flex justify-content-center">
      <div className="row">
         <div className="col-md-4">
            <Card imgsrc ={img1} title="How to keep yourself Fit" url="https://familydoctor.org/what-you-can-do-to-maintain-your-health/"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img2} title="Healthy Food is not always Boring!" url="https://www.bbcgoodfood.com/recipes/indian-bean-broccoli-carrot-salad"/>
        </div>
        <div className="col-md-4">
            <Card imgsrc ={img3} title="Check Out the best hospitals" url="https://hospitals.webometrics.info/en/Asia/India"/>
        </div>
         

      </div>


    </div>

    );
   }
}

export default Cards;