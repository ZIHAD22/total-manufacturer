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
import Payment from '../Pages/Dashboard/Payment'
import AllUsers from '../Pages/Dashboard/AllUsers'
import RequireAdmin from '../Pages/Shared/RequireAdmin'
import ManageAllOrders from '../Pages/Dashboard/ManageAllOrders'
import AddProduct from '../Pages/Dashboard/AddProduct'
import ManageProducts from '../Pages/Dashboard/ManageProducts'
import useAdmin from '../hooks/useAdmin'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../firebase.init'
import { useState } from 'react'
import Portfolio from '../Pages/Portfolio/Portfolio'

function App() {
  const [isNavRefetch, setNavRefetch] = useState(false)
  const [user] = useAuthState(auth)
  const [admin] = useAdmin(user)

  // const navReFun = (refetch) => {
  //   setNavRefatch(refetch)
  // }

  return (
    <div className="max-w-[1400px] mx-auto">
      <NavBar isNavRefetch={isNavRefetch} setNavRefetch={setNavRefetch} />
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
        <Route
          path="/signUp"
          element={<SignUp setNavRefetch={setNavRefetch} />}
        ></Route>
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          {admin ? (
            <>
              <Route
                index
                element={<MyProfile setNavRefetch={setNavRefetch}></MyProfile>}
              ></Route>
              <Route
                path="users"
                element={
                  <RequireAdmin>
                    <AllUsers />
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="all-orders"
                element={
                  <RequireAdmin>
                    <ManageAllOrders />
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="add-product"
                element={
                  <RequireAdmin>
                    <AddProduct />
                  </RequireAdmin>
                }
              ></Route>
              <Route
                path="manage-products"
                element={
                  <RequireAdmin>
                    <ManageProducts />
                  </RequireAdmin>
                }
              ></Route>
            </>
          ) : (
            <>
              <Route index element={<MyOrders></MyOrders>}></Route>
              <Route
                path="add-review"
                element={<AddReview></AddReview>}
              ></Route>
              <Route
                path="profile"
                element={<MyProfile setNavRefetch={setNavRefetch}></MyProfile>}
              ></Route>
              <Route path="payment/:id" element={<Payment />}></Route>
            </>
          )}
        </Route>

        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
