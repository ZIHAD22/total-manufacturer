import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Purchase from '../Pages/Home/Purchase'
import Footer from '../Pages/Shared/Footer'
import NavBar from '../Pages/Shared/NavBar'
import SignIn from '../Pages/SignIn/SignIn'
import SignUp from '../Pages/SignUp/SignUp'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import RequireAuth from '../Pages/Shared/RequireAuth'
import Dashboard from '../Pages/Dashboard/Dashboard'
import MyOrders from '../Pages/Dashboard/MyOrders'
import AddReview from '../Pages/Dashboard/AddReview'
import MyProfile from '../Pages/Dashboard/MyProfile'

function App() {
  return (
    <div className="max-w-[1400px] mx-auto">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/purchase/:id"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        ></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="add-review" element={<AddReview></AddReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
