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
        // tooltip:{
        //     show:true,
        //     trigger:'item',
        //     animation: true,
        //     formatter:'Date: {b0} <br /> {a0} : {c0}'
        // },

        legend:{
            orient: 'horizontal',
            data: ["Temperature", "Rain"]
        },

        // grid:{
        //     containLabel: true
        // },

        xAxis:{
            name:"Date",
            nameLocation:"center",
            left:"center",
            data: sepDate(),
            axisTick: false,
            splitLine:{
                show:false
            },
            axisPointer:{
                label:{
                    show:true
                }
            },
            nameTextStyle:{
                padding:20
            },

            interval:1,
            alignWithLabel:true
        },

        yAxis:{
            name:"Temperature & Rain",
            nameLocation: "center",
            axisTick: false,
            splitLine:{
                show:false
            },
            
            nameTextStyle:{
                padding:20
            },

            interval:2
        },
        series:[{
            name:"Temperature",
            type: "bar",
            data: sepTemp(),
            barGap: "70%" ,
            barCategoryGap: "40%",
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
    ]}

    return (
        <div>
            <h1>Bar Chart</h1>

            <ReactEcharts option={chart}/>
        </div>
    );
};

export default Bar;