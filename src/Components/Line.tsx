import React from 'react';
import { sepDate, sepRain, sepTemp } from '../Data/Info';
import ReactEcharts from "echarts-for-react";

const Line = () => {

    const chart={
        // title:{
        //     show:true,
        //     text: "Line Chart",
        //     left: "center"
        // },

        tooltip:{
            show: true,
            animation:true,
            trigger: "item",
            formatter:`Date: {b0} <br/> {a0}: {c0}`
        },

        legend:{
            orient:"horizontal",
            left:"center",
            data: ['Temperature',"Rain"]
        },
        xAxis:{
            data: sepDate()
        },

        yAxis:{
            
        },

        series:[{
            label: "Temperature",
            name:"Temperature",
            type: "line",
            data: sepTemp(),
            itemStyle: {
                color: "blue",
                borderColor: 'black'
            }
        },
        {
            name:"Rain",
            type: "line",
            data: sepRain(),
            itemStyle: {
                color: "red",
                borderColor: 'black'
            }
        },
    ]
    }

    return (
        <div>
            <h1>Line Chart</h1>

            <ReactEcharts option={chart}/>
        </div>
    );
};

export default Line;