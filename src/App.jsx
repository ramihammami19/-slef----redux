import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Second from './components/Second'
import First from './components/First'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><Second/>
    <First/>
    </>
  )
}

export default App
