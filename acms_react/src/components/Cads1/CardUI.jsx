import React from "react";

import './card-style.css';

const Card = props => {

return(
      <div className ="card text-center shadow">
            <div className="overflow">   
               <img src ={props.imgsrc} alt='image1' className='card-img-top'/>
       </div>
       <div className="card-body text-dark">
       <h3 className="card-title">{props.title}</h3>    
       <h4 className="card-body">{props.body}</h4>
        
        
       <a href="/#"className="btn btn-outline">Have a Healthy Day!!</a>
       
       </div>
       </div>

);


}

export default Card;