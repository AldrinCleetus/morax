import { useState } from 'react'
import { MantineProvider, Text } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import Home from './Pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App ">
      <Home></Home>
    </div>
  )
}

export default App
