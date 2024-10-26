
let inp = document.getElementById("inp")
let btn = document.getElementById("btn")
let cent = document.getElementById("cent")
let api = "https://api.weatherapi.com/v1/current.json?key=25175e31b7074cfc895204529222906";
 const getweather = async()=>{
   let data = await fetch (`${api}&q=${inp.value}`)
   let res = await data.json()
   console.log(res)
  cent.innerText =  (` current temp in ${inp.value} is ${res.current.temp_c}°C`)

 }

