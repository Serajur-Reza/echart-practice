import React from 'react';

import ReactEcharts from "echarts-for-react";
import { sepTemp, sepDate, sepRain } from '../Data/Info';

const Bar = () => {

    const chart={
        // title:{
        //     show:true,
        //     text:"Bar Chart",
        //     left:"center",
        //     // top:"center"
        // },
        tooltip:{
            show:true,
            trigger:'item',
            animation: true,
            formatter:'Date: {b0} <br /> {a0} : {c0}'
        },

        legend:{
            orient: 'horizontal',
            data: ["Temperature", "Rain"]
        },

        xAxis:{
            name:"Date",
            left:"center",
            data: sepDate()
        },

        yAxis:{
            name:"Temperature & Rain",
        },
        series:[{
            label: "Temperature",
            name:"Temperature",
            type: "bar",
            data: sepTemp(),

            itemStyle:{
                color:"greenyellow",
                borderColor:"blue"
            }
        },
        {
            name:"Rain",
            type:"bar",
            data:sepRain(),
            itemStyle:{
                color:"yellow",
                borderColor:"black"
            }
        },
        
    ],

    
    }

    return (
        <div>
            <h1>Hello World</h1>

            <ReactEcharts option={chart}/>
        </div>
    );
};

export default Bar;