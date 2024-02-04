import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const[deg, setDeg]= useState("0")
  const[city, setCity]= useState("France")
  const[desc, setDesc]= useState("Raining")
  const[enteredvalue, setEnteredvalue]= useState(" ")

  function handleInput(Event)
  {
     console.log(Event.target.value)
     setEnteredvalue(Event.target.value)
  }

   function getData()
   {
      var Weather = axios (`https://api.openweathermap.org/data/2.5/weather?q=${enteredvalue}&appid=d6efc5044577e12a9d1921114250411a`)

      Weather.then(function(data){
        setDeg(data.data.main.temp)
        setCity(data.data.name)
        setDesc(data.data.weather[0].main)
      })
   }

  return (
    <div className='flex flex-row justify-center h-[100vh] items-center'>
      <div style={{backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"}}className="p-2 rounded-md shadow">
        <h2 className='font-medium'>Hey! ⛅</h2>
        <p className='text-xs'>Do u want to know the weather report?</p>
        <input onChange={handleInput} type='text' className='rounded-md h-6 text-sm mt-2 p-1 outline-none' placeholder='City Name?'></input>
        <br></br>

        <button onClick={getData} className='bg-black text-white rounded-lg p-1 text-xs mt-2'>Get Report ⚡</button>

        <p className='text-xs mt-2'>Degree: {deg} | City: {city} | Weather: {desc}</p>
    </div>
    </div>
  )
}

export default App
