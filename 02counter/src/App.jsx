import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 let [counter, setCounter]= useState(15)

  // let counter= 15
  
  const addValue = ()=>{
    
    
  //  counter = counter +1

  // yha functional update ho rha hai jo latest state value deti hai isliye ye har baar +1 hoga
  setCounter(prevcounter=> prevcounter +1)
  setCounter(prevcounter=> prevcounter+1)
  setCounter(prevcounter=> prevcounter+1)
  setCounter(prevcounter=> prevcounter+1)
  setCounter(prevcounter=> prevcounter+1)
  }

  const removeValue = ()=>{
   setCounter(counter - 1)
 
  }
  

  return (

    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}
      >Add value{counter}</button>
      <br />

      
      <button
      onClick={removeValue}
      >Remove value{counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
