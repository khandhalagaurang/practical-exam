import { useState } from 'react'
import './App.css'
import Input from './Redux/Input'
import Display from './Redux/Display'
import GoogleAuth from './GoogleAuth'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Input />
      <Display />

      <GoogleAuth />

      {/* json server link
      http://localhost:5000/student */}
    </>
  )
}



export default App