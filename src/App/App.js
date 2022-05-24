import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import NavBar from '../Pages/Shared/NavBar'
import './App.css'

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  )
}

export default App
