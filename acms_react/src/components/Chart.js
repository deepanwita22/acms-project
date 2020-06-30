import React, {Component} from 'react';
import {Bar, Line} from 'react-chartjs-2';
//import * as chartjs from 'chart.js';

import 'chartjs-plugin-annotation';
//import Chart from 'chart.js';

//mport * as ChartAnnotation from 'chartjs-plugin-annotation';


//Chart.plugins.register([ChartAnnotation]); // Global

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    location:'City'
  }

  render(){
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Vital count(RBC)',
              fontSize:25
            },
            tooltips: {
              mode: 'index',
              intersect: false
            },
            annotation: {
              
              annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 5,
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                label: {
                  enabled: false,
                  content: 'Test label'
                },
                borderDash: [10,5]
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 4.5,
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 2,
                label: {
                  enabled: false,
                  content: 'Test label'
                },
                borderDash: [10,5]
              }
            ]
              
            
          },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            },
            
          }}
        />

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Vital count(RBC) ',
              fontSize:25
            },
            annotation: {
              
              annotations: [{
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 5,
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 2,
                label: {
                  enabled: false,
                  content: 'Test label'
                },
                borderDash: [10,5]
              },
              {
                type: 'line',
                mode: 'horizontal',
                scaleID: 'y-axis-0',
                value: 4.5,
                borderColor: 'rgb(255, 205, 86)',
                borderWidth: 2,
                label: {
                  enabled: false,
                  content: 'Test label'
                },
                borderDash: [10,5]
              }
            ]    
          },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}


export default Chart;