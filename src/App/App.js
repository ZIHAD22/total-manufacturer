import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Footer from '../Pages/Shared/Footer'
import NavBar from '../Pages/Shared/NavBar'
import './App.css'

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
