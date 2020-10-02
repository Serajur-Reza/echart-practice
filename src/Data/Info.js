const Info=[{
    "date":"01.09.2020",
    "temperature": 30,
    "rain":3
},

{
    "date":"02.09.2020",
    "temperature": 29,
    "rain":5
},

{
    "date":"03.09.2020",
    "temperature": 25,
    "rain":2
},

{
    "date":"04.09.2020",
    "temperature": 32,
    "rain":7
},
]

export function sepDate(){
    return Info.map(d=>{
        return d.date
    })
}

export function sepTemp(){
    return Info.map(d=>{
        return d.temperature
    })
}

export function sepRain(){
    return Info.map(d=>{
        return d.rain
    })
}




// console.log(sepTemp())

export default Info;