import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Create from './Pages/Create';


function App() {



  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/create' element={<Create></Create>}></Route>
      </Routes>
    </div>
  )
}

export default App
