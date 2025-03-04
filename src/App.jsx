import { createBrowserRouter , createRoutesFromElements , Route , Outlet , RouterProvider } from 'react-router-dom'
import { useState , useEffect } from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Display from './Pages/Display'
import Signin from './Pages/Signin'
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import './App.css'

const Layout = () => {
  return(
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const App = () => {
  const [loading , setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },3000)
  },[])
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/home' element={<Layout/>}>
        <Route index element={<Home/>}/>
      </Route>
      <Route path='/' element={<Display />}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/signup' element={<Signup/>}/>
    </Route>
  ))
  return (
    <>
      {loading ? <div className='bg-black h-[100vh] flex justify-center items-center'>
        <span className='load font-extrabold text-red-600 text-7xl'>
          <span>N</span>
          <span>E</span>
          <span>T</span>
          <span>F</span>
          <span>L</span>
          <span>I</span>
          <span>X</span>
        </span></div> : <RouterProvider router={router}/>
      }
    </>
  )
}

export default App