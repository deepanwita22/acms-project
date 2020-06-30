import React from "react";

import "../card-style.css";

const Card = props => {

return(
      <div className ="card text-center shadow">
            <div className="overflow">   
               <img src ={props.imgsrc} alt='image1' className='card-img-top'/>
       </div>
       <div className="card-body text-dark">
       <h4 className="card-title">{props.title}</h4>    
       <p className="card-text text-secondary">
        This doctr is very great!! and idk doctr spelling!
       <a href="/#"className="btn btn-outline">Go Anywhere</a>
       </p>
       </div>
       </div>

);


}

export default Card;