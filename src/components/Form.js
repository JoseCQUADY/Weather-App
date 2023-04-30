import React, { useState } from 'react'
import axios from "axios"

export default function Form() {
  const [data, setData] = useState('')
  const [location, setLocation] = useState('')
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=ff2a5b715d3d39d91fd01941a8298842&units=metric&lang=es`



  const search = (event) => {
    if (event.key === 'Enter') {
      
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
    
    }

  }


  return (
    <div className=" d-flex  flex-column align-items-center rounded-left">
      
      <input onChange={event => {setLocation(event.target.value)}} value={location} onKeyPress={search} className=" form-control mt-5 w-25 " type="text" placeholder="Enter City" ></input>

    {data ? <div className="card" >
          <div className="card-body">
          {data.main ? <h1 className=''>{data.name}{data.weather ? <img alt="icon" className="" style={{width:'65px'}} src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img> : null}</h1> : null}
          {data.main ? <div className='container temp'>Tempeture: {data.main.temp} ° </div> : null}
          {data.main ? <div className='container sens'>Feels like: {data.main.feels_like} ° </div> : null}
          {data.wind ? <div className='container wind'>Wind speed: {data.wind.speed} MPH </div> : null}
          <div className='container'></div>
          </div>
      </div>
      
    :
    <div className='req'>Not request yet</div> 
}
      
    
    </div>
  )
}
