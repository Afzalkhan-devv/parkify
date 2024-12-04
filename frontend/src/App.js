//import Signin from './pages/user/signin'
import Signup from './user/signup'
import Home from './user/home'
import Signin from './user/signin'
import Admin from './admin/admin'
// import ForgotPassword from './pages/user/forgotPassword'
// import ResetPassword from './pages/user/resetPassword'
// import Home from './pages/house/home'
// import HostHome from './pages/house/hostHome'
// import HomeDetails from './pages/house/homeDetails'
// import SearchHomes from './pages/house/searchHomes'

// this toastr container will be used to show the toast messages
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//import the required components from react-router-dom
// these are needed to configure client side routing
// Route: represents a route for a component
// Routes: collection of routes
// BrowserRouter: container for routes collection
// Link: used to jump to another component using its path
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar'
import GetAllUsers from './admin/getUser'
import GetAllStaff from './admin/getStaff'
import SeeCollection from './admin/getCollection'
import UpdateFare from './admin/updateFare'
import AddParking from './admin/addnewParking'
import Userhome from './user/userhome'
import { CustomDropdown } from './user/bookSlot'
import Myhome from './user/myhome'
import Mybookings from './user/mybookings'
import Payment from './user/payment'
//import Home from './user/home'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/home' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/getuser' element={<GetAllUsers />} />
        <Route path='/getstaff' element={<GetAllStaff />} />
        <Route path='/getcollection' element={<SeeCollection />} />
        <Route path='/updateFare' element={<UpdateFare />} />
        <Route path='/addnewParking' element={<AddParking />} />
        <Route path='/userhome' element={<Userhome />} />
        <Route path='/bookslot' element={<CustomDropdown />} />
        <Route path='/myhome' element={<Myhome />} />
        <Route path='/mybookings' element={<Mybookings />} />
        <Route path='/payment' element={<Payment />} />










        

        
      </Routes>

      {/* this container is used to show toast messages */}
      <ToastContainer position='top-left' autoClose={3000} />
    </BrowserRouter>
  )
}

export default App
