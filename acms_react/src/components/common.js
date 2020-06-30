import React, { Component } from 'react';
import Checktable from './Checktable'
import Check from './CheckReport'

class Common extends Component
{
    render()
    {
        return(
            <div>
                <div>
                <Check />
            </div>
            <div>
                <Checktable />
            </div>
            </div>
            
            
        )
    }    
}
export default Common;