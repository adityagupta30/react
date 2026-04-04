import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App </h1>
    </div>
  )
   
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: 'blank'
//     },

//     children: 'Click me to visit google'
// }

const anotherElement = (
  <a href="https://google.com" target="_blank"> Visit
  google </a>
)


const anotherUser = "chai aur react"

const reactElement = React.createElement(
  'a',
  {href:'https://google.com',target: '_blank'},
  'Click me to visit google',

 anotherElement
)

createRoot(document.getElementById('root')).render(
 
 reactElement
 
)
