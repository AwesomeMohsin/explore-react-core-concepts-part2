import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

  function handleClick() {
    alert('btn-clicked')
  }
  const handleClick2 = () => {
    alert('btn clicked 2')
  }

  const addtoFive = (num) => {
    alert(num + 5);
  }

  return (
    <>
      <h3>React Core concepts 2</h3>

      <Friends></Friends>

      <Users></Users>

      <Team></Team>


      <Counter></Counter>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClick2}>Click 2</button>
      <button onClick={() => { alert('3rd-clicked') }}>click 3</button>
      {/* vejal */}
      <button onClick={()=> addtoFive(3)}>four</button>

      
      
    </>
  )
}

export default App
