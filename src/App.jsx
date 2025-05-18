import { useState } from 'react'

import './App.css'
import RockPaperScissor from './components/RockPaperScissor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <RockPaperScissor/>
    </>
  )
}

export default App
