import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const onclic = () =>{
    alert('jai viens de cliqué !')
  }
  const list = ['m', 'p', 'o']
  const see = true
  return (
    <>
      {/* <button onClick={onclic}>Bonjour les gens</button> */}
      {/* {
        see ? <h1>Salut</h1> : <h1>Bonjour</h1> 
      } */}
      <ul>
        {list.map((item, index)=> (
            <li key={index}>{item}</li>
        ))}
      </ul>

    </>
  )
}

export default App
