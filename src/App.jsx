import { useEffect, useState } from 'react'
import Loader from './component/Loader/loader'
import Home from './pages/Home'
import Clock from './component/digitalClock/Clock'

function App() {
const[loader ,setloader]=useState(true)
useEffect(()=>{
  setloader(false)
},[])


  return (
    <>
{
  loader?<Loader/>:

  <Home/>
}


    </>
  )
}

export default App
