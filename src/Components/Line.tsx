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

        // tooltip:{
        //     show: true,
        //     animation:true,
        //     trigger: "item",
        //     formatter:`Date: {b0} <br/> {a0}: {c0}`
        // },

        legend:{
            orient:"horizontal",
            left:"center",
            data: ['Temperature',"Rain"]
        },
        xAxis:{
            name:"Date",
            nameLocation:"center",
            data: sepDate(),
            interval:1,
            nameTextStyle:{
                padding:20
            },

            axisTick:{
                show:false,
                interval:5
            },
            alignWithLabel:true
        },

        yAxis:{
            name:"Temperature and Rain",
            nameLocation:"center",
            // boundaryGap:["20%","20%"],
            splitLine:{
                show:false,
            },
            nameTextStyle:{
                padding:20
            },
            
            interval:2,
            minInterval:1,
            axisTick:{
                show:false,
            },
        },

        series:[{
            label: "Temperature",
            name:"Temperature",
            type: "line",
            symbol: "circle",
            symbolSize: [10,10],
            animation:false,
            data: sepTemp(),
            itemStyle: {
                color: "blue",
                borderColor: 'black'
            }
        },
        {
            name:"Rain",
            type: "line",
            symbol: "circle",
            symbolSize: [10,10],
            animation:false,
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