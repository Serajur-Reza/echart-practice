import ReactEcharts from 'echarts-for-react';
import React from 'react';

import Info, { sepTemp, sepDate, sepRain } from '../Data/Info';

const Pie = () => {

    const duos= ()=>{
        let colors = ["red", "blue", "green","violet", "yellow", 'black', "greenyellow", "grey"]
        return Info.map((d, index)=>{
            return {
                "value": d.temperature,
                "name": String(d.date),
                "itemStyle":{
                    color:colors[index % colors.length]
                }
            }
        })
    };

    // console.log(duos())

    const chart={
        // tooltip:{
        //     show: true,
        //     trigger: "item",
        //     animation: true,
        //     formatter: 'data: {b} <br/> {a}: {c}'
        // },

        legend:{
            orient:"horizontal",
            left:"center",
            data:sepDate()
        },

        series:[{
            name: "Temperature",
            type: "pie",
            radius: ['50%', '70%'],
            animation: false,
            data: duos(),

            label:{
                color: "black",
                position: "center",
                fontsize: 80,
                formatter:"Pie",
                animator: false
            }
        },

    ]
    }

    return (
        <div>
            <h1>Pie Chart</h1>

            <ReactEcharts option={chart}/>
        </div>
    );
};

export default Pie;