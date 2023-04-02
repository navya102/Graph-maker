import React from 'react'
import {useLocation} from 'react-router-dom';
const QuickChart = require('quickchart-js');
const MyGraph=()=>{
        const location = useLocation();
    const graph_data=location.state
    console.log(location.state)


const myChart = new QuickChart();
myChart
  .setConfig(graph_data)
  .setWidth(800)
  .setHeight(400)
  .setBackgroundColor('transparent');

// Print the chart URL
console.log(myChart.getUrl());
const url=myChart.getUrl()
return(<div style={{width:"100%"}}>
        <a href={url} style={{ margin:"auto",display: "flex",padding:"20%",fontSize: "70px",
alignItems: "center",
justifyContent: "center"}}>Your Graph</a>
        </div>
        )
}
export default MyGraph
