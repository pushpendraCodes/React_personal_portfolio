import React, { useEffect, useState } from 'react'
import "./clock.css"
export default function Clock() {

    const[hour ,setHour] = useState(new Date().getHours())
    const[minuts ,setminuts] = useState(new Date().getMinutes())
    const[seconds ,setseconds] = useState(new Date().getSeconds())
const clock = ()=>{
   setHour(new Date().getHours())
     setminuts( new Date().getMinutes())
     setseconds(new Date().getSeconds())
}

setInterval(()=>{
    clock()
} ,1000 )







  return (
    <>
       <div id="clock" className='mx-auto'>
        <h2>The time is now</h2>
        <div id="time">
            <div>
                <span id="hours">{hour}</span>
                <span>Hours</span>
            </div>
            <div>
                <span id="minutes">{minuts}</span>
                <span>Minutes</span>
            </div>
            <div>
                <span id="seconds">{seconds}</span>
                <span>Seconds</span>
            </div>
        </div>

    </div>
    </>
  )
}
