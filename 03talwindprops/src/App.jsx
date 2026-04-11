import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let MyObj = {
    username:"Adi",
    age:21
  }
let newArr= [1, 2 ,3]

  return (
    <>
   
     <h1 className='bg-green-400 text-black p-4 rounded-xl'>Talwind test</h1>
      <Card username="chaiaurcode" />
      <Card username="aditya" />
    </>
  )
}

export default App
