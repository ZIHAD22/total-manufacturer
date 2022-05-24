import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Purchase from '../Pages/Home/Purchase'
import Footer from '../Pages/Shared/Footer'
import NavBar from '../Pages/Shared/NavBar'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../SignUp/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/purchase" element={<Purchase />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
